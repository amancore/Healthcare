import React from 'react'
import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'

interface LoaderProps {
  message?: string
}

const Loader: React.FC<LoaderProps> = ({ message = 'Processing Reports...' }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-medical-background z-50">
      <motion.div
        initial={ { opacity: 0, scale: 0.8 } }
        animate={ { 
          opacity: 1, 
          scale: 1,
          rotate: [0, 360]
        } }
        transition={ { 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        } }
      >
        <FileText 
          className="text-primary-600" 
          size={64} 
          strokeWidth={1.5} 
        />
      </motion.div>
      <motion.p
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        className="absolute bottom-1/2 translate-y-12 text-medical-muted"
      >
        {message}
      </motion.p>
    </div>
  )
}

export default Loader