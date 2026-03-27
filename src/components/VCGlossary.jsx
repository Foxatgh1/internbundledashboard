import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { glossaryTerms } from '../data/glossary'

const categoryColors = {
  Valuation:           'bg-[#EEF5F0] text-[#3A7A55] border-[#C8E0D0]',
  'Deal Terms':        'bg-[#EEF0F8] text-[#3A5080] border-[#C8D0E8]',
  'Fund Mechanics':    'bg-[#F2F2F2] text-[#666666] border-[#DEDEDE]',
  'Cap Table':         'bg-[#F8F3E8] text-[#7A5A20] border-[#E0D0B0]',
  Exit:                'bg-[#F8EEEE] text-[#803838] border-[#E0C8C8]',
  'Startup Ecosystem': 'bg-[#F8F2E8] text-[#7A5820] border-[#E0CEAC]',
  'Tools & Platforms': 'bg-[#F2EEFC] text-[#5A3E90] border-[#D8CCEE]',
}

function TermRow({ term, definition, category, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#F0F0F0] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#FAFAFA] transition-colors duration-100 group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-medium text-[#1A1A1A] text-sm truncate">{term}</span>
          <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border shrink-0 ${categoryColors[category] || 'bg-[#F2F2F2] text-[#666666] border-[#DEDEDE]'}`}>
            {category}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="text-[#CCCCCC] group-hover:text-[#999999] ml-2 shrink-0 text-lg leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">
              <p className="text-sm text-[#666666] leading-relaxed">{definition}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function VCGlossary() {
  const [search, setSearch] = useState('')
  const [openTerms, setOpenTerms] = useState(new Set())
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Valuation', 'Deal Terms', 'Fund Mechanics', 'Cap Table', 'Exit', 'Startup Ecosystem', 'Tools & Platforms']

  const filtered = useMemo(() => {
    let terms = [...glossaryTerms]
    if (activeCategory !== 'All') {
      terms = terms.filter(t => t.category === activeCategory)
    }
    if (!search.trim()) {
      return terms.sort((a, b) => a.term.localeCompare(b.term))
    }
    const q = search.toLowerCase()
    return terms
      .filter(t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q))
      .sort((a, b) => {
        const aStart = a.term.toLowerCase().startsWith(q)
        const bStart = b.term.toLowerCase().startsWith(q)
        if (aStart && !bStart) return -1
        if (!aStart && bStart) return 1
        return a.term.localeCompare(b.term)
      })
  }, [search, activeCategory])

  const toggleTerm = (term) => {
    setOpenTerms(prev => {
      const next = new Set(prev)
      if (next.has(term)) next.delete(term)
      else next.add(term)
      return next
    })
  }

  const expandAll = () => setOpenTerms(new Set(filtered.map(t => t.term)))
  const collapseAll = () => setOpenTerms(new Set())

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b border-[#EEEEEE]">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-[#E8E8E8] rounded-lg bg-[#F8F8F8] text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#AAAAAA] focus:border-[#AAAAAA] placeholder-[#CCCCCC]"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CCCCCC] hover:text-[#888888]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#F0F0F0] text-[#888888] hover:bg-[#E8E8E8] hover:text-[#444444]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count + controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#FAFAFA] border-b border-[#EEEEEE]">
        <span className="text-xs text-[#BBBBBB]">
          {filtered.length} term{filtered.length !== 1 ? 's' : ''}
        </span>
        <div className="flex gap-3">
          <button onClick={expandAll} className="text-xs text-[#888888] hover:text-[#1A1A1A] font-medium">
            Expand all
          </button>
          <button onClick={collapseAll} className="text-xs text-[#BBBBBB] hover:text-[#888888]">
            Collapse all
          </button>
        </div>
      </div>

      {/* Terms list */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <div className="w-12 h-12 bg-[#F2F2F2] rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[#CCCCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-[#AAAAAA]">No terms match your search</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="mt-2 text-xs text-[#888888] hover:text-[#1A1A1A]">
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map(item => (
            <TermRow
              key={item.term}
              {...item}
              isOpen={openTerms.has(item.term)}
              onToggle={() => toggleTerm(item.term)}
            />
          ))
        )}
      </div>
    </div>
  )
}
