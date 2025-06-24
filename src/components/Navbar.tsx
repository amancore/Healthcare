import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  LayoutDashboard, 
  Bell, 
  User, 
  Menu, 
  X 
} from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { 
      path: '/', 
      label: 'Upload Report', 
      icon: <FileText className="mr-2" size={18} /> 
    },
    { 
      path: '/dashboard', 
      label: 'Dashboard', 
      icon: <LayoutDashboard className="mr-2" size={18} /> 
    },
    { 
      path: '/alerts', 
      label: 'Alerts', 
      icon: <Bell className="mr-2" size={18} /> 
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: <User className="mr-2" size={18} /> 
    }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="text-primary-600 mr-2" size={32} />
          <h1 className="text-xl font-display font-bold text-medical-text">
            Medical AI Analyzer
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center text-medical-muted hover:text-primary-600 transition-colors"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-medical-text hover:text-primary-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white z-50 md:hidden"
        >
          <div className="container mx-auto px-4 py-12">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMobileMenu}
                  className="flex items-center text-2xl text-medical-text hover:text-primary-600 py-4 border-b border-medical-background"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar