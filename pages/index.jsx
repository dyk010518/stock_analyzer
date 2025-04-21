import { useEffect, useState } from 'react'
import SymbolSearch from '../components/SymbolSearch'
import Header from '../components/Header'
import { motion } from "framer-motion"

export default function Home() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const generateNumberRow = (id, reverse = false) => (
      <div
        key={id}
        className={`whitespace-nowrap flex space-x-6 font-ticker ${reverse ? "animate-slide-reverse" : "animate-slide"}`}
      >
        {Array(150).fill(null).map((_, i) => {
          const num = Math.floor(Math.random() * 10000)
          const colorClass = Math.random() > 0.5 ? 'text-green-400' : 'text-red-400'
          return (
            <span key={i} className={`text-3xl opacity-10 ${colorClass} glowing-text`}>
              {num}
            </span>
          )
        })}
      </div>
    )

    // Generate rows only on the client side
    const generatedRows = Array(18).fill(null).map((_, i) => generateNumberRow(i, i % 2 === 1))
    setRows(generatedRows)
  }, [])

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-800 via-[#0f172a] to-gray-900">
      
      {/* Background Numbers */}
      <div className="absolute inset-0 z-0 overflow-hidden flex flex-col justify-evenly">
        {rows}
      </div>

      {/* Foreground Content */}
      <main className="relative z-10 text-white flex flex-col items-center py-16">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Header />
        </motion.div>
        <motion.p 
          className="text-xl mb-6 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Real-time financial insights. Predict, analyze, and invest with confidence.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <SymbolSearch individual={false} />
        </motion.div>
      </main>
    </div>
  )
}