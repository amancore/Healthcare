import React from 'react'
import { motion } from 'framer-motion'

interface SummaryBlockProps {
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

const SummaryBlock: React.FC<SummaryBlockProps> = ({ title, value, icon, trend }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-medical-card p-6"
      whileHover={ { scale: 1.02 } }
    >
      <div className="flex justify-between items-center mb-4">
        {icon}
        <span className="text-3xl font-bold text-primary-600">
          {value}
        </span>
      </div>
      <h3 className="text-medical-text font-semibold">{title}</h3>
      {trend && (
        <p className={`
          text-sm 
          ${trend === 'up' ? 'text-green-600' : 
            trend === 'down' ? 'text-red-600' : 'text-medical-muted'}
        `}>
          {trend === 'up' ? '↑ Increased' : 
           trend === 'down' ? '↓ Decreased' : 'No significant change'}
        </p>
      )}
    </motion.div>
  )
}

export default SummaryBlock