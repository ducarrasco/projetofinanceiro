import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type BillRange = { start: Date; end: Date };

function getBillingRange(month: number, year: number, closingDay: number): BillRange {
  return {
    start: new Date(Date.UTC(year, month - 2, closingDay)),
    end: new Date(Date.UTC(year, month - 1, closingDay)),
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = parseInt(searchParams.get('month') || '', 10);
  const year = parseInt(searchParams.get('year') || '', 10);

  const cards = await prisma.creditCard.findMany();

  if (Number.isNaN(month) || Number.isNaN(year)) {
    return NextResponse.json(cards);
  }

  const result = await Promise.all(
    cards.map(async (card) => {
      const { start, end } = getBillingRange(month, year, card.closingDay);
      const expenses = await prisma.cardExpense.findMany({
        where: { cardId: card.id, purchaseDate: { gte: start, lt: end } },
      });

      const used = expenses.reduce((acc: number, e) => acc + Number(e.totalAmount), 0);

      return {
        ...card,
        currentBill: {
          expenses,
          total: used,
          available: Number(card.limit) - used,
        },
      };
    }),
  );

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = String(body?.name || '').trim();
  const limit = body?.limit;
  const closingDay = Number(body?.closingDay);
  const dueDay = Number(body?.dueDay);

  if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
  if (limit === undefined || limit === null || limit === '') return NextResponse.json({ error: 'limit is required' }, { status: 400 });
  if (!Number.isFinite(closingDay) || closingDay < 1 || closingDay > 31) return NextResponse.json({ error: 'closingDay must be 1..31' }, { status: 400 });
  if (!Number.isFinite(dueDay) || dueDay < 1 || dueDay > 31) return NextResponse.json({ error: 'dueDay must be 1..31' }, { status: 400 });

  const card = await prisma.creditCard.create({
    data: { name, limit, closingDay, dueDay },
  });

  return NextResponse.json(card, { status: 201 });
}
