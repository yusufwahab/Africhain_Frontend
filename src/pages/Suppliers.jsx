import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, Phone, MessageCircle, Mail, CheckCircle, Filter, Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'

export default function Suppliers() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const suppliers = [
    {
      id: 1,
      name: 'Alhaji Trades Ltd',
      products: ['Rice', 'Beans', 'Garri', 'Yam', 'Plantain'],
      location: 'Kano, Nigeria',
      trustScore: 4.9,
      ordersCompleted: 1247,
      responseTime: '< 2 hours',
      verified: true,
      yearsInBusiness: 7,
      phone: '+234 803 XXX XXXX',
      whatsapp: '+234 803 XXX XXXX',
      email: 'alhaji@example.com',
      avatar: '🏪'
    },
    {
      id: 2,
      name: 'Fresh Farms Nigeria',
      products: ['Tomatoes', 'Pepper', 'Onions', 'Cucumber'],
      location: 'Lagos, Nigeria',
      trustScore: 4.7,
      ordersCompleted: 892,
      responseTime: '< 1 hour',
      verified: true,
      yearsInBusiness: 5,
      phone: '+234 901 XXX XXXX',
      whatsapp: '+234 901 XXX XXXX',
      email: 'fresh@example.com',
      avatar: '🌱'
    },
    {
      id: 3,
      name: 'Mama Kemi Foods',
      products: ['Palm Oil', 'Groundnut Oil', 'Locust Beans'],
      location: 'Ibadan, Nigeria',
      trustScore: 4.8,
      ordersCompleted: 654,
      responseTime: '< 3 hours',
      verified: false,
      yearsInBusiness: 3,
      phone: '+234 805 XXX XXXX',
      whatsapp: '+234 805 XXX XXXX',
      email: 'kemi@example.com',
      avatar: '👩‍🍳'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📦' },
    { id: 'grains', name: 'Grains', icon: '🌾' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
    { id: 'livestock', name: 'Livestock', icon: '🐄' },
    { id: 'processed', name: 'Processed Foods', icon: '🍞' }
  ]

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'lagos', name: 'Lagos' },
    { id: 'kano', name: 'Kano' },
    { id: 'abuja', name: 'Abuja' },
    { id: 'ibadan', name: 'Ibadan' }
  ]

  const containerStyle = {
    padding: '24px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827'
  }

  const subtitleStyle = {
    color: '#6b7280',
    fontSize: '1rem'
  }

  const searchSectionStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const filtersStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginTop: '16px'
  }

  const filterSelectStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    minWidth: '150px'
  }

  const suppliersGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '24px'
  }

  const supplierCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const supplierHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  }

  const avatarStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem'
  }

  const supplierInfoStyle = {
    flex: 1
  }

  const supplierNameStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px'
  }

  const verifiedBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500'
  }

  const trustScoreStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '8px'
  }

  const productsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '16px'
  }

  const productTagStyle = {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.75rem'
  }

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '16px'
  }

  const statItemStyle = {
    textAlign: 'center',
    padding: '8px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px'
  }

  const statValueStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827'
  }

  const statLabelStyle = {
    fontSize: '0.75rem',
    color: '#6b7280'
  }

  const contactButtonsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px'
  }

  const contactButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }

  const phoneButtonStyle = {
    ...contactButtonStyle,
    backgroundColor: '#dbeafe',
    color: '#2563eb'
  }

  const whatsappButtonStyle = {
    ...contactButtonStyle,
    backgroundColor: '#dcfce7',
    color: '#16a34a'
  }

  const emailButtonStyle = {
    ...contactButtonStyle,
    backgroundColor: '#fef3c7',
    color: '#d97706'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Verified Suppliers</h1>
          <p style={subtitleStyle}>1,247 trusted suppliers across Nigeria</p>
        </div>
        <Button variant="primary">
          <Plus size={16} style={{ marginRight: '8px' }} />
          List Your Business
        </Button>
      </div>

      {/* Search Section */}
      <div style={searchSectionStyle}>
        <HybridInput
          placeholder="Search suppliers, products, or locations..."
          onSubmit={setSearchQuery}
          size="large"
        />
        
        <div style={filtersStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} style={{ color: '#6b7280' }} />
            <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>Filters:</span>
          </div>
          
          <select 
            style={filterSelectStyle}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
          
          <select 
            style={filterSelectStyle}
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                📍 {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div style={suppliersGridStyle}>
        {suppliers.map((supplier, index) => (
          <motion.div
            key={supplier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={supplierCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Supplier Header */}
            <div style={supplierHeaderStyle}>
              <div style={avatarStyle}>
                {supplier.avatar}
              </div>
              <div style={supplierInfoStyle}>
                <h3 style={supplierNameStyle}>{supplier.name}</h3>
                {supplier.verified && (
                  <div style={verifiedBadgeStyle}>
                    <CheckCircle size={12} />
                    Verified
                  </div>
                )}
                <div style={trustScoreStyle}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      style={{ 
                        color: i < Math.floor(supplier.trustScore) ? '#fbbf24' : '#e5e7eb',
                        fill: i < Math.floor(supplier.trustScore) ? '#fbbf24' : '#e5e7eb'
                      }} 
                    />
                  ))}
                  <span style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '4px' }}>
                    {supplier.trustScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div style={productsStyle}>
              {supplier.products.slice(0, 3).map((product, i) => (
                <span key={i} style={productTagStyle}>{product}</span>
              ))}
              {supplier.products.length > 3 && (
                <span style={productTagStyle}>+{supplier.products.length - 3} more</span>
              )}
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <MapPin size={14} style={{ color: '#6b7280' }} />
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{supplier.location}</span>
            </div>

            {/* Stats */}
            <div style={statsStyle}>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{supplier.ordersCompleted}</div>
                <div style={statLabelStyle}>Orders</div>
              </div>
              <div style={statItemStyle}>
                <div style={statValueStyle}>{supplier.responseTime}</div>
                <div style={statLabelStyle}>Response</div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div style={contactButtonsStyle}>
              <button 
                style={phoneButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}
              >
                <Phone size={12} />
                Call
              </button>
              <button 
                style={whatsappButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#bbf7d0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dcfce7'}
              >
                <MessageCircle size={12} />
                WhatsApp
              </button>
              <button 
                style={emailButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#fde68a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#fef3c7'}
              >
                <Mail size={12} />
                Email
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}