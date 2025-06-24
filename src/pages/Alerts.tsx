import React from 'react'
import { Bell, AlertCircle, CheckCircle, Info } from 'lucide-react'
import { motion } from 'framer-motion'

const mockAlerts = [
  {
    id: '1',
    type: 'warning',
    title: 'Pending Report Review',
    description: 'Your recent cardiac report requires additional review.',
    date: '2024-06-15'
  },
  {
    id: '2',
    type: 'success',
    title: 'Report Processed',
    description: 'Your blood test report has been successfully analyzed.',
    date: '2024-06-10'
  },
  {
    id: '3',
    type: 'info',
    title: 'New Feature',
    description: 'We\'ve added advanced AI-powered report insights.',
    date: '2024-06-05'
  }
]

const Alerts: React.FC = () => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertCircle className="text-yellow-500" size={24} />
      case 'success': return <CheckCircle className="text-green-500" size={24} />
      case 'info': return <Info className="text-primary-500" size={24} />
      default: return <Bell className="text-medical-muted" size={24} />
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-medical-card p-8"
      >
        <div className="flex items-center mb-8">
          <Bell className="mr-3 text-primary-500" size={32} />
          <h1 className="text-2xl font-display font-bold text-medical-text">
            Notifications & Alerts
          </h1>
        </div>

        <div className="space-y-4">
          {mockAlerts.map(alert => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-medical-background p-4 rounded-lg flex items-start space-x-4"
            >
              <div className="mt-1">{getAlertIcon(alert.type)}</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-medical-text">{alert.title}</h3>
                <p className="text-medical-muted text-sm">{alert.description}</p>
                <p className="text-xs text-medical-muted mt-2">{alert.date}</p>
              </div>
              <button className="text-primary-600 hover:bg-primary-50 p-2 rounded-full transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {mockAlerts.length === 0 && (
          <div className="text-center py-12 text-medical-muted">
            <Bell className="mx-auto mb-4 text-primary-300" size={48} />
            <p>No new notifications</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Alerts