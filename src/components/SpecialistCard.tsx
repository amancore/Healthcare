import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone } from 'lucide-react'

interface SpecialistCardProps {
  name: string
  specialty: string
  email: string
  phone: string
  avatar?: string
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ 
  name, 
  specialty, 
  email, 
  phone, 
  avatar 
}) => {
  return (
    <motion.div
      initial={ { opacity: 0, y: 20 } }
      animate={ { opacity: 1, y: 0 } }
      whileHover={ { scale: 1.02 } }
      className="bg-white rounded-xl shadow-medical-card p-6 flex items-center space-x-6"
    >
      <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full rounded-full object-cover" 
          />
        ) : (
          <User className="text-primary-600" size={48} />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-medical-text">{name}</h3>
        <p className="text-medical-muted">{specialty}</p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm">
            <Mail className="mr-2 text-primary-500" size={16} />
            <span>{email}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 text-primary-500" size={16} />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SpecialistCard