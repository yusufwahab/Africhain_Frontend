import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, AlertCircle, CheckCircle, Clock, Download, Send, Building, Calendar } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function GovPayTracker() {
  const [activeTab, setActiveTab] = useState('contracts')

  const myContracts = [
    {
      id: 'LG/2024/001',
      agency: 'Lagos State Ministry of Education',
      project: 'School Furniture Supply',
      amount: 200000,
      dateDue: '2024-09-15',
      daysLate: 45,
      status: 'overdue',
      dateSubmitted: '2024-08-01',
      followUps: 3,
      lastContact: '2024-11-20'
    },
    {
      id: 'FCT/2024/089',
      agency: 'FCT Administration',
      project: 'Office Stationery Supply',
      amount: 150000,
      dateDue: '2024-11-30',
      daysLate: 0,
      status: 'pending',
      dateSubmitted: '2024-10-15',
      followUps: 1,
      lastContact: '2024-11-15'
    },
    {
      id: 'KN/2024/045',
      agency: 'Kano State Ministry of Works',
      project: 'Construction Materials',
      amount: 500000,
      dateDue: '2024-10-01',
      daysLate: 26,
      status: 'overdue',
      dateSubmitted: '2024-09-01',
      followUps: 5,
      lastContact: '2024-11-22'
    },
    {
      id: 'OG/2024/023',
      agency: 'Ogun State Health Ministry',
      project: 'Medical Supplies',
      amount: 75000,
      dateDue: '2024-11-01',
      status: 'paid',
      dateSubmitted: '2024-09-15',
      datePaid: '2024-11-01',
      followUps: 0
    }
  ]

  const agencyPerformance = [
    {
      agency: 'Lagos State Ministry of Education',
      avgPaymentTime: 65,
      onTimeRate: 45,
      totalSMEsPaid: 234,
      totalOwed: 12500000,
      rating: 'poor'
    },
    {
      agency: 'FCT Administration',
      avgPaymentTime: 35,
      onTimeRate: 78,
      totalSMEsPaid: 456,
      totalOwed: 8900000,
      rating: 'good'
    },
    {
      agency: 'Kano State Ministry of Works',
      avgPaymentTime: 85,
      onTimeRate: 25,
      totalSMEsPaid: 123,
      totalOwed: 25600000,
      rating: 'very-poor'
    }
  ]

  const communityStats = {
    totalOwed: 2300000000,
    totalSMEs: 12470,
    avgDelay: 42,
    successRate: 68
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return { bg: '#dcfce7', text: '#16a34a', border: '#bbf7d0' }
      case 'pending': return { bg: '#fef3c7', text: '#d97706', border: '#fde68a' }
      case 'overdue': return { bg: '#fee2e2', text: '#dc2626', border: '#fca5a5' }
      case 'disputed': return { bg: '#f3e8ff', text: '#9333ea', border: '#d8b4fe' }
      default: return { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb' }
    }
  }

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'excellent': return { bg: '#dcfce7', text: '#16a34a' }
      case 'good': return { bg: '#dbeafe', text: '#2563eb' }
      case 'fair': return { bg: '#fef3c7', text: '#d97706' }
      case 'poor': return { bg: '#fed7aa', text: '#ea580c' }
      case 'very-poor': return { bg: '#fee2e2', text: '#dc2626' }
      default: return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  const containerStyle = {
    padding: '24px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }

  const headerStyle = {
    textAlign: 'left',
    marginBottom: '32px'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '8px'
  }

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#6b7280'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '32px'
  }

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    textAlign: 'center'
  }

  const tabsStyle = {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '24px'
  }

  const tabButtonStyle = (active) => ({
    flex: 1,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: active ? 'white' : 'transparent',
    color: active ? '#111827' : '#6b7280',
    boxShadow: active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
  })

  const contractCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    marginBottom: '16px'
  }

  const agencyCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2p rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Government Pay Tracker</h1>
        <p style={subtitleStyle}>Track your government contracts and get paid faster</p>
      </div>

      {/* Community Stats */}
      <div style={statsGridStyle}>
        <div style={statCardStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '4px' }}>
            ₦{(communityStats.totalOwed / 1000000000).toFixed(1)}B
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Owed to SMEs</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '4px' }}>
            {communityStats.totalSMEs.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>SMEs Affected</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '4px' }}>
            {communityStats.avgDelay}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Avg Days Late</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '4px' }}>
            {communityStats.successRate}%
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Success Rate</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <button
          onClick={() => setActiveTab('contracts')}
          style={tabButtonStyle(activeTab === 'contracts')}
        >
          My Contracts
        </button>
        <button
          onClick={() => setActiveTab('agencies')}
          style={tabButtonStyle(activeTab === 'agencies')}
        >
          Agency Performance
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          style={tabButtonStyle(activeTab === 'templates')}
        >
          Follow-up Templates
        </button>
      </div>

      {/* My Contracts Tab */}
      {activeTab === 'contracts' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
              Your Contracts ({myContracts.length})
            </h3>
            <Button variant="primary">
              <FileText size={16} style={{ marginRight: '8px' }} />
              Add New Contract
            </Button>
          </div>

          <div>
            {myContracts.map((contract, index) => (
              <motion.div
                key={contract.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={contractCardStyle}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <Building size={20} style={{ color: '#6b7280' }} />
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                        {contract.agency}
                      </h4>
                    </div>
                    <p style={{ fontSize: '1rem', color: '#111827', marginBottom: '4px' }}>
                      {contract.project}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      Contract: {contract.id}
                    </p>
                  </div>
                  
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
                      ₦{contract.amount.toLocaleString()}
                    </div>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      ...getStatusColor(contract.status)
                    }}>
                      {contract.status === 'overdue' && `${contract.daysLate} DAYS OVERDUE`}
                      {contract.status === 'pending' && 'PENDING'}
                      {contract.status === 'paid' && 'PAID'}
                      {contract.status === 'disputed' && 'DISPUTED'}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '2px' }}>Due Date</div>
                    <div style={{ fontSize: '0.875rem', color: '#111827', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {new Date(contract.dateDue).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '2px' }}>Submitted</div>
                    <div style={{ fontSize: '0.875rem', color: '#111827' }}>
                      {new Date(contract.dateSubmitted).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '2px' }}>Follow-ups</div>
                    <div style={{ fontSize: '0.875rem', color: '#111827' }}>
                      {contract.followUps} sent
                    </div>
                  </div>
                  {contract.status === 'paid' && (
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '2px' }}>Paid On</div>
                      <div style={{ fontSize: '0.875rem', color: '#16a34a' }}>
                        {new Date(contract.datePaid).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {contract.status !== 'paid' && (
                    <>
                      <Button variant="primary" size="small">
                        <Send size={14} style={{ marginRight: '4px' }} />
                        Generate Follow-up
                      </Button>
                      <Button variant="outline" size="small">
                        <Download size={14} style={{ marginRight: '4px' }} />
                        Download Letter
                      </Button>
                    </>
                  )}
                  <Button variant="ghost" size="small">
                    Contact Agency
                  </Button>
                  {contract.status !== 'paid' && (
                    <Button variant="outline" size="small">
                      Mark as Paid
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Agency Performance Tab */}
      {activeTab === 'agencies' && (
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Agency Performance Leaderboard
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '24px' }}>
            Public ranking of government agencies by payment performance
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {agencyPerformance.map((agency, index) => (
              <motion.div
                key={agency.agency}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={agencyCardStyle}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                      {agency.agency}
                    </h4>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      ...getRatingColor(agency.rating)
                    }}>
                      {agency.rating.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#dc2626' }}>
                      ₦{(agency.totalOwed / 1000000).toFixed(1)}M
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Total Owed</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                      {agency.avgPaymentTime}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Avg Days</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                      {agency.onTimeRate}%
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>On Time</div>
                  </div>
                </div>

                <div style={{ marginTop: '12px', fontSize: '0.875rem', color: '#6b7280' }}>
                  {agency.totalSMEsPaid} SMEs paid this year
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Follow-up Letter Templates
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              {
                name: 'Polite Reminder',
                description: 'Professional and courteous first follow-up',
                tone: 'polite',
                successRate: 45
              },
              {
                name: 'Firm Request',
                description: 'More assertive for overdue payments',
                tone: 'firm',
                successRate: 62
              },
              {
                name: 'Legal Notice',
                description: 'Final warning before legal action',
                tone: 'legal',
                successRate: 78
              }
            ].map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #f3f4f6'
                }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                  {template.name}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '12px' }}>
                  {template.description}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    backgroundColor: template.tone === 'polite' ? '#dbeafe' : template.tone === 'firm' ? '#fef3c7' : '#fee2e2',
                    color: template.tone === 'polite' ? '#2563eb' : template.tone === 'firm' ? '#d97706' : '#dc2626'
                  }}>
                    {template.tone.toUpperCase()}
                  </span>
                  <div style={{ fontSize: '0.875rem', color: '#16a34a', fontWeight: '600' }}>
                    {template.successRate}% success rate
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button variant="primary" size="small" style={{ flex: 1 }}>
                    Use Template
                  </Button>
                  <Button variant="outline" size="small">
                    Preview
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}