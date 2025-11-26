export default function Card({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'default',
  style = {},
  ...props 
}) {
  const paddingValues = {
    none: '0',
    small: '16px',
    default: '24px',
    large: '32px'
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb',
    padding: paddingValues[padding],
    ...style
  }

  return (
    <div
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  )
}