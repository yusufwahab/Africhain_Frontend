import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Shield, Users, Clock, Star, AlertCircle, CheckCircle } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'

export default function TradeCredit() {
  const [activeTab, setActiveTab] = useState('borrow')
  const [loanAmount, setLoanAmount] = useState(50000)
  const [loanPeriod, setLoanPeriod] = useState(4)
  const [interestRate, setInterestRate] = useState(5)

  const loanOpportunities = [
    {
      id: 1,
      amount: 75000,
      purpose: 'Stock rice for dry season',
      interestOffered: 4.5,
      repaymentWeeks: 6,
      requesterScore: 4.8,
      completedLoans: 12,
      riskLevel: 'Low',
      location: 'Kano'
    },
    {
      id: 2,
      amount: 120000,
      purpose: 'Buy new freezer for shop',
      interestOffered: 6,
      repaymentWeeks: 8,
      requesterScore: 4.2,
      completedLoans: 5,
      riskLevel: 'Medium',
      location: 'Lagos'
    },
    {
      id: 3,
      amount: 30000,
      purpose: 'Expand vegetable section',
      interestOffered: 3.5,
      repaymentWeeks: 3,
      requesterScore: 4.9,
      completedLoans: 18,
      riskLevel: 'Low',
      location: 'Ibadan'
    }
  ]

  const myLoans = [
    {
      id: 1,
      type: 'borrowing',
      amount: 100000,
      purpose: 'Stock expansion',
      lender: 'Trader #4523',
      progress: 60,
      nextPayment: '2024-12-01',
      status: 'active'
    },
    {
      id: 2,
      type: 'lending',
      amount: 50000,
      purpose: 'Equipment purchase',
      borrower: 'Trader #7891',
      progress: 80,
      nextPayment: '2024-11-28',
      status: 'active'
    }
  ]

  const calculateRepayment = () => {
    const interest = (loanAmount * interestRate) / 100
    return loanAmount + interest
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

  const heroSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  }

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    textAlign: 'center'
  }

  const statIconStyle = (bgColor, iconColor) => ({
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: bgColor,
    color: iconColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px'
  })

  const statValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4px'
  }

  const statLabelStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
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

  const loanFormStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  }

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151'
  }

  const sliderStyle = {
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    backgroundColor: '#e5e7eb',
    outline: 'none',
    cursor: 'pointer'
  }

  const previewCardStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #e5e7eb'
  }

  const opportunitiesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '24px'
  }

  const opportunityCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    transition: 'all 0.3s ease'
  }

  const riskBadgeStyle = (risk) => {
    const colors = {
      'Low': { bg: '#dcfce7', text: '#16a34a' },
      'Medium': { bg: '#fef3c7', text: '#d97706' },
      'High': { bg: '#fee2e2', text: '#dc2626' }
    }
    return {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      backgroundColor: colors[risk].bg,
      color: colors[risk].text
    }
  }

  const loanCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  }

  const progressFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  })

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Trade Credit Network</h1>
        <p style={subtitleStyle}>Get funded by your peers. No banks, no hassle.</p>
      </div>

      {/* Hero Stats */}
      <div style={heroSectionStyle}>
        <div style={statCardStyle}>
          <div style={statIconStyle('#dcfce7', '#16a34a')}>
            <DollarSign size={24} />
          </div>
          <div style={statValueStyle}>₦2.3M</div>
          <div style={statLabelStyle}>Total Lent</div>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle('#dbeafe', '#2563eb')}>
            <TrendingUp size={24} />
          </div>
          <div style={statValueStyle}>94%</div>
          <div style={statLabelStyle}>Success Rate</div>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle('#fef3c7', '#d97706')}>
            <Clock size={24} />
          </div>
          <div style={statValueStyle}>2.5%</div>
          <div style={statLabelStyle}>Avg Interest</div>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle('#f3e8ff', '#9333ea')}>
            <Users size={24} />
          </div>
          <div style={statValueStyle}>1,247</div>
          <div style={statLabelStyle}>Active Traders</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <button
          onClick={() => setActiveTab('borrow')}
          style={tabButtonStyle(activeTab === 'borrow')}
        >
          Need Funding
        </button>
        <button
          onClick={() => setActiveTab('lend')}
          style={tabButtonStyle(activeTab === 'lend')}
        >
          Lend Money
        </button>
        <button
          onClick={() => setActiveTab('active')}
          style={tabButtonStyle(activeTab === 'active')}
        >
          My Loans
        </button>
      </div>

      {/* Borrow Tab */}
      {activeTab === 'borrow' && (
        <div style={loanFormStyle}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
            Request Funding
          </h2>
          
          <div style={formGridStyle}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Amount Needed</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}>₦</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 32px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Repayment Period</label>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                {loanPeriod} weeks
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Interest Offered</label>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                {interestRate}%
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Purpose</label>
            <HybridInput
              placeholder="What do you need the money for? e.g., Stock rice for dry season"
              size="default"
            />
          </div>

          <div style={previewCardStyle}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
              Repayment Preview
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Amount Borrowed</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>₦{loanAmount.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Interest</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>₦{((loanAmount * interestRate) / 100).toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Repayment</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>₦{calculateRepayment().toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Weekly Payment</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827' }}>₦{(calculateRepayment() / loanPeriod).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <Button variant="primary" size="large" style={{ width: '100%', marginTop: '24px' }}>
            Submit Loan Request
          </Button>
        </div>
      )}

      {/* Lend Tab */}
      {activeTab === 'lend' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
            Available Lending Opportunities
          </h2>
          
          <div style={opportunitiesGridStyle}>
            {loanOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={opportunityCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>
                      ₦{opportunity.amount.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {opportunity.repaymentWeeks} weeks • {opportunity.interestOffered}% interest
                    </div>
                  </div>
                  <span style={riskBadgeStyle(opportunity.riskLevel)}>
                    {opportunity.riskLevel} Risk
                  </span>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '500', color: '#111827', marginBottom: '4px' }}>
                    {opportunity.purpose}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    📍 {opportunity.location}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                    <span style={{ fontSize: '0.875rem', color: '#111827' }}>{opportunity.requesterScore}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {opportunity.completedLoans} completed loans
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button variant="primary" style={{ flex: 1 }}>
                    Offer Loan
                  </Button>
                  <Button variant="outline" style={{ flex: 1 }}>
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Active Loans Tab */}
      {activeTab === 'active' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
            My Active Loans
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {myLoans.map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={loanCardStyle}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                        ₦{loan.amount.toLocaleString()}
                      </span>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        backgroundColor: loan.type === 'borrowing' ? '#dbeafe' : '#dcfce7',
                        color: loan.type === 'borrowing' ? '#2563eb' : '#16a34a'
                      }}>
                        {loan.type === 'borrowing' ? 'Borrowing' : 'Lending'}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {loan.purpose}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {loan.type === 'borrowing' ? `From: ${loan.lender}` : `To: ${loan.borrower}`}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>
                      Next Payment
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#111827' }}>
                      {new Date(loan.nextPayment).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Progress</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>{loan.progress}%</span>
                  </div>
                  <div style={progressBarStyle}>
                    <div style={progressFillStyle(loan.progress)}></div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button variant="primary" size="small">
                    {loan.type === 'borrowing' ? 'Make Payment' : 'Send Reminder'}
                  </Button>
                  <Button variant="outline" size="small">
                    View Details
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