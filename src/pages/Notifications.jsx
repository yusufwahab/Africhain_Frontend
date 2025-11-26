import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Check, X, AlertCircle, TrendingUp, Users, DollarSign } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function Notifications() {
  const [filter, setFilter] = useState('all')

  const notifications = [
    {
      id: 1,
      type: 'price_alert',
      title: 'Price Alert: Rice dropped to ₦39k',
      message: 'Rice price in Kano market has dropped by 8% to ₦39,000 per 50kg bag',
      time: '2 hours ago',
      read: false,
      icon: TrendingUp,
      color: '#22c55e'
    },
    {
      id: 2,
      type: 'group_buy',
      title: 'Group Buy Almost Full',
      message: 'Tomato group buy is 95% full. Only 2 spots remaining!',
      time: '4 hours ago',
      read: false,
      icon: Users,
      color: '#f59e0b'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: 'You received ₦50,000 from Customer #4523',
      time: '1 day ago',
      read: true,
      icon: DollarSign,
      color: '#22c55e'
    },
    {
      id: 4,
      type: 'system',
      title: 'New Feature Available',
      message: 'Weather Trading is now live! Get market predictions based on weather data.',
      time: '2 days ago',
      read: true,
      icon: AlertCircle,
      color: '#3b82f6'
    },
    {
      id: 5,
      type: 'price_alert',
      title: 'Yam Price Increase Alert',
      message: 'Yam prices expected to rise 15% next week due to seasonal demand',
      time: '3 days ago',
      read: true,
      icon: TrendingUp,
      color: '#dc2626'
    }
  ]

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true
    if (filter === 'unread') return !notif.read
    return notif.type === filter
  })

  const markAsRead = (id) => {
    // Implementation would update the notification status
    console.log('Mark as read:', id)
  }

  const markAllAsRead = () => {
    // Implementation would mark all as read
    console.log('Mark all as read')
  }

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
          Notifications
        </h1>
        <p style={{ color: '#6b7280' }}>
          Stay updated with your business activities and market changes
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {[
          { key: 'all', label: 'All' },
          { key: 'unread', label: 'Unread' },
          { key: 'price_alert', label: 'Price Alerts' },
          { key: 'group_buy', label: 'Group Buys' },
          { key: 'payment', label: 'Payments' },
          { key: 'system', label: 'System' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              backgroundColor: filter === tab.key ? '#22c55e' : '#f3f4f6',
              color: filter === tab.key ? 'white' : '#6b7280',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {filteredNotifications.filter(n => !n.read).length} unread notifications
        </span>
        <Button variant="outline" size="small" onClick={markAllAsRead}>
          Mark All as Read
        </Button>
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredNotifications.length === 0 ? (
          <Card style={{ textAlign: 'center', padding: '40px' }}>
            <Bell size={48} style={{ color: '#9ca3af', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
              No notifications
            </h3>
            <p style={{ color: '#6b7280' }}>
              You're all caught up! New notifications will appear here.
            </p>
          </Card>
        ) : (
          filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                style={{
                  padding: '20px',
                  backgroundColor: notification.read ? 'white' : '#f0fdf4',
                  border: notification.read ? '1px solid #f3f4f6' : '1px solid #bbf7d0',
                  cursor: 'pointer'
                }}
                hover={true}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: `${notification.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <notification.icon size={20} style={{ color: notification.color }} />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: notification.read ? '500' : '600',
                        color: '#111827',
                        marginBottom: '4px'
                      }}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#22c55e',
                          borderRadius: '50%',
                          flexShrink: 0,
                          marginLeft: '12px',
                          marginTop: '6px'
                        }} />
                      )}
                    </div>
                    
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      lineHeight: 1.5,
                      marginBottom: '8px'
                    }}>
                      {notification.message}
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                        {notification.time}
                      </span>
                      
                      {!notification.read && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            markAsRead(notification.id)
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: '#f3f4f6',
                            color: '#6b7280',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#22c55e'
                            e.target.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#f3f4f6'
                            e.target.style.color = '#6b7280'
                          }}
                        >
                          <Check size={12} />
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </div>

      {/* Notification Settings */}
      <Card style={{ marginTop: '32px', padding: '24px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
          Notification Settings
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { label: 'Price Alerts', desc: 'Get notified when prices change significantly' },
            { label: 'Group Buy Updates', desc: 'Updates on group buying activities' },
            { label: 'Payment Notifications', desc: 'Receive and send payment confirmations' },
            { label: 'System Updates', desc: 'New features and system announcements' }
          ].map((setting, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                  {setting.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  {setting.desc}
                </div>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                <input
                  type="checkbox"
                  defaultChecked
                  style={{
                    opacity: 0,
                    width: 0,
                    height: 0
                  }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#22c55e',
                  borderRadius: '24px',
                  transition: '0.2s'
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '',
                    height: '18px',
                    width: '18px',
                    left: '3px',
                    bottom: '3px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.2s'
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}