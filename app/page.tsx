'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Plus,
  Trash2,
  Pencil,
  Wallet,
  X,
} from 'lucide-react';
import { toISODateOnly } from '@/lib/dates';

type TransactionType = 'INCOME' | 'EXPENSE';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
  relatedCardId: string | null;
}

interface CardExpense {
  id: string;
  description: string;
  totalAmount: number;
  purchaseDate: string;
  category: string;
  cardId: string;
}

interface CreditCardData {
  id: string;
  name: string;
  limit: number;
  closingDay: number;
  dueDay: number;
  currentBill?: { expenses: CardExpense[]; total: number; available: number };
}

const MONTH_NAMES = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
];

const today = new Date();

function formatCurrencyFromCents(cents: number) {
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function maskBRLFromDigits(raw: string): { masked: string; cents: number } {
  const digits = (raw || '').replace(/\D/g, '');
  const cents = digits ? parseInt(digits, 10) : 0;
  return { masked: formatCurrencyFromCents(cents), cents };
}

function groupByISODate<T extends { date: string }>(array: T[]) {
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const key = toISODateOnly(new Date(item.date));
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
}

function SmartIcon({ t }: { t: Transaction }) {
  if (t.relatedCardId) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        <CreditCard className="h-4 w-4" />
      </div>
    );
  }
  if (t.type === 'INCOME') {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <ArrowDownCircle className="h-4 w-4" />
      </div>
    );
  }
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-700">
      <ArrowUpCircle className="h-4 w-4" />
    </div>
  );
}

function Modal({
  title,
  open,
  onClose,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button onClick={onClose} className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'cards'>('dashboard');
  const [monthYear, setMonthYear] = useState({ month: today.getMonth() + 1, year: today.getFullYear() });

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cards, setCards] = useState<CreditCardData[]>([]);
  const [loading, setLoading] = useState(false);

  // Transação (conta)
  const [txOpen, setTxOpen] = useState(false);
  const [editingTxId, setEditingTxId] = useState<string | null>(null);
  const [tx, setTx] = useState({
    description: '',
    amountMasked: 'R$ 0,00',
    amountCents: 0,
    date: toISODateOnly(new Date()),
    category: 'GERAL',
    type: 'EXPENSE' as TransactionType,
  });

  // Cartões
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const selectedCard = useMemo(() => cards.find((c) => c.id === selectedCardId) || null, [cards, selectedCardId]);

  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchase, setPurchase] = useState({
    description: '',
    totalMasked: 'R$ 0,00',
    totalCents: 0,
    purchaseDate: toISODateOnly(new Date()),
    category: 'GERAL',
  });

  // Novo/Editar cartão
  const [cardOpen, setCardOpen] = useState(false);
  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [cardForm, setCardForm] = useState({
    name: '',
    limitMasked: 'R$ 0,00',
    limitCents: 0,
    closingDay: 17,
    dueDay: 23,
  });

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [tRes, cRes] = await Promise.all([
        fetch(`/api/transactions?month=${monthYear.month}&year=${monthYear.year}`),
        fetch(`/api/cards?month=${monthYear.month}&year=${monthYear.year}`),
      ]);

      const tData = await tRes.json();
      const cData = await cRes.json();

      setTransactions(tData.map((t: any) => ({ ...t, amount: Number(t.amount) })));
      setCards(
        cData.map((c: any) => ({
          ...c,
          limit: Number(c.limit),
          currentBill: c.currentBill
            ? {
                ...c.currentBill,
                total: Number(c.currentBill.total),
                available: Number(c.currentBill.available),
                expenses: (c.currentBill.expenses || []).map((e: any) => ({ ...e, totalAmount: Number(e.totalAmount) })),
              }
            : undefined,
        })),
      );
    } finally {
      setLoading(false);
    }
  }, [monthYear]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const changeMonth = (diff: number) => {
    setMonthYear((prev) => {
      let m = prev.month + diff;
      let y = prev.year;
      if (m < 1) { m = 12; y--; }
      if (m > 12) { m = 1; y++; }
      return { month: m, year: y };
    });
  };

  const kpi = useMemo(() => {
    let inc = 0, exp = 0;
    transactions.forEach((t) => {
      if (t.type === 'INCOME') inc += Number(t.amount);
      else exp += Number(t.amount);
    });
    return { inc, exp, result: inc - exp };
  }, [transactions]);

  const grouped = useMemo(() => groupByISODate(transactions), [transactions]);

  // Transações (conta)
  function openNewTx() {
    setEditingTxId(null);
    setTx({
      description: '',
      amountMasked: 'R$ 0,00',
      amountCents: 0,
      date: toISODateOnly(new Date()),
      category: 'GERAL',
      type: 'EXPENSE',
    });
    setTxOpen(true);
  }

  function openEditTx(t: Transaction) {
    setEditingTxId(t.id);
    const cents = Math.round(Number(t.amount) * 100);
    setTx({
      description: t.description,
      amountMasked: formatCurrencyFromCents(cents),
      amountCents: cents,
      date: toISODateOnly(new Date(t.date)),
      category: t.category || 'GERAL',
      type: t.type,
    });
    setTxOpen(true);
  }

  async function saveTransaction() {
    const payload = {
      description: tx.description,
      amount: (tx.amountCents / 100).toFixed(2),
      type: tx.type,
      category: (tx.category || '').trim() || 'GERAL',
      date: tx.date,
    };

    const res = editingTxId
      ? await fetch('/api/transactions', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingTxId, payload }),
        })
      : await fetch('/api/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }

    setTxOpen(false);
    await fetchAll();
  }

  async function removeTransaction(id: string) {
    const ok = window.confirm('Excluir esta transação?');
    if (!ok) return;

    const res = await fetch(`/api/transactions?id=${id}`, { method: 'DELETE' });
    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }
    await fetchAll();
  }

  // Compras no cartão
  async function createCardExpense() {
    if (!selectedCardId) {
      alert('Selecione um cartão clicando nele.');
      return;
    }

    const res = await fetch('/api/card-expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cardId: selectedCardId,
        description: purchase.description,
        totalAmount: (purchase.totalCents / 100).toFixed(2),
        purchaseDate: purchase.purchaseDate,
        category: (purchase.category || '').trim() || 'GERAL',
        isRecurring: false,
        installments: null,
      }),
    });

    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }

    setPurchaseOpen(false);
    await fetchAll();
  }

  async function removeCardExpense(id: string) {
    const ok = window.confirm('Excluir esta compra do cartão?');
    if (!ok) return;

    const res = await fetch(`/api/card-expenses?id=${id}`, { method: 'DELETE' });
    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }
    await fetchAll();
  }

  // Cartões
  async function openNewCard() {
    setEditingCardId(null);
    setCardForm({
      name: '',
      limitMasked: 'R$ 0,00',
      limitCents: 0,
      closingDay: 17,
      dueDay: 23,
    });
    setCardOpen(true);
  }

  async function openEditCard(card: CreditCardData) {
    setEditingCardId(card.id);
    const cents = Math.round(Number(card.limit) * 100);
    setCardForm({
      name: card.name,
      limitMasked: formatCurrencyFromCents(cents),
      limitCents: cents,
      closingDay: card.closingDay,
      dueDay: card.dueDay,
    });
    setCardOpen(true);
  }

  async function saveCard() {
    const payload = {
      name: cardForm.name,
      limit: (cardForm.limitCents / 100).toFixed(2),
      closingDay: cardForm.closingDay,
      dueDay: cardForm.dueDay,
    };

    const res = editingCardId
      ? await fetch(`/api/cards/${editingCardId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      : await fetch(`/api/cards`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }

    setCardOpen(false);
    await fetchAll();
  }

  async function removeCard(cardId: string) {
    const ok = window.confirm('Remover este cartão? Isso apaga as compras do cartão.');
    if (!ok) return;

    const res = await fetch(`/api/cards/${cardId}`, { method: 'DELETE' });
    if (!res.ok) {
      alert(`Erro: ${res.status}\n${await res.text()}`);
      return;
    }

    if (selectedCardId === cardId) setSelectedCardId(null);
    await fetchAll();
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Finance Dashboard</h1>
            <p className="text-sm text-slate-600">Controle de gastos pessoais</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-300 bg-white p-2 hover:bg-slate-50" onClick={() => changeMonth(-1)}>
              <ChevronLeft className="h-4 w-4 text-slate-700" />
            </button>
            <span className="min-w-[160px] text-center text-sm font-semibold text-slate-800">
              {MONTH_NAMES[monthYear.month - 1]} {monthYear.year}
            </span>
            <button className="rounded-full border border-slate-300 bg-white p-2 hover:bg-slate-50" onClick={() => changeMonth(1)}>
              <ChevronRight className="h-4 w-4 text-slate-700" />
            </button>
          </div>
        </header>

        <div className="mb-5 flex gap-2">
          <button
            className={`rounded-full px-5 py-2 text-sm font-medium ${activeTab === 'dashboard' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 shadow-sm'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Visão Geral
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-medium ${activeTab === 'cards' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 shadow-sm'}`}
            onClick={() => setActiveTab('cards')}
          >
            💳 Cartões
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <>
            <section className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-4 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wide text-emerald-900/70">Entradas</div>
                <div className="mt-2 text-lg font-bold text-emerald-900">{kpi.inc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
              </div>
              <div className="rounded-2xl bg-red-50 p-4 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wide text-red-900/70">Saídas</div>
                <div className="mt-2 text-lg font-bold text-red-900">{kpi.exp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
              </div>
              <div className={`rounded-2xl p-4 shadow-sm ${kpi.result >= 0 ? 'bg-emerald-100' : 'bg-red-100'}`}>
                <div className="text-xs font-medium uppercase tracking-wide opacity-70">Resultado</div>
                <div className="mt-2 text-lg font-bold">{kpi.result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
              </div>
            </section>

            <section className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">Extrato</h2>
                <button
                  className="flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  onClick={openNewTx}
                >
                  <Plus className="h-4 w-4" /> Nova
                </button>
              </div>

                            {loading && <p className="py-4 text-center text-xs text-slate-600">Carregando...</p>}

              {!loading && Object.keys(grouped).length === 0 && (
                <div className="py-8 text-center">
                  <Wallet className="mx-auto mb-2 h-8 w-8 text-slate-300" />
                  <p className="text-sm text-slate-600">Nenhuma transação.</p>
                </div>
              )}

              <div className="space-y-4">
                {Object.entries(grouped).map(([date, list]) => {
                  const dayBalance = list.reduce((acc, t) => acc + (t.type === 'INCOME' ? Number(t.amount) : -Number(t.amount)), 0);
                  const [y, m, d] = date.split('-');
                  const formatted = `${d}/${m}/${y}`;

                  return (
                    <div key={date} className="overflow-hidden rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between bg-slate-50 px-4 py-2">
                        <span className="text-xs font-semibold text-slate-700">{formatted}</span>
                        <span className={`text-xs font-bold ${dayBalance >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                          {dayBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                      </div>

                      <div className="divide-y divide-slate-50">
                        {list.map((t) => (
                          <div key={t.id} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50">
                            <SmartIcon t={t} />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate text-sm font-medium text-slate-900">{t.description}</span>
                                <span className={`shrink-0 text-sm font-semibold ${t.type === 'INCOME' ? 'text-emerald-700' : 'text-red-700'}`}>
                                  {t.type === 'INCOME' ? '+' : '-'}
                                  {Number(t.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </span>
                              </div>
                              <div className="mt-0.5 flex items-center gap-2">
                                <span className="text-xs text-slate-700">{t.category || 'GERAL'}</span>
                                {t.relatedCardId && <span className="text-xs text-blue-700">💳 cartão</span>}
                              </div>
                            </div>
                            <div className="flex shrink-0 gap-1">
                              <button
                                className="rounded-full p-1.5 text-slate-400 hover:bg-blue-50 hover:text-blue-700"
                                onClick={() => openEditTx(t)}
                                title="Editar"
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </button>
                              <button
                                className="rounded-full p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-700"
                                onClick={() => removeTransaction(t.id)}
                                title="Excluir"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {activeTab === 'cards' && (
          <section className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">Cartões de Crédito</h2>

              <div className="flex gap-2">
                <button
                  className="flex items-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  onClick={openNewCard}
                >
                  <Plus className="h-4 w-4" /> Novo cartão
                </button>

                <button
                  className="flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  onClick={() => {
                    if (!selectedCardId) return alert('Selecione um cartão clicando nele.');
                    setPurchase({
                      description: '',
                      totalMasked: 'R$ 0,00',
                      totalCents: 0,
                      purchaseDate: toISODateOnly(new Date()),
                      category: 'GERAL',
                    });
                    setPurchaseOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4" /> + Compra
                </button>
              </div>
            </div>

            {cards.length === 0 ? (
              <p className="text-sm text-slate-600">Nenhum cartão cadastrado.</p>
            ) : (
              <>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {cards.map((card) => {
                    const used = card.currentBill?.total ?? 0;
                    const limit = card.limit;
                    const pct = limit > 0 ? Math.min(100, (used / limit) * 100) : 0;
                    const barColor = pct > 80 ? 'bg-red-500' : pct > 50 ? 'bg-amber-400' : 'bg-emerald-500';
                    const selected = selectedCardId === card.id;

                    return (
                      <div
                        key={card.id}
                        className={`min-w-[280px] rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-800 to-slate-900 p-4 text-white shadow-md ${selected ? 'ring-2 ring-blue-500' : ''}`}
                      >
                        <button className="w-full text-left" onClick={() => setSelectedCardId(card.id)}>
                          <div className="mb-3 flex items-center justify-between">
                            <span className="text-base font-bold">{card.name}</span>
                            <CreditCard className="h-5 w-5 opacity-60" />
                          </div>

                          <div className="mb-1 text-xs opacity-70">Fatura atual</div>
                          <div className="mb-3 text-2xl font-bold">
                            {used.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                          </div>

                          <div className="mb-1 h-2 rounded-full bg-white/20">
                            <div className={`h-2 rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
                          </div>

                          <div className="mb-4 flex justify-between text-[11px] opacity-70">
                            <span>Usado: {used.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <span>Limite: {limit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                          </div>

                          <div className="flex justify-between text-[11px] opacity-70">
                            <span>Fecha: dia {card.closingDay}</span>
                            <span>Vence: dia {card.dueDay}</span>
                          </div>
                        </button>

                        <div className="mt-3 flex gap-2">
                          <button
                            className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-xs hover:bg-white/20"
                            onClick={() => openEditCard(card)}
                            title="Editar cartão"
                          >
                            <Pencil className="h-4 w-4" /> Editar
                          </button>
                          <button
                            className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-xs hover:bg-white/20"
                            onClick={() => removeCard(card.id)}
                            title="Remover cartão"
                          >
                            <Trash2 className="h-4 w-4" /> Remover
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {selectedCard && (
                  <div className="mt-4">
                    <div className="mb-2 text-sm font-semibold text-slate-900">
                      Compras da fatura ({selectedCard.name})
                    </div>
                    {(selectedCard.currentBill?.expenses?.length ?? 0) === 0 ? (
                      <p className="text-sm text-slate-600">Sem compras nesta fatura.</p>
                    ) : (
                      <div className="space-y-2">
                        {selectedCard.currentBill!.expenses.map((e) => (
                          <div key={e.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                            <div className="min-w-0">
                              <div className="truncate text-sm font-medium text-slate-900">{e.description}</div>
                              <div className="text-xs text-slate-700">
                                {(e.category || 'GERAL')} • {toISODateOnly(new Date(e.purchaseDate)).split('-').reverse().join('/')}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-semibold text-slate-900">
                                {Number(e.totalAmount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                              </div>
                              <button
                                className="rounded-full p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-700"
                                onClick={() => removeCardExpense(e.id)}
                                title="Excluir compra"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </section>
        )}
      </div>

      {/* Modal Nova/Editar transação */}
      <Modal title={editingTxId ? 'Editar transação' : 'Nova transação'} open={txOpen} onClose={() => setTxOpen(false)}>
        <div className="space-y-3 text-sm">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">Descrição</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
              value={tx.description}
              onChange={(e) => setTx((p) => ({ ...p, description: e.target.value }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">Valor</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
              value={tx.amountMasked}
              onChange={(e) => {
                const { masked, cents } = maskBRLFromDigits(e.target.value);
                setTx((p) => ({ ...p, amountMasked: masked, amountCents: cents }));
              }}
              inputMode="numeric"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-700">Data</label>
              <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
                type="date"
                value={tx.date}
                onChange={(e) => setTx((p) => ({ ...p, date: e.target.value }))}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-700">Categoria (opcional)</label>
              <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
                value={tx.category}
                onChange={(e) => setTx((p) => ({ ...p, category: e.target.value }))}
                placeholder="GERAL"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className={`flex-1 rounded-xl border px-3 py-2 text-sm ${tx.type === 'EXPENSE' ? 'border-red-500 bg-red-50 text-red-800' : 'border-slate-200 text-slate-700'}`}
              onClick={() => setTx((p) => ({ ...p, type: 'EXPENSE' }))}
            >
              Despesa
            </button>
            <button
              className={`flex-1 rounded-xl border px-3 py-2 text-sm ${tx.type === 'INCOME' ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-700'}`}
              onClick={() => setTx((p) => ({ ...p, type: 'INCOME' }))}
            >
              Receita
            </button>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button className="rounded-xl border border-slate-300 px-5 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => setTxOpen(false)}>
              Cancelar
            </button>
            <button className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700" onClick={saveTransaction}>
              Salvar
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Compra no cartão */}
      <Modal title="Nova compra no cartão" open={purchaseOpen} onClose={() => setPurchaseOpen(false)}>
        <div className="space-y-3 text-sm">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">Descrição</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
              value={purchase.description}
              onChange={(e) => setPurchase((p) => ({ ...p, description: e.target.value }))}
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">Valor</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
              value={purchase.totalMasked}
              onChange={(e) => {
                const { masked, cents } = maskBRLFromDigits(e.target.value);
                setPurchase((p) => ({ ...p, totalMasked: masked, totalCents: cents }));
              }}
              inputMode="numeric"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-700">Data</label>
              <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
                type="date"
                value={purchase.purchaseDate}
                onChange={(e) => setPurchase((p) => ({ ...p, purchaseDate: e.target.value }))}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-700">Categoria (opcional)</label>
              <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900"
                value={purchase.category}
                onChange={(e) => setPurchase((p) => ({ ...p, category: e.target.value }))}
                placeholder="GERAL"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button className="rounded-xl border border-slate-300 px-5 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => setPurchaseOpen(false)}>
              Cancelar
            </button>
            <button className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-sem
