import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  CheckSquare, 
  Bell, 
  TrendingUp, 
  Package, 
  Phone, 
  GraduationCap,
  Trophy,
  Sun,
  MapPin,
  Clock
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import useStore from '../store/useStore'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'
import { mockSales, mockTasks } from '../utils/mockData'

export default function Dashboard() {
  const { t } = useTranslation()
  const { user, addMessage } = useStore()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return t('dashboard.greeting_morning', { name: user.name })
    if (hour < 17) return t('dashboard.greeting_afternoon', { name: user.name })
    return t('dashboard.greeting_evening', { name: user.name })
  }

  const handleHybridInput = (input) => {
    addMessage({
      type: 'user',
      content: input,
      timestamp: new Date().toISOString()
    })
    
    // Simulate AI response
    setTimeout(() => {
      addMessage({
        type: 'ai',
        content: `I understand you want to: "${input}". Let me help you with that!`,
        timestamp: new Date().toISOString()
      })
    }, 1000)
  }

  const quickActions = [
    { icon: DollarSign, label: 'Log Sale', color: '#dcfce7', iconColor: '#15803d' },
    { icon: TrendingUp, label: 'Check Price', color: '#dcfce7', iconColor: '#15803d' },
    { icon: Phone, label: 'Find Supplier', color: '#dcfce7', iconColor: '#15803d' },
    { icon: CheckSquare, label: 'Add Task', color: '#dcfce7', iconColor: '#15803d' },
    { icon: Package, label: 'Forex', color: '#dcfce7', iconColor: '#15803d' },
    { icon: TrendingUp, label: 'Route', color: '#dcfce7', iconColor: '#15803d' },
    { icon: GraduationCap, label: 'Learn', color: '#dcfce7', iconColor: '#15803d' },
    { icon: Trophy, label: 'Leaderboard', color: '#dcfce7', iconColor: '#15803d' }
  ]

  const todaySales = mockSales.reduce((sum, sale) => sum + sale.amount, 0)
  const pendingTasks = mockTasks.filter(task => task.status === 'pending').length

  const containerStyle = {
    padding: '16px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }

  const heroCardStyle = {
    backgroundColor: '#15803d',
    color: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
  }

  const greetingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  }

  const timeInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    flexWrap: 'wrap'
  }

  const timeItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const inputCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const examplesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '16px',
    alignItems: 'center'
  }

  const exampleButtonStyle = {
    fontSize: '0.75rem',
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    padding: '4px 12px',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }

  const sectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#15803d',
    marginBottom: '16px'
  }

  const quickActionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '16px'
  }

  const actionButtonStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  }

  const actionIconStyle = (bgColor, iconColor) => ({
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: iconColor,
    transition: 'transform 0.2s ease'
  })

  const actionLabelStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  }

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const statHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px'
  }

  const statIconStyle = (bgColor, iconColor) => ({
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: bgColor,
    color: iconColor
  })

  const statValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827'
  }

  const statLabelStyle = {
    color: '#6b7280',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '4px'
  }

  const activityCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const activityItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '12px',
    transition: 'background-color 0.2s ease'
  }

  const activityIconStyle = (iconColor) => ({
    padding: '8px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    color: iconColor
  })

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={heroCardStyle}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={greetingStyle}
        >
          {getGreeting()}
        </motion.h1>
        <div style={timeInfoStyle}>
          <div style={timeItemStyle}>
            <Clock size={16} />
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
          <div style={timeItemStyle}>
            <MapPin size={16} />
            <span>{user.location}</span>
          </div>
          <div style={timeItemStyle}>
            <Sun size={16} />
            <span>28°C Sunny</span>
          </div>
        </div>
      </div>

      {/* Central Hybrid Input */}
      <div style={inputCardStyle}>
        <HybridInput
          placeholder={t('dashboard.input_placeholder')}
          onSubmit={handleHybridInput}
          size="large"
        />
        <div style={examplesStyle}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Try:</span>
          {['How much is rice in Kano?', 'I sold 3 crates of eggs', 'Remind me to restock'].map((example, i) => (
            <button
              key={i}
              onClick={() => handleHybridInput(example)}
              style={exampleButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#dcfce7'
                e.target.style.color = '#16a34a'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f3f4f6'
                e.target.style.color = '#6b7280'
              }}
            >
              "{example}"
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h2 style={sectionTitleStyle}>{t('dashboard.quick_actions')}</h2>
        <div style={quickActionsGridStyle}>
          {quickActions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={actionButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                const icon = e.currentTarget.querySelector('.action-icon')
                if (icon) icon.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
                const icon = e.currentTarget.querySelector('.action-icon')
                if (icon) icon.style.transform = 'scale(1)'
              }}
            >
              <div className="action-icon" style={actionIconStyle(action.color, action.iconColor)}>
                <action.icon size={24} />
              </div>
              <p style={actionLabelStyle}>{action.label}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div style={statsGridStyle}>
        {/* Sales Today */}
        <div style={statCardStyle}>
          <div style={statHeaderStyle}>
            <div style={statIconStyle('#dcfce7', '#15803d')}>
              <DollarSign size={24} />
            </div>
            <span style={{ fontSize: '0.875rem', color: '#15803d', fontWeight: '600' }}>+23%</span>
          </div>
          <h3 style={statLabelStyle}>{t('dashboard.sales_today')}</h3>
          <p style={statValueStyle}>₦{todaySales.toLocaleString()}</p>
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Last updated: 2 mins ago</p>
          </div>
        </div>

        {/* Pending Tasks */}
        <div style={statCardStyle}>
          <div style={statHeaderStyle}>
            <div style={statIconStyle('#fef3c7', '#d97706')}>
              <CheckSquare size={24} />
            </div>
          </div>
          <h3 style={statLabelStyle}>{t('dashboard.pending_tasks')}</h3>
          <p style={statValueStyle}>{pendingTasks}</p>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mockTasks.slice(0, 2).map(task => (
              <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#f59e0b', borderRadius: '50%' }}></div>
                <span style={{ color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.title}</span>
              </div>
            ))}
            <Button variant="ghost" size="small" style={{ marginTop: '8px', width: '100%' }}>
              View all →
            </Button>
          </div>
        </div>

        {/* Active Alerts */}
        <div style={statCardStyle}>
          <div style={statHeaderStyle}>
            <div style={statIconStyle('#fee2e2', '#dc2626')}>
              <Bell size={24} />
            </div>
          </div>
          <h3 style={statLabelStyle}>{t('dashboard.active_alerts')}</h3>
          <p style={statValueStyle}>3</p>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Price drops</span>
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#dcfce7', 
                color: '#15803d', 
                fontSize: '0.75rem', 
                borderRadius: '9999px' 
              }}>2</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Due dates</span>
              <span style={{ 
                padding: '2px 8px', 
                backgroundColor: '#fef3c7', 
                color: '#d97706', 
                fontSize: '0.75rem', 
                borderRadius: '9999px' 
              }}>1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={activityCardStyle}>
        <h3 style={sectionTitleStyle}>{t('dashboard.recent_activity')}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: DollarSign, text: 'You logged: 3 crates of eggs - ₦9,000', time: '2h ago', color: '#15803d' },
            { icon: Bell, text: 'Price Alert: Rice dropped to ₦39k in Kano', time: '4h ago', color: '#2563eb' },
            { icon: CheckSquare, text: 'Reminder: Collect ₦5,000 from Musa', time: '6h ago', color: '#d97706' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={activityItemStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <div style={activityIconStyle(activity.color)}>
                <activity.icon size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.875rem', color: '#111827' }}>{activity.text}</p>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}