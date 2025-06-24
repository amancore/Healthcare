import React from 'react'
import { AlertCircle, CheckCircle, Info } from 'lucide-react'
import { motion } from 'framer-motion'

interface AlertCardProps {
  type: 'warning' | 'success' | 'info'
  title: string
  description: string
  date: string
}

const AlertCard: React.FC<AlertCardProps> = ({ type, title, description, date }) => {
  const getAlertIcon = () => {
    switch (type) {
      case 'warning': 
        return <AlertCircle className="text-yellow-500" size={24} />
      case 'success': 
        return <CheckCircle className="text-green-500" size={24} />
      case 'info': 
        return <Info className="text-primary-500" size={24} />
    }
  }

  return (
    <motion.div
      initial={ { opacity: 0, x: -20 } }
      animate={ { opacity: 1, x: 0 } }
      className={`
        p-4 rounded-lg flex items-start space-x-4 
        ${type === 'warning' ? 'bg-yellow-50' : 
          type === 'success' ? 'bg-green-50' : 'bg-primary-50'}
      `}
    >
      <div className="mt-1">{getAlertIcon()}</div>
      <div className="flex-grow">
        <h3 className="font-semibold text-medical-text">{title}</h3>
        <p className="text-medical-muted text-sm">{description}</p>
        <p className="text-xs text-medical-muted mt-2">{date}</p>
      </div>
    </motion.div>
  )
}

export default AlertCard