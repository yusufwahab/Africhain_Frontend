import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Sun, CloudRain, TrendingUp, TrendingDown, Bell, MapPin } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function WeatherTrading() {
  const [selectedCity, setSelectedCity] = useState('Lagos')

  const weatherData = {
    Lagos: { temp: 28, condition: 'Sunny', humidity: 75, rainfall: 0 },
    Kano: { temp: 35, condition: 'Hot', humidity: 45, rainfall: 0 },
    Abuja: { temp: 26, condition: 'Cloudy', humidity: 80, rainfall: 5 }
  }

  const impacts = [
    {
      product: 'Tomatoes',
      location: 'Kaduna',
      impact: 'Heavy rain expected',
      priceChange: 15,
      trend: 'up',
      confidence: 85,
      recommendation: 'Buy now before price rises'
    },
    {
      product: 'Yam',
      location: 'Benue',
      impact: 'Dry season starting',
      priceChange: -8,
      trend: 'down',
      confidence: 72,
      recommendation: 'Wait for better prices'
    },
    {
      product: 'Onions',
      location: 'Sokoto',
      impact: 'Perfect weather',
      priceChange: 5,
      trend: 'up',
      confidence: 90,
      recommendation: 'Stock up now'
    }
  ]

  const alerts = [
    { message: 'Buy yam now before dry season', type: 'opportunity', urgency: 'high' },
    { message: 'Postpone tomato purchase - prices will drop', type: 'warning', urgency: 'medium' },
    { message: 'Perfect weather for onion harvest', type: 'info', urgency: 'low' }
  ]

  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'left', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#15803d', marginBottom: '8px' }}>
          Weather-Smart Trading
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Predict market changes with weather intelligence
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {Object.entries(weatherData).map(([city, data]) => (
          <Card
            key={city}
            style={{
              cursor: 'pointer',
              border: selectedCity === city ? '2px solid #15803d' : '1px solid #f3f4f6'
            }}
            onClick={() => setSelectedCity(city)}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                {data.condition === 'Sunny' ? '☀️' : data.condition === 'Cloudy' ? '☁️' : '🌧️'}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '4px' }}>{city}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '4px' }}>{data.temp}°C</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{data.condition}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <Card>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Agriculture Impact Analysis</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {impacts.map((impact, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>🍅 {impact.product}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {impact.trend === 'up' ? <TrendingUp size={16} style={{ color: '#dc2626' }} /> : <TrendingDown size={16} style={{ color: '#16a34a' }} />}
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: impact.trend === 'up' ? '#dc2626' : '#16a34a' }}>
                      {impact.priceChange > 0 ? '+' : ''}{impact.priceChange}%
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>
                  📍 {impact.location} • {impact.impact}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#22c55e', fontWeight: '500' }}>
                  💡 {impact.recommendation}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Smart Alerts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {alerts.map((alert, index) => (
              <div
                key={index}
                style={{
                  padding: '12px',
                  backgroundColor: alert.type === 'opportunity' ? '#f0fdf4' : alert.type === 'warning' ? '#fef3c7' : '#f0f9ff',
                  borderRadius: '8px',
                  border: `1px solid ${alert.type === 'opportunity' ? '#bbf7d0' : alert.type === 'warning' ? '#fde68a' : '#bfdbfe'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bell size={16} style={{ color: alert.type === 'opportunity' ? '#16a34a' : alert.type === 'warning' ? '#d97706' : '#2563eb' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{alert.message}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" style={{ width: '100%', marginTop: '16px' }}>
            <Bell size={16} style={{ marginRight: '8px' }} />
            Customize Alerts
          </Button>
        </Card>
      </div>

      <Card>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>5-Day Forecast Impact</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'].map((day, index) => (
            <div
              key={day}
              style={{
                textAlign: 'center',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '4px' }}>{day}</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>
                {index % 2 === 0 ? '☀️' : '🌧️'}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                {28 + index}°C
              </div>
              <div style={{ fontSize: '0.75rem', color: index % 2 === 0 ? '#16a34a' : '#dc2626', marginTop: '4px' }}>
                {index % 2 === 0 ? 'Good for trade' : 'Price volatility'}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}