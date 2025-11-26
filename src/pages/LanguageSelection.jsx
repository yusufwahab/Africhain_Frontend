import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useStore from '../store/useStore'
import { languages } from '../utils/mockData'

export default function LanguageSelection() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const setLanguage = useStore(state => state.setLanguage)

  const handleLanguageSelect = (languageCode) => {
    setLanguage(languageCode)
    i18n.changeLanguage(languageCode)
    navigate('/dashboard')
  }

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 50%, #22c55e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  }

  const contentStyle = {
    maxWidth: '1024px',
    width: '100%'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  }

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  }

  const logoStyle = {
    width: '64px',
    height: '64px',
    backgroundColor: 'white',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    marginRight: '16px'
  }

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'white'
  }

  const taglineStyle = {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  }

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)'
  }

  const flagStyle = {
    fontSize: '3.75rem',
    marginBottom: '16px',
    display: 'block'
  }

  const languageNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  }

  const greetingStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const footerStyle = {
    textAlign: 'center'
  }

  const autoDetectStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    marginBottom: '16px'
  }

  const skipStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease'
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={headerStyle}
        >
          <div style={logoContainerStyle}>
            <div style={logoStyle}>
              <span style={{ fontSize: '2rem' }}>⛓️</span>
            </div>
            <h1 style={titleStyle}>ChainForge Africa</h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={taglineStyle}
          >
            {t('language.tagline')}
          </motion.p>
        </motion.div>

        {/* Language Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={gridStyle}
        >
          {languages.map((language, index) => (
            <motion.button
              key={language.code}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect(language.code)}
              style={cardStyle}
            >
              <span style={flagStyle}>{language.flag}</span>
              <h3 style={languageNameStyle}>{language.name}</h3>
              <p style={greetingStyle}>{language.greeting}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Auto-detect Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={footerStyle}
        >
          <div style={autoDetectStyle}>
            <MapPin size={16} style={{ marginRight: '8px' }} />
            <span>{t('language.auto_detect', { location: 'Lagos', language: 'Pidgin' })}</span>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            style={skipStyle}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            {t('language.skip')}
          </button>
        </motion.div>
      </div>
    </div>
  )
}