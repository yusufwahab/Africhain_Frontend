import { useState, useRef, useEffect } from 'react'
import { Send, Mic, MicOff, Play, ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import useStore from '../store/useStore'
import HybridInput from '../components/shared/HybridInput'

export default function VoiceChat() {
  const { t } = useTranslation()
  const { messages, addMessage, user } = useStore()
  const [showScrollButton, setShowScrollButton] = useState(false)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
        setShowScrollButton(!isNearBottom)
      }
    }

    const container = chatContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSendMessage = (content) => {
    addMessage({
      type: 'user',
      content,
      timestamp: new Date().toISOString()
    })

    setTimeout(() => {
      const responses = [
        "I understand you want to check prices. Let me help you with that!",
        "That's a great question about your business. Here's what I think...",
        "I can help you with that task. Let me break it down for you.",
        "Based on current market data, here's my recommendation..."
      ]
      
      addMessage({
        type: 'ai',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toISOString(),
        hasAudio: true
      })
    }, 1000 + Math.random() * 2000)
  }

  const examplePrompts = [
    "How much is rice in Kano?",
    "I sold 3 crates of eggs today",
    "Remind me to restock tomorrow",
    "Show me this week's profit"
  ]

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f0fdf4'
  }

  const headerStyle = {
    padding: '24px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '8px'
  }

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#6b7280'
  }

  const chatAreaStyle = {
    flex: 1,
    overflowY: 'auto',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }

  const emptyStateStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }

  const emptyTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '16px'
  }

  const headerTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '8px'
  }

  const emptySubtitleStyle = {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '32px'
  }

  const headerSubtitleStyle = {
    fontSize: '1rem',
    color: '#6b7280'
  }

  const promptsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '12px',
    width: '100%'
  }

  const promptButtonStyle = {
    padding: '16px',
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: '#374151'
  }

  const messagesContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }

  const messageRowStyle = (isUser) => ({
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start'
  })

  const messageStyle = (isUser) => ({
    maxWidth: '70%',
    padding: '12px 16px',
    borderRadius: '16px',
    backgroundColor: isUser ? '#22c55e' : 'white',
    color: isUser ? 'white' : '#111827',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: isUser ? 'none' : '1px solid #e5e7eb'
  })

  const aiHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  }

  const aiAvatarStyle = {
    width: '24px',
    height: '24px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white'
  }

  const timestampStyle = (isUser) => ({
    fontSize: '12px',
    marginTop: '8px',
    color: isUser ? 'rgba(255, 255, 255, 0.7)' : '#9ca3af'
  })

  const audioButtonStyle = {
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#6b7280',
    cursor: 'pointer'
  }

  const typingIndicatorStyle = {
    display: 'flex',
    justifyContent: 'flex-start'
  }

  const typingBubbleStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '12px 16px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const typingDotStyle = (delay) => ({
    width: '8px',
    height: '8px',
    backgroundColor: '#9ca3af',
    borderRadius: '50%',
    animation: `bounce 1.4s infinite ${delay}s`
  })

  const scrollButtonStyle = {
    position: 'fixed',
    bottom: '120px',
    right: '24px',
    padding: '12px',
    backgroundColor: '#22c55e',
    color: 'white',
    borderRadius: '50%',
    border: 'none',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    cursor: 'pointer',
    zIndex: 10
  }

  const inputAreaStyle = {
    backgroundColor: '#15803d',
    borderTop: '1px solid #e5e7eb',
    padding: '24px',
    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)'
  }

  const inputContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={headerTitleStyle}>Voice Chat Assistant</h1>
        <p style={headerSubtitleStyle}>Chat with AI in your local language</p>
      </div>

      <div ref={chatContainerRef} style={chatAreaStyle}>
        {messages.length === 0 ? (
          <div style={emptyStateStyle}>
            <div style={{ fontSize: '4rem', marginBottom: '24px' }}>💬</div>
            <h2 style={emptyTitleStyle}>Start a conversation...</h2>
            <p style={emptySubtitleStyle}>
              Ask me anything about your business, prices, or get help with tasks
            </p>
            
            <div style={promptsGridStyle}>
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(prompt)}
                  style={promptButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0fdf4'
                    e.target.style.borderColor = '#bbf7d0'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white'
                    e.target.style.borderColor = '#e5e7eb'
                  }}
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={messagesContainerStyle}>
            {messages.map((message, index) => (
              <div key={message.id || index} style={messageRowStyle(message.type === 'user')}>
                <div style={messageStyle(message.type === 'user')}>
                  {message.type === 'ai' && (
                    <div style={aiHeaderStyle}>
                      <div style={aiAvatarStyle}>CF</div>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: '#6b7280' }}>
                        ChainForge AI
                      </span>
                    </div>
                  )}
                  
                  <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    {message.content}
                  </p>
                  
                  {message.hasAudio && (
                    <div style={audioButtonStyle}>
                      <Play size={14} />
                      <span>Play audio response</span>
                    </div>
                  )}
                  
                  <div style={timestampStyle(message.type === 'user')}>
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {messages.length > 0 && messages[messages.length - 1]?.type === 'user' && (
              <div style={typingIndicatorStyle}>
                <div style={typingBubbleStyle}>
                  <div style={aiAvatarStyle}>CF</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={typingDotStyle(0)}></div>
                    <div style={typingDotStyle(0.2)}></div>
                    <div style={typingDotStyle(0.4)}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {showScrollButton && (
        <button onClick={scrollToBottom} style={scrollButtonStyle}>
          <ArrowDown size={20} />
        </button>
      )}

      <div style={inputAreaStyle}>
        <div style={inputContainerStyle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '4px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <HybridInput
              placeholder="Type your message or use voice..."
              onSubmit={handleSendMessage}
              size="large"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}