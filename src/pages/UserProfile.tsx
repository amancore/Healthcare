import React, { useState } from 'react'
import { User, Mail, Phone, Settings, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'security'>('profile')

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-medical-card p-8"
      >
        <div className="flex items-center mb-8">
          <Settings className="mr-3 text-primary-500" size={32} />
          <h1 className="text-2xl font-display font-bold text-medical-text">
            User Profile
          </h1>
        </div>

        <div className="mb-6 border-b border-medical-background">
          <nav className="flex space-x-6">
            {['profile', 'security'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`
                  pb-3 capitalize flex items-center
                  ${activeTab === tab 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-medical-muted hover:text-medical-text'}
                `}
              >
                {tab === 'profile' ? <User className="mr-2" size={18} /> : <KeyRound className="mr-2" size={18} />}
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'profile' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="text-primary-600" size={48} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-medical-text">John Doe</h2>
                <p className="text-medical-muted">Medical Professional</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-medical-muted mb-2">
                  Email Address
                </label>
                <div className="flex items-center bg-medical-background p-3 rounded-lg">
                  <Mail className="mr-3 text-primary-500" size={20} />
                  <input 
                    type="email" 
                    value="john.doe@medical.com" 
                    readOnly 
                    className="bg-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-medical-muted mb-2">
                  Phone Number
                </label>
                <div className="flex items-center bg-medical-background p-3 rounded-lg">
                  <Phone className="mr-3 text-primary-500" size={20} />
                  <input 
                    type="tel" 
                    value="+1 (555) 123-4567" 
                    readOnly 
                    className="bg-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'security' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-medical-muted mb-2">
                Current Password
              </label>
              <div className="flex items-center bg-medical-background p-3 rounded-lg">
                <KeyRound className="mr-3 text-primary-500" size={20} />
                <input 
                  type="password" 
                  placeholder="Enter current password" 
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-medical-muted mb-2">
                New Password
              </label>
              <div className="flex items-center bg-medical-background p-3 rounded-lg">
                <KeyRound className="mr-3 text-primary-500" size={20} />
                <input 
                  type="password" 
                  placeholder="Enter new password" 
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-medical-muted mb-2">
                Confirm New Password
              </label>
              <div className="flex items-center bg-medical-background p-3 rounded-lg">
                <KeyRound className="mr-3 text-primary-500" size={20} />
                <input 
                  type="password" 
                  placeholder="Confirm new password" 
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Update Password
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default UserProfile