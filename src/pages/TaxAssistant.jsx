import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, FileText, Download, Calendar, DollarSign } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'

export default function TaxAssistant() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000)
  const [expenses, setExpenses] = useState(200000)

  const calculateTax = () => {
    const profit = monthlyRevenue - expenses
    const vatRate = 0.075
    const incomeTaxRate = 0.30
    
    const vat = monthlyRevenue * vatRate
    const incomeTax = profit * incomeTaxRate
    
    return { vat, incomeTax, total: vat + incomeTax }
  }

  const tax = calculateTax()

  const deductions = [
    { name: 'Business Fuel', amount: 25000, eligible: true },
    { name: 'Staff Salaries', amount: 80000, eligible: true },
    { name: 'Equipment Purchase', amount: 150000, eligible: true },
    { name: 'Office Rent', amount: 50000, eligible: true }
  ]

  return (
    <div style={{ padding: '24px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
          Tax Assistant
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Simplify your taxes with AI-powered calculations
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
        <Card>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>This Month's Tax</h3>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc2626' }}>
              ₦{tax.total.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Tax Owed</div>
          </div>
          <div style={{ fontSize: '0.875rem', marginBottom: '8px' }}>
            VAT (7.5%): ₦{tax.vat.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
            Income Tax (30%): ₦{tax.incomeTax.toLocaleString()}
          </div>
          <Button variant="primary" style={{ width: '100%' }}>Pay Now</Button>
        </Card>

        <Card>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Year to Date</h3>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Tax Paid</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₦{(tax.total * 11).toLocaleString()}</div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Projected Annual</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>₦{(tax.total * 12).toLocaleString()}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Effective Rate</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#22c55e' }}>
              {((tax.total / monthlyRevenue) * 100).toFixed(1)}%
            </div>
          </div>
        </Card>
      </div>

      <Card style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Voice Tax Calculator</h3>
        <HybridInput 
          placeholder="Ask me anything about your taxes... e.g., 'How much tax I go pay this month?'"
          size="large"
        />
        <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Try:</span>
          {['Calculate my VAT', 'What deductions can I claim?', 'When is my next deadline?'].map((example, i) => (
            <button
              key={i}
              style={{
                fontSize: '0.75rem',
                backgroundColor: '#f3f4f6',
                color: '#6b7280',
                padding: '4px 8px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              "{example}"
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Deductions Finder</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
          {deductions.map((deduction, index) => (
            <div
              key={index}
              style={{
                padding: '12px',
                backgroundColor: deduction.eligible ? '#f0fdf4' : '#f9fafb',
                borderRadius: '8px',
                border: deduction.eligible ? '1px solid #bbf7d0' : '1px solid #e5e7eb'
              }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '4px' }}>
                {deduction.name}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', color: deduction.eligible ? '#16a34a' : '#6b7280' }}>
                ₦{deduction.amount.toLocaleString()} deductible
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#22c55e' }}>
            Total Deductions: ₦{deductions.reduce((sum, d) => sum + (d.eligible ? d.amount : 0), 0).toLocaleString()}
          </div>
        </div>
      </Card>
    </div>
  )
}