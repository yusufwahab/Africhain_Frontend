import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Bell, BarChart3, DollarSign, Euro, PoundSterling, Zap } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function CurrencyShield() {
  const [selectedPair, setSelectedPair] = useState('USD/NGN')
  const [alertTarget, setAlertTarget] = useState(1900)

  const forexRates = [
    {
      pair: 'USD/NGN',
      buyRate: 1850,
      sellRate: 1870,
      change24h: 2.3,
      lastUpdated: '2024-11-26T11:00:00',
      trend: [1820, 1830, 1840, 1845, 1850, 1855, 1850],
      icon: DollarSign,
      flag: '🇺🇸'
    },
    {
      pair: 'EUR/NGN',
      buyRate: 1950,
      sellRate: 1975,
      change24h: -1.2,
      lastUpdated: '2024-11-26T11:00:00',
      trend: [1980, 1970, 1965, 1960, 1955, 1950, 1950],
      icon: Euro,
      flag: '🇪🇺'
    },
    {
      pair: 'GBP/NGN',
      buyRate: 2100,
      sellRate: 2130,
      change24h: 0.8,
      lastUpdated: '2024-11-26T11:00:00',
      trend: [2090, 2095, 2100, 2105, 2100, 2105, 2100],
      icon: PoundSterling,
      flag: '🇬🇧'
    },
    {
      pair: 'CNY/NGN',
      buyRate: 255,
      sellRate: 260,
      change24h: 1.5,
      lastUpdated: '2024-11-26T11:00:00',
      trend: [250, 252, 254, 255, 256, 255, 255],
      icon: DollarSign,
      flag: '🇨🇳'
    }
  ]

  const rateComparison = [
    { source: 'CBN Official', usdRate: 1465, eurRate: 1580, gbpRate: 1850, spread: 'N/A', updated: '9:00 AM' },
    { source: 'Black Market', usdRate: 1850, eurRate: 1950, gbpRate: 2100, spread: '26%', updated: 'Live' },
    { source: 'Bank Average', usdRate: 1520, eurRate: 1650, gbpRate: 1920, spread: '4%', updated: '10:30 AM' },
    { source: 'Bureau de Change', usdRate: 1840, eurRate: 1940, gbpRate: 2090, spread: '25%', updated: 'Live' }
  ]

  const myAlerts = [
    { pair: 'USD/NGN', target: 1900, type: 'above', status: 'active' },
    { pair: 'EUR/NGN', target: 1900, type: 'below', status: 'triggered' },
    { pair: 'GBP/NGN', target: 2200, type: 'above', status: 'active' }
  ]

  const insights = [
    {
      title: 'Best Day to Buy Forex',
      content: 'Thursday typically offers the best rates. Dollar has been stable for 10 days.',
      confidence: 85,
      type: 'timing'
    },
    {
      title: 'Naira Forecast',
      content: 'Naira expected to drop 2% next week based on CBN policy indicators.',
      confidence: 72,
      type: 'prediction'
    },
    {
      title: 'Import Recommendation',
      content: 'Buy $500 worth of goods now, save ₦12,000 vs next week.',
      confidence: 90,
      type: 'action'
    }
  ]

  const selectedRate = forexRates.find(rate => rate.pair === selectedPair)
  const chartData = selectedRate?.trend.map((rate, index) => ({
    time: `${index + 1}h`,
    rate
  })) || []

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
    color: '#6b7280'
  }

  const ratesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  }

  const rateCardStyle = (isSelected) => ({
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: isSelected 
      ? '0 8px 25px -5px rgba(34, 197, 94, 0.2)' 
      : '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: isSelected ? '2px solid #22c55e' : '1px solid #f3f4f6',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  })

  const rateHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px'
  }

  const ratePairStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const liveIndicatorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.75rem',
    color: '#16a34a'
  }

  const rateValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  }

  const changeStyle = (change) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: change > 0 ? '#dc2626' : '#16a34a'
  })

  const comparisonTableStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    overflowX: 'auto'
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  }

  const thStyle = {
    padding: '12px',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    borderBottom: '1px solid #e5e7eb'
  }

  const tdStyle = {
    padding: '12px',
    fontSize: '0.875rem',
    color: '#111827',
    borderBottom: '1px solid #f3f4f6'
  }

  const bestRateStyle = {
    backgroundColor: '#dcfce7',
    fontWeight: '600',
    color: '#16a34a'
  }

  const chartCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const alertsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  }

  const alertCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const insightCardStyle = (type) => {
    const colors = {
      timing: { bg: '#dbeafe', border: '#2563eb' },
      prediction: { bg: '#fef3c7', border: '#d97706' },
      action: { bg: '#dcfce7', border: '#16a34a' }
    }
    return {
      backgroundColor: colors[type].bg,
      borderRadius: '12px',
      padding: '20px',
      border: `1px solid ${colors[type].border}`,
      marginBottom: '16px'
    }
  }

  const confidenceBarStyle = (confidence) => ({
    width: '100%',
    height: '4px',
    backgroundColor: '#e5e7eb',
    borderRadius: '2px',
    overflow: 'hidden',
    marginTop: '8px'
  })

  const confidenceFillStyle = (confidence) => ({
    width: `${confidence}%`,
    height: '100%',
    backgroundColor: confidence > 80 ? '#16a34a' : confidence > 60 ? '#d97706' : '#dc2626',
    borderRadius: '2px'
  })

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Currency Shield</h1>
        <p style={subtitleStyle}>Real-time forex rates and smart trading insights</p>
      </div>

      {/* Live Rates Dashboard */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Live Exchange Rates
        </h2>
        <div style={ratesGridStyle}>
          {forexRates.map((rate, index) => (
            <motion.div
              key={rate.pair}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={rateCardStyle(selectedPair === rate.pair)}
              onClick={() => setSelectedPair(rate.pair)}
              onMouseEnter={(e) => {
                if (selectedPair !== rate.pair) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedPair !== rate.pair) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <div style={rateHeaderStyle}>
                <div style={ratePairStyle}>
                  <span style={{ fontSize: '1.5rem' }}>{rate.flag}</span>
                  <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
                    {rate.pair}
                  </span>
                </div>
                <div style={liveIndicatorStyle}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    backgroundColor: '#16a34a', 
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span>Live</span>
                </div>
              </div>

              <div style={rateValueStyle}>₦{rate.buyRate.toLocaleString()}</div>
              
              <div style={changeStyle(rate.change24h)}>
                {rate.change24h > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span>{Math.abs(rate.change24h)}% (24h)</span>
              </div>

              <div style={{ marginTop: '16px', fontSize: '0.75rem', color: '#6b7280' }}>
                Sell: ₦{rate.sellRate.toLocaleString()} • Updated: {new Date(rate.lastUpdated).toLocaleTimeString()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rate Comparison Table */}
      <div style={comparisonTableStyle}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Rate Comparison Across Sources
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Source</th>
              <th style={thStyle}>USD/NGN</th>
              <th style={thStyle}>EUR/NGN</th>
              <th style={thStyle}>GBP/NGN</th>
              <th style={thStyle}>Spread vs Official</th>
              <th style={thStyle}>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {rateComparison.map((source, index) => (
              <tr key={index}>
                <td style={tdStyle}>{source.source}</td>
                <td style={source.source === 'Black Market' ? { ...tdStyle, ...bestRateStyle } : tdStyle}>
                  ₦{source.usdRate.toLocaleString()}
                </td>
                <td style={source.source === 'Black Market' ? { ...tdStyle, ...bestRateStyle } : tdStyle}>
                  ₦{source.eurRate.toLocaleString()}
                </td>
                <td style={source.source === 'Black Market' ? { ...tdStyle, ...bestRateStyle } : tdStyle}>
                  ₦{source.gbpRate.toLocaleString()}
                </td>
                <td style={tdStyle}>{source.spread}</td>
                <td style={tdStyle}>{source.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trend Analysis Chart */}
      {selectedRate && (
        <div style={chartCardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
              {selectedRate.pair} Trend (Last 7 Hours)
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['24H', '7D', '30D', '90D'].map(period => (
                <button
                  key={period}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    backgroundColor: period === '24H' ? '#22c55e' : '#f3f4f6',
                    color: period === '24H' ? 'white' : '#6b7280'
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`₦${value.toLocaleString()}`, 'Rate']}
                />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Alerts and Insights */}
      <div style={alertsGridStyle}>
        {/* Alert Manager */}
        <div style={alertCardStyle}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Rate Alerts
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' }}>
              Set New Alert
            </label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <select style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
                fontSize: '0.875rem'
              }}>
                <option>USD/NGN</option>
                <option>EUR/NGN</option>
                <option>GBP/NGN</option>
              </select>
              <input
                type="number"
                value={alertTarget}
                onChange={(e) => setAlertTarget(Number(e.target.value))}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontSize: '0.875rem'
                }}
                placeholder="Target rate"
              />
            </div>
            <Button variant="primary" size="small" style={{ width: '100%' }}>
              <Bell size={14} style={{ marginRight: '4px' }} />
              Set Alert
            </Button>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
              Active Alerts
            </h4>
            {myAlerts.map((alert, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                marginBottom: '8px'
              }}>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                    {alert.pair} {alert.type} ₦{alert.target.toLocaleString()}
                  </div>
                </div>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  backgroundColor: alert.status === 'triggered' ? '#fee2e2' : '#dcfce7',
                  color: alert.status === 'triggered' ? '#dc2626' : '#16a34a'
                }}>
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Insights */}
        <div style={alertCardStyle}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Smart Insights
          </h3>
          
          {insights.map((insight, index) => (
            <div key={index} style={insightCardStyle(insight.type)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Zap size={16} style={{ color: '#f59e0b' }} />
                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                  {insight.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', marginBottom: '8px' }}>
                {insight.content}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  Confidence: {insight.confidence}%
                </span>
                <Button variant="ghost" size="small">
                  🔊 Listen
                </Button>
              </div>
              <div style={confidenceBarStyle(insight.confidence)}>
                <div style={confidenceFillStyle(insight.confidence)}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}