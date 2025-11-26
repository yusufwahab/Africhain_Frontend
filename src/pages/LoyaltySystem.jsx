import { useState } from 'react'
import { Gift, QrCode, Users, TrendingUp, Award, Plus } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function LoyaltySystem() {
  const [activeTab, setActiveTab] = useState('my-cards')

  const loyaltyCards = [
    {
      id: 1,
      businessName: 'Mama Kemi Foods',
      points: 450,
      nextReward: 500,
      tier: 'Silver',
      qrCode: 'QR123456'
    },
    {
      id: 2,
      businessName: 'Alhaji Rice Store',
      points: 1200,
      nextReward: 1500,
      tier: 'Gold',
      qrCode: 'QR789012'
    },
    {
      id: 3,
      businessName: 'Fresh Farms Market',
      points: 280,
      nextReward: 500,
      tier: 'Bronze',
      qrCode: 'QR345678'
    }
  ]

  const rewards = [
    { name: '10% off next purchase', cost: 500, available: true },
    { name: 'Free delivery', cost: 300, available: true },
    { name: '₦5,000 discount', cost: 1000, available: false },
    { name: 'VIP customer status', cost: 2000, available: false }
  ]

  const myProgram = {
    businessName: 'Your Business',
    totalCustomers: 156,
    activeMembers: 89,
    pointsIssued: 12450,
    pointsRedeemed: 8900,
    topCustomers: [
      { name: 'Customer A', points: 2500, purchases: 45 },
      { name: 'Customer B', points: 1800, purchases: 32 },
      { name: 'Customer C', points: 1200, purchases: 28 }
    ]
  }

  const containerStyle = {
    padding: '24px',
    maxWidth: '1280px',
    margin: '0 auto'
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

  const tabsStyle = {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '32px'
  }

  const tabButtonStyle = (isActive) => ({
    flex: 1,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: isActive ? 'white' : 'transparent',
    color: isActive ? '#111827' : '#6b7280',
    boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'
  })

  const cardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  }

  const loyaltyCardStyle = {
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: '24px'
  }

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  }

  const businessInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const businessNameStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '4px'
  }

  const tierBadgeStyle = {
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }

  const pointsStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '4px'
  }

  const nextRewardStyle = {
    fontSize: '0.875rem',
    opacity: 0.9
  }

  const progressBarContainerStyle = {
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginBottom: '16px'
  }

  const progressBarFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '2px'
  })

  const rewardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  }

  const rewardCardStyle = (available) => ({
    padding: '16px',
    backgroundColor: available ? '#f0fdf4' : '#f9fafb',
    borderRadius: '8px',
    border: available ? '1px solid #bbf7d0' : '1px solid #e5e7eb',
    opacity: available ? 1 : 0.6
  })

  const rewardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  }

  const rewardNameStyle = {
    fontSize: '0.875rem',
    fontWeight: '600'
  }

  const rewardCostStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  }

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    marginBottom: '16px'
  }

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
    display: 'block'
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '1rem'
  }

  const tierInputStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px'
  }

  const tierLabelStyle = {
    fontSize: '0.875rem',
    minWidth: '200px'
  }

  const tierInputFieldStyle = {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    fontSize: '0.875rem'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  }

  const statCardStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

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

  const customerListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }

  const customerItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px'
  }

  const customerNameStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '4px'
  }

  const customerPurchasesStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const customerPointsStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#22c55e'
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Dash Code - Loyalty System</h1>
        <p style={subtitleStyle}>Reward customers and build lasting relationships</p>
      </div>

      <div style={tabsStyle}>
        {['my-cards', 'create-program', 'my-program'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={tabButtonStyle(activeTab === tab)}
          >
            {tab === 'my-cards' ? 'My Loyalty Cards' : tab === 'create-program' ? 'Create Program' : 'My Program'}
          </button>
        ))}
      </div>

      {activeTab === 'my-cards' && (
        <div>
          <div style={cardsGridStyle}>
            {loyaltyCards.map((card, index) => (
              <Card key={card.id} style={loyaltyCardStyle}>
                <div style={cardHeaderStyle}>
                  <div style={businessInfoStyle}>
                    <div style={{ fontSize: '2rem' }}>🏪</div>
                    <div>
                      <h3 style={businessNameStyle}>{card.businessName}</h3>
                      <span style={tierBadgeStyle}>{card.tier}</span>
                    </div>
                  </div>
                  <QrCode size={32} style={{ opacity: 0.8 }} />
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={pointsStyle}>{card.points} points</div>
                  <div style={nextRewardStyle}>
                    {card.nextReward - card.points} points to next reward
                  </div>
                </div>
                
                <div style={progressBarContainerStyle}>
                  <div style={progressBarFillStyle((card.points / card.nextReward) * 100)}></div>
                </div>
                
                <Button variant="outline" style={{ backgroundColor: 'white', color: '#22c55e', width: '100%' }}>
                  View Rewards
                </Button>
              </Card>
            ))}
          </div>

          <Card>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Available Rewards</h3>
            <div style={rewardsGridStyle}>
              {rewards.map((reward, index) => (
                <div key={index} style={rewardCardStyle(reward.available)}>
                  <div style={rewardHeaderStyle}>
                    <Gift size={16} style={{ color: reward.available ? '#16a34a' : '#6b7280' }} />
                    <span style={rewardNameStyle}>{reward.name}</span>
                  </div>
                  <div style={rewardCostStyle}>{reward.cost} points</div>
                  <Button 
                    variant={reward.available ? 'primary' : 'outline'} 
                    size="small" 
                    disabled={!reward.available}
                    style={{ width: '100%' }}
                  >
                    {reward.available ? 'Redeem' : 'Not enough points'}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'create-program' && (
        <Card>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Create Loyalty Program</h3>
          <div style={formGridStyle}>
            <div>
              <label style={labelStyle}>Program Name</label>
              <input
                type="text"
                placeholder="e.g., VIP Customer Rewards"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Points per ₦100 spent</label>
              <input
                type="number"
                placeholder="1"
                style={inputStyle}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Reward Tiers</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Bronze (0-499 points)', 'Silver (500-999 points)', 'Gold (1000+ points)'].map((tier, index) => (
                <div key={index} style={tierInputStyle}>
                  <span style={tierLabelStyle}>{tier}</span>
                  <input
                    type="text"
                    placeholder="e.g., 5% discount"
                    style={tierInputFieldStyle}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="primary" style={{ width: '100%' }}>
            <Plus size={16} style={{ marginRight: '8px' }} />
            Create Program
          </Button>
        </Card>
      )}

      {activeTab === 'my-program' && (
        <div>
          <div style={statsGridStyle}>
            <Card style={statCardStyle}>
              <Users size={32} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
              <div style={statValueStyle}>{myProgram.totalCustomers}</div>
              <div style={statLabelStyle}>Total Customers</div>
            </Card>
            <Card style={statCardStyle}>
              <TrendingUp size={32} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
              <div style={statValueStyle}>{myProgram.activeMembers}</div>
              <div style={statLabelStyle}>Active Members</div>
            </Card>
            <Card style={statCardStyle}>
              <Award size={32} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
              <div style={statValueStyle}>{myProgram.pointsIssued.toLocaleString()}</div>
              <div style={statLabelStyle}>Points Issued</div>
            </Card>
            <Card style={statCardStyle}>
              <Gift size={32} style={{ color: '#22c55e', margin: '0 auto 12px' }} />
              <div style={statValueStyle}>{myProgram.pointsRedeemed.toLocaleString()}</div>
              <div style={statLabelStyle}>Points Redeemed</div>
            </Card>
          </div>

          <Card>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Top Customers</h3>
            <div style={customerListStyle}>
              {myProgram.topCustomers.map((customer, index) => (
                <div key={index} style={customerItemStyle}>
                  <div>
                    <div style={customerNameStyle}>{customer.name}</div>
                    <div style={customerPurchasesStyle}>{customer.purchases} purchases</div>
                  </div>
                  <div style={customerPointsStyle}>
                    {customer.points} pts
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}