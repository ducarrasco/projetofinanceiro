import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const body = await req.json();
    const name = String(body?.name || '').trim();
    const limit = body?.limit;
    const closingDay = Number(body?.closingDay);
    const dueDay = Number(body?.dueDay);

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 });
    if (limit === undefined || limit === null || limit === '') return NextResponse.json({ error: 'limit is required' }, { status: 400 });
    if (!Number.isFinite(closingDay) || closingDay < 1 || closingDay > 31) return NextResponse.json({ error: 'closingDay must be 1..31' }, { status: 400 });
    if (!Number.isFinite(dueDay) || dueDay < 1 || dueDay > 31) return NextResponse.json({ error: 'dueDay must be 1..31' }, { status: 400 });

    const updated = await prisma.creditCard.update({
      where: { id },
      data: { name, limit, closingDay, dueDay },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error('PUT /api/cards/[id] error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    await prisma.$transaction([
      prisma.cardExpense.deleteMany({ where: { cardId: id } }),
      prisma.transaction.updateMany({ where: { relatedCardId: id }, data: { relatedCardId: null } }),
      prisma.creditCard.delete({ where: { id } }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('DELETE /api/cards/[id] error:', err);
    return NextResponse.json({ error: 'Internal error', detail: String(err?.message || err) }, { status: 500 });
  }
}
