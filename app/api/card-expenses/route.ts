import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/prisma/client';
import { normalizeDate } from '@/lib/dates';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const description = String(body?.description || '').trim();
    const totalAmount = body?.totalAmount;
    const purchaseDate = body?.purchaseDate;
    const category = String(body?.category || '').trim() || 'GERAL';
    const cardId = String(body?.cardId || '').trim();

    if (!description) return NextResponse.json({ error: 'description is required' }, { status: 400 });
    if (totalAmount === undefined || totalAmount === null || totalAmount === '') return NextResponse.json({ error: 'totalAmount is required' }, { status: 400 });
    if (!purchaseDate) return NextResponse.json({ error: 'purchaseDate is required' }, { status: 400 });
    if (!cardId) return NextResponse.json({ error: 'cardId is required' }, { status: 400 });

    const card = await prisma.creditCard.findUnique({ where: { id: cardId } });
    if (!card) return NextResponse.json({ error: 'cardId not found' }, { status: 404 });

    const created = await prisma.cardExpense.create({
      data: {
        description,
        totalAmount,
        purchaseDate: normalizeDate(purchaseDate),
        category,
        cardId,
        installments: Prisma.DbNull,
        isRecurring: false,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    console.error('POST /api/card-expenses error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    await prisma.cardExpense.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('DELETE /api/card-expenses error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}
