import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const icons = await prisma.customIcon.findMany();
  return NextResponse.json(icons);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { keyword, brandTerm, customImageUrl } = body;

  const icon = await prisma.customIcon.upsert({
    where: { keyword },
    update: { brandTerm, customImageUrl },
    create: { keyword, brandTerm, customImageUrl },
  });

  return NextResponse.json(icon, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  await prisma.customIcon.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
