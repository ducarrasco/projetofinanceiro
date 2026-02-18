// "YYYY-MM-DD" (input date) -> Date fixo (meio-dia local) para não mudar o dia por timezone
export function parseDateOnlyLocal(dateOnly: string): Date {
  const s = String(dateOnly || '').trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) throw new Error(`Invalid dateOnly: ${s}`);
  const year = Number(m[1]);
  const month = Number(m[2]) - 1;
  const day = Number(m[3]);
  return new Date(year, month, day, 12, 0, 0, 0); // 12:00 local
}

export function toISODateOnly(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Compatibilidade com seu código existente
export function normalizeDate(date: Date | string): Date {
  if (typeof date === 'string') return parseDateOnlyLocal(date);
  return new Date(date);
}
