import { useState } from 'react'
import { Search, MapPin, TrendingUp, TrendingDown, Bell, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'
import { mockPrices } from '../utils/mockData'

export default function PriceChecker() {
  const { t } = useTranslation()
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    
    setTimeout(() => {
      const result = mockPrices[0]
      setSearchResult(result)
      setLoading(false)
    }, 1500)
  }

  const chartData = searchResult?.trend.map((price, index) => ({
    day: `Day ${index + 1}`,
    price
  })) || []

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '24px'
  }

  const contentStyle = {
    maxWidth: '1200px',
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
    color: '#6b7280'
  }

  const searchCardStyle = {
    backgroundColor: '#f0fdf4',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #bbf7d0'
  }

  const searchGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '24px'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px'
  }

  const resultCardStyle = {
    border: '2px solid #bbf7d0',
    padding: '32px',
    borderRadius: '16px',
    backgroundColor: 'white'
  }

  const resultHeaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '32px'
  }

  const productInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }

  const productTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  }

  const locationStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#6b7280',
    fontSize: '1rem'
  }

  const priceInfoStyle = {
    textAlign: 'right'
  }

  const priceStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  }

  const changeStyle = (isPositive) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',
    color: isPositive ? '#dc2626' : '#16a34a',
    fontSize: '1rem',
    fontWeight: '600'
  })

  const buttonsStyle = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }

  const chartCardStyle = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

  const chartTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '24px'
  }

  const insightCardStyle = {
    backgroundColor: '#f0f9ff',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #bae6fd'
  }

  const insightHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  }

  const insightIconStyle = {
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: '#dbeafe',
    fontSize: '1.5rem'
  }

  const insightContentStyle = {
    flex: 1
  }

  const insightTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  }

  const insightTextStyle = {
    fontSize: '1rem',
    color: '#374151',
    marginBottom: '16px',
    lineHeight: '1.6'
  }

  const confidenceStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }

  const confidenceBarStyle = {
    width: '80px',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  }

  const confidenceFillStyle = {
    width: '85%',
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: '4px'
  }

  const comparisonGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  }

  const cityCardStyle = {
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    cursor: 'pointer'
  }

  const cityNameStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  }

  const cityPriceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4px'
  }

  const cityChangeStyle = (isPositive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.875rem',
    color: isPositive ? '#dc2626' : '#16a34a'
  })

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '48px 24px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

  const emptyIconStyle = {
    fontSize: '4rem',
    marginBottom: '16px'
  }

  const emptyTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  }

  const emptyTextStyle = {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '24px'
  }

  const quickButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px'
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>{t('prices.title')}</h1>
          <p style={subtitleStyle}>{t('prices.subtitle')}</p>
        </div>

        <Card style={searchCardStyle}>
          <div style={searchGridStyle}>
            <div>
              <label style={labelStyle}>Product</label>
              <HybridInput
                placeholder={t('prices.product_placeholder')}
                onSubmit={handleSearch}
              />
            </div>
            <div>
              <label style={labelStyle}>Location</label>
              <HybridInput
                placeholder={t('prices.location_placeholder')}
                onSubmit={handleSearch}
              />
            </div>
          </div>
          <Button
            onClick={() => handleSearch('rice kano')}
            loading={loading}
            size="large"
            style={{ width: '100%' }}
          >
            <Search style={{ marginRight: '8px' }} size={20} />
            {t('prices.check_price')}
          </Button>
        </Card>

        {searchResult && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Card style={resultCardStyle}>
              <div style={resultHeaderStyle}>
                <div style={productInfoStyle}>
                  <span style={{ fontSize: '3rem' }}>🌾</span>
                  <div>
                    <h2 style={productTitleStyle}>{searchResult.product}</h2>
                    <div style={locationStyle}>
                      <MapPin size={16} />
                      <span>{searchResult.location}</span>
                    </div>
                  </div>
                </div>
                <div style={priceInfoStyle}>
                  <div style={priceStyle}>
                    ₦{searchResult.currentPrice.toLocaleString()}
                  </div>
                  <div style={changeStyle(searchResult.change > 0)}>
                    {searchResult.change > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{Math.abs(searchResult.change)}% this week</span>
                  </div>
                </div>
              </div>
              
              <div style={buttonsStyle}>
                <Button variant="outline" style={{ flex: 1 }}>
                  <Bell style={{ marginRight: '8px' }} size={16} />
                  {t('prices.set_alert')}
                </Button>
                <Button variant="ghost" style={{ flex: 1 }}>
                  <BarChart3 style={{ marginRight: '8px' }} size={16} />
                  View History
                </Button>
              </div>
            </Card>

            <Card style={chartCardStyle}>
              <h3 style={chartTitleStyle}>Price Trend (7 Days)</h3>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`₦${value.toLocaleString()}`, 'Price']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card style={insightCardStyle}>
              <div style={insightHeaderStyle}>
                <div style={insightIconStyle}>💡</div>
                <div style={insightContentStyle}>
                  <h3 style={insightTitleStyle}>Smart Insight</h3>
                  <p style={insightTextStyle}>{searchResult.insights}</p>
                  <div style={confidenceStyle}>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Confidence:</span>
                    <div style={confidenceBarStyle}>
                      <div style={confidenceFillStyle}></div>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#22c55e' }}>85%</span>
                    <Button variant="ghost" size="small">
                      🔊 Listen
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 style={chartTitleStyle}>{t('prices.compare_cities')}</h3>
              <div style={comparisonGridStyle}>
                {[
                  { city: 'Lagos', price: 44500, diff: 2500, trend: 'up' },
                  { city: 'Abuja', price: 41000, diff: -1000, trend: 'down' },
                  { city: 'Port Harcourt', price: 43000, diff: 1000, trend: 'up' }
                ].map((city, index) => (
                  <div
                    key={city.city}
                    style={cityCardStyle}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#bbf7d0'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    <h4 style={cityNameStyle}>{city.city}</h4>
                    <div style={cityPriceStyle}>
                      ₦{city.price.toLocaleString()}
                    </div>
                    <div style={cityChangeStyle(city.diff > 0)}>
                      {city.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      <span>{city.diff > 0 ? '+' : ''}₦{city.diff.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {!searchResult && !loading && (
          <Card style={emptyStateStyle}>
            <div style={emptyIconStyle}>🔍</div>
            <h3 style={emptyTitleStyle}>Search for any product price</h3>
            <p style={emptyTextStyle}>
              Get real-time prices from markets across Nigeria
            </p>
            <div style={quickButtonsStyle}>
              {['Rice', 'Tomatoes', 'Yam', 'Beans', 'Garri'].map((product) => (
                <Button
                  key={product}
                  variant="outline"
                  size="small"
                  onClick={() => handleSearch(product)}
                >
                  {product}
                </Button>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}