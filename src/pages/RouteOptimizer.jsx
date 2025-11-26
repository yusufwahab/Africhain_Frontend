import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Fuel, Clock, AlertTriangle, DollarSign } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'

export default function RouteOptimizer() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const routes = [
    {
      id: 1,
      name: 'Lagos-Kano via Abuja',
      distance: 1200,
      time: '14 hours',
      fuelCost: 45000,
      tollCost: 8000,
      totalCost: 65000,
      roadQuality: 85,
      securityLevel: 'good',
      weather: 'clear'
    },
    {
      id: 2,
      name: 'Lagos-Kano via Ilorin',
      distance: 1150,
      time: '13.5 hours',
      fuelCost: 42000,
      tollCost: 6000,
      totalCost: 58000,
      roadQuality: 75,
      securityLevel: 'fair',
      weather: 'clear'
    }
  ]

  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
          Smart Route Optimizer
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Find the best routes and calculate transport costs
        </p>
      </div>

      <Card style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Plan Your Route</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '16px' }}>
          <HybridInput placeholder="From (e.g., Lagos)" onSubmit={setOrigin} />
          <HybridInput placeholder="To (e.g., Kano)" onSubmit={setDestination} />
        </div>
        <Button variant="primary" style={{ width: '100%' }}>
          <Navigation size={16} style={{ marginRight: '8px' }} />
          Find Best Routes
        </Button>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {routes.map((route, index) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '12px' }}>{route.name}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '16px' }}>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{route.distance}km</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Distance</div>
                </div>
                <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{route.time}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Est. Time</div>
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '8px' }}>Cost Breakdown:</div>
                <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}>Fuel: ₦{route.fuelCost.toLocaleString()}</div>
                <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}>Tolls: ₦{route.tollCost.toLocaleString()}</div>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#22c55e' }}>Total: ₦{route.totalCost.toLocaleString()}</div>
              </div>
              <Button variant="primary" style={{ width: '100%' }}>Select Route</Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}