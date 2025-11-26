import { useState, useRef } from 'react'
import { Mic, MicOff, Send, X } from 'lucide-react'
import useStore from '../../store/useStore'

export default function HybridInput({ 
  placeholder = "Type or speak...", 
  onSubmit, 
  className = "",
  size = "default",
  style = {}
}) {
  const [text, setText] = useState('')
  const [isListening, setIsListening] = useState(false)
  const inputRef = useRef(null)
  const { isRecording, setRecording } = useStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() && onSubmit) {
      onSubmit(text.trim())
      setText('')
    }
  }

  const toggleRecording = () => {
    setIsListening(!isListening)
    setRecording(!isRecording)
    
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false)
        setRecording(false)
        setText("I wan check rice price for Kano")
      }, 2000)
    }
  }

  const clearText = () => {
    setText('')
    inputRef.current?.focus()
  }

  const sizeStyles = {
    small: { padding: '8px 12px', fontSize: '14px' },
    default: { padding: '12px 16px', fontSize: '16px' },
    large: { padding: '16px 24px', fontSize: '18px' }
  }

  const containerStyle = {
    position: 'relative',
    ...style
  }

  const inputStyle = {
    width: '100%',
    ...sizeStyles[size],
    paddingRight: '80px',
    borderRadius: '8px',
    border: isListening ? '1px solid #ef4444' : '1px solid #e5e7eb',
    backgroundColor: isListening ? '#fef2f2' : 'white',
    color: '#111827',
    outline: 'none',
    fontFamily: 'Inter, system-ui, sans-serif'
  }

  const clearButtonStyle = {
    position: 'absolute',
    right: '64px',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '4px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#9ca3af',
    cursor: 'pointer'
  }

  const actionButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '8px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const sendButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#22c55e',
    color: 'white'
  }

  const micButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: isListening ? '#ef4444' : '#f3f4f6',
    color: isListening ? 'white' : '#6b7280'
  }

  const recordingIndicatorStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '8px',
    padding: '12px',
    backgroundColor: '#fef2f2',
    border: '1px solid #fca5a5',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#dc2626'
  }

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <div style={{ position: 'relative' }}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          style={inputStyle}
          disabled={isListening}
          onFocus={(e) => {
            e.target.style.borderColor = '#22c55e'
            e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = isListening ? '#ef4444' : '#e5e7eb'
            e.target.style.boxShadow = 'none'
          }}
        />
        
        {text && !isListening && (
          <button
            type="button"
            onClick={clearText}
            style={clearButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6'
              e.target.style.color = '#6b7280'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = '#9ca3af'
            }}
          >
            <X size={16} />
          </button>
        )}

        <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
          {text && !isListening ? (
            <button
              type="submit"
              style={sendButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
            >
              <Send size={18} />
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleRecording}
              style={micButtonStyle}
              onMouseEnter={(e) => {
                if (!isListening) {
                  e.target.style.backgroundColor = '#22c55e'
                  e.target.style.color = 'white'
                }
              }}
              onMouseLeave={(e) => {
                if (!isListening) {
                  e.target.style.backgroundColor = '#f3f4f6'
                  e.target.style.color = '#6b7280'
                }
              }}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
          )}
        </div>
      </div>

      {isListening && (
        <div style={recordingIndicatorStyle}>
          <div style={{ 
            width: '8px', 
            height: '8px', 
            backgroundColor: '#ef4444', 
            borderRadius: '50%'
          }}></div>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Listening...</span>
        </div>
      )}
    </form>
  )
}