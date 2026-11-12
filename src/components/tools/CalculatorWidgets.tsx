'use client';

import React, { useState } from 'react';

export function PositionSizingWidget() {
  const [capital, setCapital] = useState(100000);
  const [riskPct, setRiskPct] = useState(1);
  const [entry, setEntry] = useState(500);
  const [stopLoss, setStopLoss] = useState(480);

  const maxRiskAmount = (capital * riskPct) / 100;
  const riskPerShare = Math.abs(entry - stopLoss);
  const quantity = riskPerShare > 0 ? Math.floor(maxRiskAmount / riskPerShare) : 0;
  const positionValue = quantity * entry;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Capital (₹)</label>
          <input type="number" min={1000} value={capital} onChange={(e) => setCapital(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Risk Per Setup (%)</label>
          <input type="number" step="0.25" min={0.25} max={10} value={riskPct} onChange={(e) => setRiskPct(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Entry Price (₹)</label>
          <input type="number" min={1} value={entry} onChange={(e) => setEntry(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Stop-Loss Price (₹)</label>
          <input type="number" min={1} value={stopLoss} onChange={(e) => setStopLoss(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Recommended Quantity</span>
          <div className="text-3xl font-black text-[#4ADE80]">{quantity} Shares</div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Max Rupee Risk</span>
            <strong className="text-sm">₹{maxRiskAmount.toLocaleString('en-IN')}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Stop-Loss Distance</span>
            <strong className="text-sm">₹{riskPerShare.toFixed(2)}</strong>
          </div>
          <div className="col-span-2">
            <span className="text-slate-400 block">Total Capital Deployed</span>
            <strong className="text-sm">₹{positionValue.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RiskRewardWidget() {
  const [entry, setEntry] = useState(250);
  const [stopLoss, setStopLoss] = useState(240);
  const [target, setTarget] = useState(275);

  const risk = Math.abs(entry - stopLoss);
  const reward = Math.abs(target - entry);
  const ratio = risk > 0 ? (reward / risk).toFixed(2) : '0.00';
  const minWinRate = risk + reward > 0 ? ((risk / (risk + reward)) * 100).toFixed(1) : '0.0';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Entry Price (₹)</label>
          <input type="number" value={entry} onChange={(e) => setEntry(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Stop-Loss (₹)</label>
          <input type="number" value={stopLoss} onChange={(e) => setStopLoss(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Target Price (₹)</label>
          <input type="number" value={target} onChange={(e) => setTarget(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Risk-to-Reward Ratio</span>
          <div className="text-3xl font-black text-[#4ADE80]">1 : {ratio}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Risk / Unit</span>
            <strong className="text-sm">₹{risk.toFixed(2)}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Reward / Unit</span>
            <strong className="text-sm">₹{reward.toFixed(2)}</strong>
          </div>
          <div className="col-span-2">
            <span className="text-slate-400 block">Break-Even Accuracy Needed</span>
            <strong className="text-sm">{minWinRate}% Win Rate</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfitLossWidget() {
  const [buyPrice, setBuyPrice] = useState(400);
  const [sellPrice, setSellPrice] = useState(430);
  const [qty, setQty] = useState(100);

  const pnl = (sellPrice - buyPrice) * qty;
  const roi = buyPrice > 0 ? (((sellPrice - buyPrice) / buyPrice) * 100).toFixed(2) : '0.00';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Buy Price (₹)</label>
          <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Sell Price (₹)</label>
          <input type="number" value={sellPrice} onChange={(e) => setSellPrice(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Quantity</label>
          <input type="number" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Gross P&amp;L</span>
          <div className={`text-3xl font-black ${pnl >= 0 ? 'text-[#4ADE80]' : 'text-red-400'}`}>
            {pnl >= 0 ? '+' : ''}₹{pnl.toLocaleString('en-IN')}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Turnover</span>
            <strong className="text-sm">₹{((buyPrice + sellPrice) * qty).toLocaleString('en-IN')}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Return %</span>
            <strong className="text-sm">{roi}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrokerageWidget() {
  const [buyPrice, setBuyPrice] = useState(1000);
  const [sellPrice, setSellPrice] = useState(1020);
  const [qty, setQty] = useState(50);

  const buyVal = buyPrice * qty;
  const sellVal = sellPrice * qty;
  const turnover = buyVal + sellVal;
  const brokerage = Math.min(20, buyVal * 0.0003) + Math.min(20, sellVal * 0.0003);
  const stt = sellVal * 0.00025;
  const exchange = turnover * 0.0000325;
  const gst = (brokerage + exchange) * 0.18;
  const totalCharges = brokerage + stt + exchange + gst;
  const netPnl = sellVal - buyVal - totalCharges;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Buy Price (₹)</label>
          <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Sell Price (₹)</label>
          <input type="number" value={sellPrice} onChange={(e) => setSellPrice(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Quantity</label>
          <input type="number" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Estimated Net P&amp;L</span>
          <div className={`text-3xl font-black ${netPnl >= 0 ? 'text-[#4ADE80]' : 'text-red-400'}`}>
            ₹{netPnl.toFixed(2)}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Brokerage</span>
            <strong>₹{brokerage.toFixed(2)}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">STT + GST + Fees</span>
            <strong>₹{(totalCharges - brokerage).toFixed(2)}</strong>
          </div>
          <div className="col-span-2">
            <span className="text-slate-400 block">Total Statutory Cost</span>
            <strong>₹{totalCharges.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SipWidget() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const r = rate / 12 / 100;
  const invested = monthly * months;
  const futureValue =
    r > 0 ? monthly * (((Math.pow(1 + r, months) - 1) / r) * (1 + r)) : invested;
  const gains = futureValue - invested;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Monthly SIP (₹)</label>
          <input type="number" min={500} value={monthly} onChange={(e) => setMonthly(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Assumed Annual Rate (%)</label>
          <input type="number" step="0.5" min={1} max={30} value={rate} onChange={(e) => setRate(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Time Horizon (Years)</label>
          <input type="number" min={1} max={40} value={years} onChange={(e) => setYears(Number(e.target.value) || 1)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Illustrative Future Value</span>
          <div className="text-3xl font-black text-[#4ADE80]">
            ₹{Math.round(futureValue).toLocaleString('en-IN')}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Total Invested</span>
            <strong>₹{Math.round(invested).toLocaleString('en-IN')}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Compounded Growth</span>
            <strong>₹{Math.round(gains).toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompoundInterestWidget() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const total = principal * Math.pow(1 + rate / 100, years);
  const interest = total - principal;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Principal Amount (₹)</label>
          <input type="number" min={1000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Annual Rate (%)</label>
          <input type="number" step="0.5" min={1} max={35} value={rate} onChange={(e) => setRate(Number(e.target.value) || 0)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-[#0B2545] mb-1">Duration (Years)</label>
          <input type="number" min={1} max={40} value={years} onChange={(e) => setYears(Number(e.target.value) || 1)} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
        </div>
      </div>

      <div className="bg-[#0B2545] text-white rounded-2xl p-6 flex flex-col justify-center space-y-4">
        <div>
          <span className="text-xs text-slate-300">Compounded Total</span>
          <div className="text-3xl font-black text-[#4ADE80]">
            ₹{Math.round(total).toLocaleString('en-IN')}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-slate-400 block">Principal</span>
            <strong>₹{Math.round(principal).toLocaleString('en-IN')}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Interest Earned</span>
            <strong>₹{Math.round(interest).toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

