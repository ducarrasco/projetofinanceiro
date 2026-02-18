import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const [transactions, cards, expenses, icons] = await Promise.all([
    prisma.transaction.findMany(),
    prisma.creditCard.findMany(),
    prisma.cardExpense.findMany(),
    prisma.customIcon.findMany(),
  ]);

  return new NextResponse(
    JSON.stringify({ transactions, cards, expenses, icons }, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'attachment; filename="finance-backup.json"',
      },
    },
  );
}

export async function POST(req: Request) {
  const { transactions, cards, expenses, icons } = await req.json();

  await prisma.$transaction([
    prisma.cardExpense.deleteMany(),
    prisma.transaction.deleteMany(),
    prisma.creditCard.deleteMany(),
    prisma.customIcon.deleteMany(),
  ]);

  if (cards?.length) await prisma.creditCard.createMany({ data: cards });
  if (transactions?.length) await prisma.transaction.createMany({ data: transactions });
  if (expenses?.length) await prisma.cardExpense.createMany({ data: expenses });
  if (icons?.length) await prisma.customIcon.createMany({ data: icons });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await prisma.$transaction([
    prisma.cardExpense.deleteMany(),
    prisma.transaction.deleteMany(),
    prisma.creditCard.deleteMany(),
    prisma.customIcon.deleteMany(),
  ]);
  return NextResponse.json({ ok: true });
}
