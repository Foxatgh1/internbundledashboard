import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const DEFAULT_ROUNDS = [
  {
    id: 1,
    label: 'Round 1',
    preMoney: 8000000,
    investment: 2000000,
    optionPool: 10,
    optionPoolPreMoney: true,
  },
]

function formatCurrency(val) {
  if (val >= 1_000_000_000) return `$${(val / 1_000_000_000).toFixed(2)}B`
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`
  if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`
  return `$${val.toFixed(0)}`
}

function formatPct(val) {
  return `${val.toFixed(1)}%`
}

function formatShares(val) {
  if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(2)}M`
  if (val >= 1_000) return `${(val / 1_000).toFixed(0)}K`
  return val.toFixed(0)
}

function SliderInput({ label, value, onChange, format }) {
  const [focused, setFocused] = useState(false)
  const [raw, setRaw] = useState('')

  const handleFocus = (e) => {
    setFocused(true)
    const rawVal = format === 'millions' ? String(value / 1_000_000) : String(value)
    setRaw(rawVal)
    setTimeout(() => e.target.select(), 0)
  }

  const handleBlur = () => {
    setFocused(false)
    const parsed = parseFloat(raw.replace(/[$,M%]/g, ''))
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed * (format === 'millions' ? 1_000_000 : 1)))
      onChange(clamped)
    }
  }

  const displayValue = focused ? raw : (
    format === 'millions' ? formatCurrency(value) :
    format === 'percent' ? `${value}%` :
    value
  )

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-[#888888]">{label}</label>
        <input
          type="text"
          value={displayValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={e => setRaw(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') e.target.blur() }}
          className="w-28 text-right text-xs font-semibold text-[#1A1A1A] border border-[#E8E8E8] rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#AAAAAA] focus:border-[#AAAAAA] bg-white"
        />
      </div>
    </div>
  )
}

function RoundInputs({ round, onChange, onRemove, canRemove }) {
  return (
    <div className="bg-[#F8F8F8] rounded-xl border border-[#E8E8E8] p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[#1A1A1A]">{round.label}</h4>
        {canRemove && (
          <button onClick={onRemove} className="text-xs text-[#CCCCCC] hover:text-red-500 transition-colors">
            Remove
          </button>
        )}
      </div>

      <SliderInput
        label="Pre-Money Valuation"
        value={round.preMoney}
        min={500000}
        max={500000000}
        step={500000}
        format="millions"
        onChange={val => onChange({ ...round, preMoney: val })}
      />
      <SliderInput
        label="Investment Amount"
        value={round.investment}
        min={100000}
        max={200000000}
        step={100000}
        format="millions"
        onChange={val => onChange({ ...round, investment: val })}
      />
      <SliderInput
        label="Option Pool %"
        value={round.optionPool}
        min={0}
        max={30}
        step={0.5}
        format="percent"
        onChange={val => onChange({ ...round, optionPool: val })}
      />

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#888888]">Option pool created pre-money?</span>
        <button
          onClick={() => onChange({ ...round, optionPoolPreMoney: !round.optionPoolPreMoney })}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            round.optionPoolPreMoney ? 'bg-[#1A1A1A]' : 'bg-[#DDDDDD]'
          }`}
        >
          <span
            className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform"
            style={{ transform: round.optionPoolPreMoney ? 'translateX(18px)' : 'translateX(2px)' }}
          />
        </button>
      </div>
      <p className="text-[10px] text-[#BBBBBB]">
        {round.optionPoolPreMoney
          ? 'Pre-money: option pool dilutes founders before investment. Investors benefit.'
          : 'Post-money: option pool dilutes all shareholders equally after investment.'}
      </p>
    </div>
  )
}

function OwnershipBar({ segments }) {
  return (
    <div className="space-y-3">
      <div className="flex h-8 rounded-lg overflow-hidden">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.label}
            initial={{ width: 0 }}
            animate={{ width: `${(seg.pct / 100) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
            className={`relative group ${seg.color}`}
            title={`${seg.label}: ${formatPct(seg.pct)}`}
          >
            {seg.pct > 8 && (
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white/90 truncate px-1">
                {formatPct(seg.pct)}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {segments.map(seg => (
          <div key={seg.label} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-sm ${seg.color}`} />
            <span className="text-[11px] text-[#888888]">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function computeCapTable(rounds) {
  let founderShares = 10_000_000
  let totalShares = founderShares
  let optionPoolShares = 0
  const investorGroups = []

  for (const round of rounds) {
    const { preMoney, investment, optionPool, optionPoolPreMoney } = round

    if (optionPoolPreMoney) {
      const targetPct = optionPool / 100
      const pps = preMoney / totalShares
      const investorShares = investment / pps

      let optionNewShares = Math.max(0, targetPct * totalShares - optionPoolShares)
      for (let iter = 0; iter < 5; iter++) {
        const newTotal = totalShares + optionNewShares + investorShares
        const targetOptionTotal = targetPct * newTotal
        optionNewShares = Math.max(0, targetOptionTotal - optionPoolShares)
      }

      optionPoolShares += optionNewShares
      totalShares += optionNewShares + investorShares
      investorGroups.push({ label: round.label, shares: investorShares, color: round.color })
    } else {
      const pps = preMoney / totalShares
      const investorShares = investment / pps
      totalShares += investorShares
      investorGroups.push({ label: round.label, shares: investorShares, color: round.color })

      const targetPct = optionPool / 100
      const targetOptionTotal = targetPct * totalShares
      const optionNewShares = Math.max(0, targetOptionTotal - optionPoolShares)
      optionPoolShares += optionNewShares
      totalShares += optionNewShares
    }
  }

  return {
    totalShares,
    founderShares,
    founderPct: (founderShares / totalShares) * 100,
    optionPoolShares,
    optionPoolPct: (optionPoolShares / totalShares) * 100,
    investorGroups: investorGroups.map(g => ({
      ...g,
      pct: (g.shares / totalShares) * 100,
    })),
  }
}

const ROUND_COLORS = [
  { bar: 'bg-violet-500', badge: 'bg-violet-50 text-violet-700' },
  { bar: 'bg-purple-600', badge: 'bg-purple-50 text-purple-700' },
  { bar: 'bg-fuchsia-600', badge: 'bg-fuchsia-50 text-fuchsia-700' },
]

export default function DilutionCalculator() {
  const [rounds, setRounds] = useState(DEFAULT_ROUNDS)

  const updateRound = (id, updated) => {
    setRounds(prev => prev.map(r => r.id === id ? updated : r))
  }

  const addRound = () => {
    if (rounds.length >= 3) return
    const id = rounds.length + 1
    setRounds(prev => [...prev, {
      id,
      label: `Round ${id}`,
      preMoney: 30000000,
      investment: 10000000,
      optionPool: 5,
      optionPoolPreMoney: true,
    }])
  }

  const removeRound = (id) => {
    setRounds(prev => {
      const next = prev.filter(r => r.id !== id)
      return next.map((r, i) => ({ ...r, id: i + 1, label: `Round ${i + 1}` }))
    })
  }

  const roundsWithColor = rounds.map((r, i) => ({ ...r, color: ROUND_COLORS[i].bar }))
  const result = useMemo(() => computeCapTable(roundsWithColor), [rounds])

  const segments = [
    { label: 'Founders', pct: result.founderPct, color: 'bg-slate-500' },
    ...result.investorGroups.map((g, i) => ({
      label: g.label,
      pct: g.pct,
      color: ROUND_COLORS[i].bar,
    })),
    { label: 'Option Pool', pct: result.optionPoolPct, color: 'bg-amber-400' },
  ].filter(s => s.pct > 0.01)

  const lastRound = rounds[rounds.length - 1]
  const postMoneyFinal = lastRound.preMoney + lastRound.investment

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        {roundsWithColor.map(round => (
          <RoundInputs
            key={round.id}
            round={round}
            onChange={updated => updateRound(round.id, updated)}
            onRemove={() => removeRound(round.id)}
            canRemove={rounds.length > 1}
          />
        ))}

        {rounds.length < 3 && (
          <button
            onClick={addRound}
            className="w-full py-2.5 border-2 border-dashed border-[#E0E0E0] rounded-xl text-sm text-[#BBBBBB] hover:border-[#AAAAAA] hover:text-[#888888] transition-colors font-medium"
          >
            + Add Round {rounds.length + 1}
          </button>
        )}

        {/* Results */}
        <div className="bg-white rounded-xl border border-[#E8E8E8] p-4 space-y-4">
          <div>
            <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-3">Ownership Breakdown</h4>
            <OwnershipBar segments={segments} />
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">Cap Table Summary</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#EEEEEE]">
                  <th className="text-left text-[10px] text-[#AAAAAA] font-medium pb-1.5">Stakeholder</th>
                  <th className="text-right text-[10px] text-[#AAAAAA] font-medium pb-1.5">Ownership</th>
                  <th className="text-right text-[10px] text-[#AAAAAA] font-medium pb-1.5">Shares</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F5F5]">
                <tr>
                  <td className="py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm bg-slate-500" />
                    <span className="text-xs text-[#555555]">Founders</span>
                  </td>
                  <td className="py-2 text-right text-xs font-semibold text-[#1A1A1A]">{formatPct(result.founderPct)}</td>
                  <td className="py-2 text-right text-xs text-[#AAAAAA]">{formatShares(result.founderShares)}</td>
                </tr>
                {result.investorGroups.map((g, i) => (
                  <tr key={g.label}>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-sm ${ROUND_COLORS[i].bar}`} />
                        <span className="text-xs text-[#555555]">{g.label} Investors</span>
                      </div>
                    </td>
                    <td className="py-2 text-right text-xs font-semibold text-[#1A1A1A]">{formatPct(g.pct)}</td>
                    <td className="py-2 text-right text-xs text-[#AAAAAA]">{formatShares(g.shares)}</td>
                  </tr>
                ))}
                {result.optionPoolPct > 0.01 && (
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-sm bg-amber-400" />
                        <span className="text-xs text-[#555555]">Option Pool</span>
                      </div>
                    </td>
                    <td className="py-2 text-right text-xs font-semibold text-[#1A1A1A]">{formatPct(result.optionPoolPct)}</td>
                    <td className="py-2 text-right text-xs text-[#AAAAAA]">{formatShares(result.optionPoolShares)}</td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#EEEEEE]">
                  <td className="pt-2 text-xs font-semibold text-[#888888]">Total</td>
                  <td className="pt-2 text-right text-xs font-semibold text-[#1A1A1A]">100%</td>
                  <td className="pt-2 text-right text-xs font-semibold text-[#888888]">{formatShares(result.totalShares)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Valuation progression (multi-round only) */}
          {rounds.length > 1 && (
            <div>
              <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">Valuation by Round</h4>
              <div className="space-y-1.5">
                {rounds.map((r, i) => (
                  <div key={r.id} className="flex items-center justify-between text-xs">
                    <span className="text-[#888888]">{r.label} post-money</span>
                    <span className="font-semibold text-[#1A1A1A]">{formatCurrency(r.preMoney + r.investment)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key stats */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-[#F8F8F8] rounded-lg p-3 border border-[#EEEEEE]">
              <div className="text-[10px] text-[#AAAAAA] uppercase tracking-wider font-medium">Final Post-Money</div>
              <div className="text-sm font-bold text-[#1A1A1A] mt-0.5">{formatCurrency(postMoneyFinal)}</div>
            </div>
            <div className="bg-[#F8F8F8] rounded-lg p-3 border border-[#EEEEEE]">
              <div className="text-[10px] text-[#AAAAAA] uppercase tracking-wider font-medium">Founder Dilution</div>
              <div className="text-sm font-bold text-[#1A1A1A] mt-0.5">{formatPct(100 - result.founderPct)}</div>
            </div>
            <div className="bg-[#F0F0F0] rounded-lg p-3 border border-[#E4E4E4]">
              <div className="text-[10px] text-[#888888] uppercase tracking-wider font-medium">Founder Stake</div>
              <div className="text-sm font-bold text-[#1A1A1A] mt-0.5">{formatPct(result.founderPct)}</div>
            </div>
            <div className="bg-[#F2F0F8] rounded-lg p-3 border border-[#E0DCF0]">
              <div className="text-[10px] text-[#7060A0] uppercase tracking-wider font-medium">Total Raised</div>
              <div className="text-sm font-bold text-[#4A3A80] mt-0.5">
                {formatCurrency(rounds.reduce((s, r) => s + r.investment, 0))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
