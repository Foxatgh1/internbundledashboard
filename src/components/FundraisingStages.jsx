import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fundingStages } from '../data/stages'

function StageCard({ stage, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] overflow-hidden mb-3 last:mb-0">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 bg-white hover:bg-[#FAFAFA] transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">{stage.emoji}</span>
            <div>
              <h3 className="font-semibold text-[#1A1A1A] text-sm">{stage.name}</h3>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-xs text-[#AAAAAA]">
                  <span className="font-medium text-[#888888]">Check:</span> {stage.checkSize}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-[#BBBBBB]">Valuation</div>
              <div className="text-xs font-semibold text-[#666666]">{stage.valuation}</div>
            </div>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#CCCCCC] ml-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Investor badges preview */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stage.investors.slice(0, 2).map((inv, i) => (
            <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${stage.badgeBg}`}>
              {inv}
            </span>
          ))}
          {stage.investors.length > 2 && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${stage.badgeBg}`}>
              +{stage.investors.length - 2} more
            </span>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-3 space-y-4 bg-[#FAFAFA] border-t border-[#EEEEEE]">
              {/* Key Metrics */}
              <div>
                <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">Key Metrics</h4>
                <ul className="space-y-1">
                  {stage.metrics.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555555]">
                      <span className="text-[#AAAAAA] mt-0.5 shrink-0">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Investors */}
              <div>
                <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">Typical Investors</h4>
                <div className="flex flex-wrap gap-1.5">
                  {stage.investors.map((inv, i) => (
                    <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${stage.badgeBg}`}>
                      {inv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Founder Readiness */}
              <div>
                <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">What Founders Should Have Ready</h4>
                <ul className="space-y-1">
                  {stage.founderReadiness.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555555]">
                      <span className="text-[#AAAAAA] mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deal Structures */}
              <div>
                <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-2">Common Deal Structures</h4>
                <ul className="space-y-1">
                  {stage.dealStructures.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555555]">
                      <span className="text-[#AAAAAA] mt-0.5 shrink-0">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Example */}
              <div className="bg-white rounded-lg p-3 border border-[#E8E8E8]">
                <h4 className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-wider mb-1">Real-World Example</h4>
                <p className="text-xs text-[#666666]">
                  <span className="font-semibold text-[#1A1A1A]">{stage.example.company}:</span>{' '}
                  {stage.example.detail}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FundraisingStages() {
  const [openStages, setOpenStages] = useState(new Set())

  const toggleStage = (id) => {
    setOpenStages(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex flex-col h-full">
      {/* Cards */}
      <div className="flex-1 overflow-y-auto p-4">
        {fundingStages.map(stage => (
          <StageCard
            key={stage.id}
            stage={stage}
            isOpen={openStages.has(stage.id)}
            onToggle={() => toggleStage(stage.id)}
          />
        ))}
      </div>
    </div>
  )
}
