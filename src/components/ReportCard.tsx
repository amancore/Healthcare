import React from 'react'
import { FileText, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ReportCardProps {
  id: string
  name: string
  date: string
  type: string
}

const ReportCard: React.FC<ReportCardProps> = ({ id, name, date, type }) => {
  return (
    <motion.div
      initial={ { opacity: 0, y: 20 } }
      animate={ { opacity: 1, y: 0 } }
      whileHover={ { scale: 1.02 } }
      className="bg-white rounded-xl shadow-medical-card p-4 flex items-center justify-between"
    >
      <div className="flex items-center space-x-4">
        <FileText className="text-primary-500" size={24} />
        <div>
          <h3 className="font-semibold text-medical-text">{name}</h3>
          <p className="text-sm text-medical-muted">
            {date} | {type} Report
          </p>
        </div>
      </div>
      <Link 
        to={`/report/${id}`}
        className="text-primary-600 hover:bg-primary-50 p-2 rounded-full transition-colors"
      >
        <Eye size={20} />
      </Link>
    </motion.div>
  )
}

export default ReportCard