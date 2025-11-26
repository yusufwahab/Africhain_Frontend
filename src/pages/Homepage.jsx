import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Star, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/shared/Button'

export default function Homepage() {
  const navigate = useNavigate()

  const stats = [
    { number: '12,000+', label: 'Active Traders' },
    { number: '₦2.3B', label: 'Total Savings' },
    { number: '247', label: 'Cities Covered' },
    { number: '94%', label: 'Success Rate' }
  ]

  const features = [
    { title: 'Voice AI Assistant', desc: 'Communicate in your local language with advanced AI' },
    { title: 'Price Intelligence', desc: 'Real-time market prices across Nigeria' },
    { title: 'Trade Credit Network', desc: 'Access funding from verified peers' },
    { title: 'Group Buying Power', desc: 'Save money through collective purchasing' },
    { title: 'Smart Analytics', desc: 'Data-driven insights for better decisions' },
    { title: 'Mobile Optimized', desc: 'Works perfectly on any device' }
  ]

  const testimonials = [
    { name: 'Amina Hassan', role: 'Rice Trader, Kano', text: 'ChainForge helped me increase my profits by 40% in just 3 months.' },
    { name: 'Chidi Okafor', role: 'Electronics Dealer, Lagos', text: 'The price alerts saved me thousands on my last bulk purchase.' },
    { name: 'Fatima Bello', role: 'Food Supplier, Abuja', text: 'Finally, a platform that understands African traders.' }
  ]

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'Inter, system-ui, sans-serif'
  }

  const headerStyle = {
    padding: '16px 24px',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 50,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  }

  const headerContentStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const logoIconStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#15803d',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white',
    fontWeight: 'bold'
  }

  const logoTextStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827'
  }

  const navButtonsStyle = {
    display: 'flex',
    gap: '12px'
  }

  const heroStyle = {
    padding: '120px 24px',
    backgroundColor: '#15803d',
    color: 'white',
    textAlign: 'center'
  }

  const heroContentStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  }

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: '1.1'
  }

  const heroSubtitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '40px',
    opacity: 0.95,
    lineHeight: '1.6'
  }

  const statsStyle = {
    padding: '80px 24px',
    backgroundColor: '#f9fafb'
  }

  const statsGridStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '48px',
    textAlign: 'center'
  }

  const statNumberStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '8px'
  }

  const statLabelStyle = {
    fontSize: '1rem',
    color: '#6b7280',
    fontWeight: '500'
  }

  const sectionStyle = {
    padding: '100px 24px'
  }

  const sectionAltStyle = {
    ...sectionStyle,
    backgroundColor: '#f9fafb'
  }

  const sectionHeaderStyle = {
    textAlign: 'center',
    marginBottom: '80px',
    maxWidth: '600px',
    margin: '0 auto 80px'
  }

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px'
  }

  const sectionSubtitleStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    lineHeight: '1.6'
  }

  const featuresGridStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px'
  }

  const featureCardStyle = {
    padding: '40px 32px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb',
    textAlign: 'center'
  }

  const featureIconStyle = {
    width: '64px',
    height: '64px',
    backgroundColor: '#dcfce7',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px'
  }

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px'
  }

  const featureDescStyle = {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: '1.6'
  }

  const testimonialsGridStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px'
  }

  const testimonialCardStyle = {
    padding: '32px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

  const testimonialTextStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    marginBottom: '24px',
    lineHeight: '1.6',
    fontStyle: 'italic'
  }

  const testimonialAuthorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }

  const testimonialAvatarStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#15803d',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.125rem'
  }

  const testimonialNameStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px'
  }

  const testimonialRoleStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const ctaStyle = {
    padding: '100px 24px',
    background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
    color: 'white',
    textAlign: 'center'
  }

  const ctaContentStyle = {
    maxWidth: '600px',
    margin: '0 auto'
  }

  const ctaTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '16px'
  }

  const ctaSubtitleStyle = {
    fontSize: '1.125rem',
    marginBottom: '40px',
    opacity: 0.9,
    lineHeight: '1.6'
  }

  const footerStyle = {
    padding: '60px 24px',
    backgroundColor: '#111827',
    color: 'white'
  }

  const footerContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '48px'
  }

  const footerSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }

  const footerTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '8px'
  }

  const footerLinkStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    cursor: 'pointer'
  }

  const footerBottomStyle = {
    marginTop: '48px',
    paddingTop: '24px',
    borderTop: '1px solid #374151',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#9ca3af'
  }

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <div style={logoStyle}>
            <div style={logoIconStyle}>⛓️</div>
            <span style={logoTextStyle}>ChainForge Africa</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span style={{ fontSize: '0.875rem', color: '#6b7280', cursor: 'pointer' }}>Features</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280', cursor: 'pointer' }}>Pricing</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280', cursor: 'pointer' }}>About</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280', cursor: 'pointer' }}>Contact</span>
          </nav>
          <div style={navButtonsStyle}>
            <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
            <Button variant="primary" onClick={() => navigate('/signup')}>Get Started</Button>
          </div>
        </div>
      </header>

      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>
            Empowering African SME Traders
          </h1>
          <p style={heroSubtitleStyle}>
            The all-in-one platform that helps small and medium traders across Africa grow their businesses with AI-powered tools, market intelligence, and community support.
          </p>
          <Button 
            variant="outline" 
            size="large"
            onClick={() => navigate('/signup')}
            style={{ backgroundColor: 'white', color: '#15803d', fontSize: '1.125rem', padding: '16px 32px' }}
          >
            Get Started Free <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={statNumberStyle}>{stat.number}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>Powerful Features</h2>
          <p style={sectionSubtitleStyle}>
            Everything you need to grow your trading business in one integrated platform.
          </p>
        </div>
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyle}>
              <div style={featureIconStyle}>
                <TrendingUp size={32} style={{ color: '#15803d' }} />
              </div>
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={sectionAltStyle}>
        <div style={sectionHeaderStyle}>
          <h2 style={sectionTitleStyle}>Trusted by Thousands</h2>
          <p style={sectionSubtitleStyle}>
            See what successful traders are saying about ChainForge Africa.
          </p>
        </div>
        <div style={testimonialsGridStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={testimonialCardStyle}>
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                ))}
              </div>
              <p style={testimonialTextStyle}>"{testimonial.text}"</p>
              <div style={testimonialAuthorStyle}>
                <div style={testimonialAvatarStyle}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div style={testimonialNameStyle}>{testimonial.name}</div>
                  <div style={testimonialRoleStyle}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={ctaStyle}>
        <div style={ctaContentStyle}>
          <h2 style={ctaTitleStyle}>Ready to Transform Your Business?</h2>
          <p style={ctaSubtitleStyle}>
            Join thousands of successful traders who are already using ChainForge Africa to grow their businesses.
          </p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => navigate('/signup')}
            style={{ fontSize: '1.125rem', padding: '16px 32px' }}
          >
            Start Your Free Trial <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={footerSectionStyle}>
            <div style={logoStyle}>
              <div style={{ ...logoIconStyle, backgroundColor: '#15803d' }}>⛓️</div>
              <span style={{ ...logoTextStyle, color: 'white' }}>ChainForge Africa</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.6' }}>
              Empowering traders across Africa with innovative technology and community support.
            </p>
          </div>
          
          <div style={footerSectionStyle}>
            <h4 style={footerTitleStyle}>Platform</h4>
            <span style={footerLinkStyle}>Features</span>
            <span style={footerLinkStyle}>Pricing</span>
            <span style={footerLinkStyle}>API</span>
            <span style={footerLinkStyle}>Documentation</span>
          </div>
          
          <div style={footerSectionStyle}>
            <h4 style={footerTitleStyle}>Company</h4>
            <span style={footerLinkStyle}>About Us</span>
            <span style={footerLinkStyle}>Careers</span>
            <span style={footerLinkStyle}>Blog</span>
            <span style={footerLinkStyle}>Contact</span>
          </div>
          
          <div style={footerSectionStyle}>
            <h4 style={footerTitleStyle}>Support</h4>
            <span style={footerLinkStyle}>Help Center</span>
            <span style={footerLinkStyle}>Community</span>
            <span style={footerLinkStyle}>Status</span>
            <span style={footerLinkStyle}>Privacy Policy</span>
          </div>
        </div>
        
        <div style={footerBottomStyle}>
          © 2024 ChainForge Africa. All rights reserved.
        </div>
      </footer>
    </div>
  )
}