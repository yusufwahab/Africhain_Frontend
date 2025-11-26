import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Package, Clock, MapPin, TrendingDown, Plus, MessageCircle, Star } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'

export default function GroupBuy() {
  const [activeTab, setActiveTab] = useState('browse')
  const [showCreateModal, setShowCreateModal] = useState(false)

  const activeGroupBuys = [
    {
      id: 1,
      product: 'Rice (50kg bags)',
      targetQuantity: 500,
      currentQuantity: 380,
      individualPrice: 42000,
      groupPrice: 37000,
      savings: 5000,
      savingsPercent: 12,
      organizer: 'Trader #4523',
      organizerRating: 4.8,
      members: 38,
      deadline: '2024-11-30T23:59:59',
      pickupLocation: 'Kano Central Market',
      status: 'filling',
      description: 'Premium quality rice from trusted suppliers. Bulk discount available.',
      deliveryOptions: ['Pickup', 'Local Delivery'],
      memberAvatars: ['👨‍💼', '👩‍💼', '👨‍🌾', '👩‍🌾']
    },
    {
      id: 2,
      product: 'Tomatoes (baskets)',
      targetQuantity: 200,
      currentQuantity: 185,
      individualPrice: 8500,
      groupPrice: 7200,
      savings: 1300,
      savingsPercent: 15,
      organizer: 'Mama Kemi',
      organizerRating: 4.9,
      members: 25,
      deadline: '2024-11-28T18:00:00',
      pickupLocation: 'Mile 12 Market, Lagos',
      status: 'almost-full',
      description: 'Fresh tomatoes directly from farm. Perfect for restaurants and retailers.',
      deliveryOptions: ['Pickup', 'Delivery'],
      memberAvatars: ['👩‍🍳', '👨‍💼', '👩‍💼', '👨‍🌾']
    },
    {
      id: 3,
      product: 'Palm Oil (25L containers)',
      targetQuantity: 100,
      currentQuantity: 100,
      individualPrice: 35000,
      groupPrice: 28000,
      savings: 7000,
      savingsPercent: 20,
      organizer: 'Chief Okoro',
      organizerRating: 4.7,
      members: 20,
      deadline: '2024-11-27T12:00:00',
      pickupLocation: 'Onitsha Main Market',
      status: 'completed',
      description: 'Pure red palm oil from Abia State. High quality guaranteed.',
      deliveryOptions: ['Pickup'],
      memberAvatars: ['👨‍💼', '👩‍💼', '👨‍🌾', '👩‍🌾']
    }
  ]

  const myGroupBuys = [
    {
      id: 1,
      product: 'Yam tubers',
      role: 'organizer',
      quantity: 50,
      members: 12,
      status: 'active',
      progress: 60
    },
    {
      id: 2,
      product: 'Garri (50kg bags)',
      role: 'member',
      quantity: 5,
      organizer: 'Trader #7891',
      status: 'completed',
      progress: 100
    }
  ]

  const successStories = [
    {
      user: 'Mama Ngozi',
      avatar: '👩‍💼',
      product: 'Rice purchase',
      savings: 45000,
      rating: 5,
      testimonial: 'Saved ₦45,000 on rice purchase! The group buying made it so affordable.'
    },
    {
      user: 'Ahmed Traders',
      avatar: '👨‍💼',
      product: 'Palm oil bulk buy',
      savings: 28000,
      rating: 5,
      testimonial: 'Excellent quality and great savings. Will definitely join more groups.'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'filling': return { bg: '#dbeafe', text: '#2563eb', border: '#bfdbfe' }
      case 'almost-full': return { bg: '#fef3c7', text: '#d97706', border: '#fde68a' }
      case 'completed': return { bg: '#dcfce7', text: '#16a34a', border: '#bbf7d0' }
      case 'failed': return { bg: '#fee2e2', text: '#dc2626', border: '#fca5a5' }
      default: return { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb' }
    }
  }

  const getTimeRemaining = (deadline) => {
    const now = new Date()
    const end = new Date(deadline)
    const diff = end - now
    
    if (diff <= 0) return 'Expired'
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) return `${days}d ${hours}h left`
    return `${hours}h left`
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
    textAlign: 'center',
    marginBottom: '32px'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  }

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '16px'
  }

  const statsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap'
  }

  const statItemStyle = {
    textAlign: 'center'
  }

  const statValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#22c55e'
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

  const groupsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: '24px'
  }

  const groupCardStyle = (status) => {
    const colors = getStatusColor(status)
    return {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      border: status === 'filling' ? '2px solid #22c55e' : '1px solid #f3f4f6',
      transition: 'all 0.3s ease'
    }
  }

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '8px'
  }

  const progressFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: progress >= 90 ? '#f59e0b' : '#22c55e',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  })

  const memberAvatarsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }

  const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    border: '2px solid white',
    marginLeft: '-8px'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Group Buy Power</h1>
        <p style={subtitleStyle}>Buy together, save more. Join the collective bargaining revolution.</p>
        
        <div style={statsStyle}>
          <div style={statItemStyle}>
            <div style={statValueStyle}>18%</div>
            <div style={statLabelStyle}>Average Savings</div>
          </div>
          <div style={statItemStyle}>
            <div style={statValueStyle}>247</div>
            <div style={statLabelStyle}>Active Groups</div>
          </div>
          <div style={statItemStyle}>
            <div style={statValueStyle}>₦2.3M</div>
            <div style={statLabelStyle}>Total Saved</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <button
          onClick={() => setActiveTab('browse')}
          style={tabButtonStyle(activeTab === 'browse')}
        >
          Browse Groups
        </button>
        <button
          onClick={() => setActiveTab('my-groups')}
          style={tabButtonStyle(activeTab === 'my-groups')}
        >
          My Groups
        </button>
        <button
          onClick={() => setActiveTab('create')}
          style={tabButtonStyle(activeTab === 'create')}
        >
          Create Group
        </button>
      </div>

      {/* Browse Groups Tab */}
      {activeTab === 'browse' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>
              Active Group Buys
            </h2>
            <Button variant="primary" onClick={() => setActiveTab('create')}>
              <Plus size={16} style={{ marginRight: '8px' }} />
              Create Group
            </Button>
          </div>

          <div style={groupsGridStyle}>
            {activeGroupBuys.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={groupCardStyle(group.status)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
                      {group.product}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {group.description}
                    </p>
                  </div>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    ...getStatusColor(group.status)
                  }}>
                    {group.status === 'filling' ? 'Open' : 
                     group.status === 'almost-full' ? 'Almost Full' : 
                     group.status === 'completed' ? 'Completed' : 'Closed'}
                  </span>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Progress</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                      {group.currentQuantity}/{group.targetQuantity}
                    </span>
                  </div>
                  <div style={progressBarStyle}>
                    <div style={progressFillStyle((group.currentQuantity / group.targetQuantity) * 100)}></div>
                  </div>
                </div>

                {/* Savings */}
                <div style={{ 
                  backgroundColor: '#f0fdf4', 
                  borderRadius: '12px', 
                  padding: '16px', 
                  marginBottom: '16px',
                  border: '1px solid #bbf7d0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: '#16a34a', fontWeight: '500' }}>
                        Save {group.savingsPercent}% • ₦{group.savings.toLocaleString()} per unit
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        Individual: ₦{group.individualPrice.toLocaleString()} → Group: ₦{group.groupPrice.toLocaleString()}
                      </div>
                    </div>
                    <TrendingDown size={20} style={{ color: '#16a34a' }} />
                  </div>
                </div>

                {/* Group Details */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={14} style={{ color: '#6b7280' }} />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {group.members} members
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} style={{ color: '#6b7280' }} />
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {getTimeRemaining(group.deadline)}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <MapPin size={14} style={{ color: '#6b7280' }} />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {group.pickupLocation}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Organizer:</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                      {group.organizer}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={12} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        {group.organizerRating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Members */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={memberAvatarsStyle}>
                    {group.memberAvatars.slice(0, 4).map((avatar, i) => (
                      <div key={i} style={avatarStyle}>
                        {avatar}
                      </div>
                    ))}
                    {group.members > 4 && (
                      <div style={{ ...avatarStyle, backgroundColor: '#e5e7eb', fontSize: '0.75rem' }}>
                        +{group.members - 4}
                      </div>
                    )}
                  </div>
                  <Button variant="ghost" size="small">
                    <MessageCircle size={14} style={{ marginRight: '4px' }} />
                    Chat
                  </Button>
                </div>

                {/* Action Button */}
                <Button 
                  variant={group.status === 'completed' ? 'outline' : 'primary'} 
                  style={{ width: '100%' }}
                  disabled={group.status === 'completed'}
                >
                  {group.status === 'completed' ? 'Completed' :
                   group.status === 'almost-full' ? 'Join Waitlist' : 'Join Group'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* My Groups Tab */}
      {activeTab === 'my-groups' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
            My Group Buys
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {myGroupBuys.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #f3f4f6'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                      {group.product}
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {group.role === 'organizer' ? 
                        `Organizing • ${group.members} members` : 
                        `Member • Organized by ${group.organizer}`
                      }
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#111827' }}>
                      {group.quantity} units
                    </div>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: group.status === 'completed' ? '#dcfce7' : '#dbeafe',
                      color: group.status === 'completed' ? '#16a34a' : '#2563eb'
                    }}>
                      {group.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Create Group Tab */}
      {activeTab === 'create' && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          border: '1px solid #f3f4f6'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
            Create New Group Buy
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
                Product
              </label>
              <HybridInput placeholder="What product do you want to buy in bulk?" />
            </div>
            
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
                Target Quantity
              </label>
              <input
                type="number"
                placeholder="e.g., 500 bags"
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
              <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
                Target Price per Unit
              </label>
              <input
                type="number"
                placeholder="₦37,000"
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
              <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
                Deadline
              </label>
              <input
                type="datetime-local"
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
          
          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
              Pickup Location
            </label>
            <HybridInput placeholder="Where will members collect their orders?" />
          </div>
          
          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
              Description & Requirements
            </label>
            <textarea
              placeholder="Describe the product quality, payment terms, and any special requirements..."
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                fontSize: '1rem',
                minHeight: '100px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <Button variant="primary" size="large" style={{ width: '100%', marginTop: '24px' }}>
            Create Group Buy
          </Button>
        </div>
      )}

      {/* Success Stories */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        border: '1px solid #f3f4f6'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Success Stories
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {successStories.map((story, index) => (
            <div key={index} style={{
              backgroundColor: '#f9fafb',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '2rem' }}>{story.avatar}</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                    {story.user}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={12} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', marginBottom: '8px' }}>
                "{story.testimonial}"
              </p>
              <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '600' }}>
                Saved ₦{story.savings.toLocaleString()} on {story.product}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}