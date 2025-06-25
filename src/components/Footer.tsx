import React from 'react'
import { FileText } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      href: 'https://github.com/yourusername' 
    },
    { 
      icon: <FaLinkedin size={20} />, 
      href: 'https://linkedin.com/in/yourusername' 
    },
    { 
      icon: <FaTwitter size={20} />, 
      href: 'https://twitter.com/yourusername' 
    }
  ]

  return (
    <footer className="bg-white border-t border-medical-background py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <FileText className="text-primary-600 mr-2" size={24} />
          <span className="font-display font-semibold text-medical-text">
            Medical AI Analyzer
          </span>
        </div>

        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-muted hover:text-primary-600 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-sm text-medical-muted mt-4 md:mt-0">
          © {new Date().getFullYear()} Medical AI Analyzer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer