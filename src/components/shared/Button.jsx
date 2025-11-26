import { Loader2 } from 'lucide-react'

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  style = {},
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '8px',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    outline: 'none',
    fontFamily: 'Inter, system-ui, sans-serif'
  }
  
  const variants = {
    primary: {
      backgroundColor: '#22c55e',
      color: 'white'
    },
    secondary: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      border: '1px solid #e5e7eb'
    },
    outline: {
      border: '1px solid #22c55e',
      color: '#16a34a',
      backgroundColor: 'white'
    },
    ghost: {
      color: '#6b7280',
      backgroundColor: 'transparent'
    }
  }
  
  const sizes = {
    small: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    default: {
      padding: '12px 24px',
      fontSize: '16px'
    },
    large: {
      padding: '16px 32px',
      fontSize: '18px'
    }
  }

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...style
  }

  const handleMouseEnter = (e) => {
    if (disabled || loading) return
    
    switch (variant) {
      case 'primary':
        e.target.style.backgroundColor = '#16a34a'
        break
      case 'secondary':
        e.target.style.backgroundColor = '#e5e7eb'
        break
      case 'outline':
        e.target.style.backgroundColor = '#f0fdf4'
        break
      case 'ghost':
        e.target.style.backgroundColor = '#f9fafb'
        break
    }
  }

  const handleMouseLeave = (e) => {
    if (disabled || loading) return
    
    switch (variant) {
      case 'primary':
        e.target.style.backgroundColor = '#22c55e'
        break
      case 'secondary':
        e.target.style.backgroundColor = '#f3f4f6'
        break
      case 'outline':
        e.target.style.backgroundColor = 'white'
        break
      case 'ghost':
        e.target.style.backgroundColor = 'transparent'
        break
    }
  }

  return (
    <button
      style={buttonStyle}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {loading && <Loader2 style={{ width: '16px', height: '16px', marginRight: '8px' }} className="animate-spin" />}
      {children}
    </button>
  )
}