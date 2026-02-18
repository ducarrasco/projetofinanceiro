import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/prisma/client';
import { normalizeDate } from '@/lib/dates';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = parseInt(searchParams.get('month') || '', 10);
  const year = parseInt(searchParams.get('year') || '', 10);

  const where: Record<string, any> = {};
  if (!Number.isNaN(month) && !Number.isNaN(year)) {
    where.date = {
      gte: new Date(Date.UTC(year, month - 1, 1)),
      lte: new Date(Date.UTC(year, month, 0, 23, 59, 59, 999)),
    };
  }

  const transactions = await prisma.transaction.findMany({
    where,
    orderBy: { date: 'desc' },
  });

  return NextResponse.json(transactions);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const description = String(body?.description || '').trim();
    const amount = body?.amount;
    const type = body?.type;
    const category = String(body?.category || '').trim() || 'GERAL';
    const date = body?.date;

    if (!description) return NextResponse.json({ error: 'description is required' }, { status: 400 });
    if (amount === undefined || amount === null || amount === '') return NextResponse.json({ error: 'amount is required' }, { status: 400 });
    if (type !== 'INCOME' && type !== 'EXPENSE') return NextResponse.json({ error: 'type must be INCOME or EXPENSE' }, { status: 400 });
    if (!date) return NextResponse.json({ error: 'date is required' }, { status: 400 });

    const created = await prisma.transaction.create({
      data: {
        description,
        amount,
        type,
        category,
        date: normalizeDate(date),
        isRecurring: false,
        installments: Prisma.DbNull,
        groupId: null,
        relatedCardId: null,
      },
    });

    return NextResponse.json([created], { status: 201 });
  } catch (err: any) {
    console.error('POST /api/transactions error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const id = String(body?.id || '').trim();
    const payload = body?.payload || {};
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    const description = payload?.description !== undefined ? String(payload.description || '').trim() : undefined;
    const amount = payload?.amount;
    const type = payload?.type;
    const category = payload?.category !== undefined ? (String(payload.category || '').trim() || 'GERAL') : undefined;
    const date = payload?.date;

    const updated = await prisma.transaction.update({
      where: { id },
      data: {
        description: description === undefined ? undefined : description,
        amount: amount === undefined ? undefined : amount,
        type: type === undefined ? undefined : type,
        category: category === undefined ? undefined : category,
        date: date === undefined ? undefined : normalizeDate(date),
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error('PUT /api/transactions error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    await prisma.transaction.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('DELETE /api/transactions error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}
