import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Bell, Shield, Globe, Smartphone, CreditCard, HelpCircle } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import useStore from '../store/useStore'

export default function Settings() {
  const { user, currentLanguage, setLanguage, darkMode, toggleDarkMode } = useStore()
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'language', label: 'Language', icon: Globe },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ]

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pcm', name: 'Nigerian Pidgin', flag: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', flag: '👑' },
    { code: 'ha', name: 'Hausa', flag: '🌙' },
    { code: 'ig', name: 'Igbo', flag: '🦁' }
  ]

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
          Settings
        </h1>
        <p style={{ color: '#6b7280' }}>
          Manage your account preferences and application settings
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
        {/* Sidebar */}
        <div style={{ width: window.innerWidth < 768 ? '100%' : '250px', flexShrink: 0 }}>
          <Card style={{ padding: '16px' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: activeTab === tab.id ? '#f0fdf4' : 'transparent',
                    color: activeTab === tab.id ? '#16a34a' : '#6b7280',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          {activeTab === 'profile' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                  Profile Information
                </h2>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>{user.name}</h3>
                    <p style={{ color: '#6b7280' }}>{user.email}</p>
                    <Button variant="outline" size="small" style={{ marginTop: '8px' }}>
                      Change Photo
                    </Button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      defaultValue={user.location}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'language' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                  Language & Region
                </h2>
                
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                    Interface Language
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '16px',
                          borderRadius: '8px',
                          border: currentLanguage === lang.code ? '2px solid #22c55e' : '1px solid #e5e7eb',
                          backgroundColor: currentLanguage === lang.code ? '#f0fdf4' : 'white',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{lang.flag}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                    Appearance
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Dark Mode</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Switch to dark theme</div>
                    </div>
                    <button
                      onClick={toggleDarkMode}
                      style={{
                        width: '44px',
                        height: '24px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: darkMode ? '#22c55e' : '#e5e7eb',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '3px',
                        left: darkMode ? '23px' : '3px',
                        transition: 'all 0.2s ease'
                      }} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                  Security Settings
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Change Password
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '16px' }}>
                      Update your password to keep your account secure
                    </p>
                    <Button variant="outline">Change Password</Button>
                  </div>

                  <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Two-Factor Authentication
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '16px' }}>
                      Add an extra layer of security to your account
                    </p>
                    <Button variant="primary">Enable 2FA</Button>
                  </div>

                  <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Login Sessions
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '16px' }}>
                      Manage your active login sessions
                    </p>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'support' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card style={{ padding: '32px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
                  Help & Support
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                    <HelpCircle size={32} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Help Center
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '16px' }}>
                      Find answers to common questions
                    </p>
                    <Button variant="outline" size="small">Visit Help Center</Button>
                  </div>

                  <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', textAlign: 'center' }}>
                    <Smartphone size={32} style={{ color: '#3b82f6', margin: '0 auto 12px' }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Contact Support
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '16px' }}>
                      Get help from our support team
                    </p>
                    <Button variant="outline" size="small">Contact Us</Button>
                  </div>
                </div>

                <div style={{ marginTop: '32px', padding: '20px', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#92400e', marginBottom: '8px' }}>
                    App Version
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#92400e' }}>
                    ChainForge Africa v1.0.0 - You're using the latest version
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}