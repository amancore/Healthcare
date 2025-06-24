import React from 'react'
import { motion } from 'framer-motion'

interface EntityTableProps {
  headers: string[]
  data: any[]
}

const EntityTable: React.FC<EntityTableProps> = ({ headers, data }) => {
  return (
    <motion.div
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      className="bg-white rounded-xl shadow-medical-card overflow-hidden"
    >
      <table className="w-full">
        <thead className="bg-medical-background">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-left text-xs font-medium text-medical-muted uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="border-b border-medical-background hover:bg-primary-50 transition-colors"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-4 py-4 text-sm text-medical-text"
                >
                  {cell as string}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

export default EntityTable