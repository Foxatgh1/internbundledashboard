import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VCGlossary from './components/VCGlossary'
import FundraisingStages from './components/FundraisingStages'
import DilutionCalculator from './components/DilutionCalculator'

const panels = [
  {
    id: 'glossary',
    title: 'VC Glossary',
    subtitle: 'Searchable & expandable',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    component: VCGlossary,
  },
  {
    id: 'stages',
    title: 'Fundraising Stages',
    subtitle: 'Pre-seed → IPO cheat sheet',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    component: FundraisingStages,
  },
  {
    id: 'calculator',
    title: 'Dilution Calculator',
    subtitle: 'Interactive cap table modeling',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
      </svg>
    ),
    component: DilutionCalculator,
  },
]

const DROPBOX_URL = 'https://www.dropbox.com/scl/fi/r1yxk6t1gbyc480ljxgjb/SkylerBot-Live-News-0.1.0-universal.dmg?rlkey=tmpxvuxhy7lcty6r2weswkiu2&st=0u4gvqsx&dl=0'

const steps = [
  'Click the Dropbox link below to open the download page.',
  'Download the .dmg file found in the link.',
  'Open the .dmg file on your computer.',
  'Drag the SkylerBot News Ticker into your Applications folder.',
  'Try to open the widget. Your computer will block it — this is because the app is not signed with an Apple Developer license, which causes macOS to flag it.',
  'Go to System Settings → Privacy & Security. At the bottom of the page, you should see an option to open the app anyway. Click it and you\'re all set.',
]

function SkylerBotModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative bg-white rounded-2xl border border-[#E0E0E0] shadow-xl w-full max-w-md p-6"
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>SkylerBot News Ticker</h2>
            <p className="text-xs text-[#AAAAAA] mt-0.5">Installation instructions</p>
          </div>
          <button onClick={onClose} className="text-[#CCCCCC] hover:text-[#888888] transition-colors ml-4 shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ol className="space-y-3 mb-6">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#555555]">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0F0F0] text-[#888888] text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <a
          href={DROPBOX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1A1A1A] hover:bg-[#333333] text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download on Dropbox
        </a>
      </motion.div>
    </div>
  )
}

const tools = [
  'A searchable glossary of common VC terms — from cap tables to liquidation preferences.',
  'A fundraising stages cheat sheet covering everything from Pre-Seed through IPO.',
  'A dilution calculator that lets you simulate how different fundraising rounds affect ownership.',
  'A Venture Capital Grader — a custom AI tool that helps you learn about VC firms in a structured format. (Requires ChatGPT)',
  'The SkylerBot News Ticker: a desktop widget that keeps you current with a live feed of relevant news.',
]

function WelcomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative bg-white rounded-2xl border border-[#E0E0E0] shadow-xl w-full max-w-md p-6"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-[#1A1A1A]" style={{ fontFamily: 'Georgia, serif' }}>Welcome to Pelion's Intern Bundle</h2>
          </div>
          <button onClick={onClose} className="text-[#CCCCCC] hover:text-[#888888] transition-colors ml-4 shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-[#555555] leading-relaxed mb-4">
          This page was designed to give you five tools that will help you hit the ground running here at Pelion. They are as follows:
        </p>

        <ol className="space-y-3 mb-6">
          {tools.map((tool, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#555555]">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0F0F0] text-[#888888] text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="leading-relaxed">{tool}</span>
            </li>
          ))}
        </ol>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#333333] text-white text-sm font-medium rounded-lg transition-colors"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  )
}

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem('seenWelcome')
  })

  const closeWelcome = () => {
    localStorage.setItem('seenWelcome', 'true')
    setShowWelcome(false)
  }

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex flex-col relative">

      {/* Topographic contour lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="topo" x="0" y="0" width="600" height="400" patternUnits="userSpaceOnUse">
              <path d="M0,45 C80,25 160,65 260,40 C360,15 460,55 600,30" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,100 C70,80 170,118 270,95 C370,70 470,108 600,85" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,158 C90,138 180,175 285,152 C385,128 485,165 600,142" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,215 C75,195 175,232 278,210 C378,186 478,222 600,200" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,272 C85,250 185,290 288,268 C388,244 488,280 600,258" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,330 C78,308 178,348 282,325 C382,300 482,338 600,316" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
              <path d="M0,388 C82,366 182,405 285,382 C386,358 486,395 600,373" fill="none" stroke="#D8D8D8" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#DEDEDE] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
              <img src="/internbundledashboard/favicon.png" alt="Pelion" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-base font-semibold text-[#1A1A1A] leading-tight tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>The Intern Bundle</h1>
              <p className="text-[10px] text-[#999999] leading-tight tracking-widest uppercase">Pelion Venture Partners</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://chatgpt.com/g/g-698e7dc243108191bcf508d433cfa12f-venture-capital-grader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#888888] border border-[#DEDEDE] rounded-lg px-3 py-1.5 hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-colors"
            >
              Venture Capital Grader
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="text-xs font-medium text-[#888888] border border-[#DEDEDE] rounded-lg px-3 py-1.5 hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-colors"
            >
              SkylerBot News Ticker
            </button>
            <button
              onClick={() => setShowWelcome(true)}
              className="text-xs font-medium text-[#888888] border border-[#DEDEDE] rounded-lg px-3 py-1.5 hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-colors"
            >
              About the Intern Bundle
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-screen-2xl mx-auto w-full px-4 sm:px-6 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 h-full">
          {panels.map((panel, i) => {
            const Component = panel.component
            return (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08, ease: 'easeOut' }}
                className="bg-white rounded-xl border border-[#DEDEDE] flex flex-col overflow-hidden"
                style={{ minHeight: '500px', maxHeight: 'calc(100vh - 120px)' }}
              >
                {/* Panel header */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#EEEEEE]">
                  <div className="w-7 h-7 bg-[#F5F5F5] rounded-md flex items-center justify-center text-[#AAAAAA]">
                    {panel.icon}
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-[#1A1A1A]">{panel.title}</h2>
                    <p className="text-xs text-[#AAAAAA]">{panel.subtitle}</p>
                  </div>
                </div>

                {/* Panel body */}
                <div className="flex-1 overflow-hidden flex flex-col">
                  <Component />
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>

      {/* SkylerBot modal */}
      <AnimatePresence>
        {showModal && <SkylerBotModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

      {/* Welcome modal */}
      <AnimatePresence>
        {showWelcome && <WelcomeModal onClose={closeWelcome} />}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[#DEDEDE] bg-white mt-6 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-[#BBBBBB]">© 2025 Pelion Venture Partners · The Intern Bundle</p>
          <p className="text-xs text-[#BBBBBB]">For educational use only · Not investment advice</p>
        </div>
      </footer>
    </div>
  )
}
