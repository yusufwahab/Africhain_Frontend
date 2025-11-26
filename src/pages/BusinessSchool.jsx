import { useState } from 'react'
import { Play, Pause, SkipForward, SkipBack, Volume2, Award, Clock, Star, CheckCircle, Lock } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function BusinessSchool() {
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [selectedPath, setSelectedPath] = useState('basics')

  const learningPaths = {
    basics: {
      name: 'Business Basics',
      description: 'Foundation skills every trader needs',
      color: '#22c55e',
      progress: 75,
      lessons: 12,
      completed: 9
    },
    pricing: {
      name: 'Pricing Strategies',
      description: 'Master the art of competitive pricing',
      color: '#22c55e',
      progress: 45,
      lessons: 8,
      completed: 4
    },
    negotiation: {
      name: 'Negotiation Skills',
      description: 'Win-win deals every time',
      color: '#22c55e',
      progress: 20,
      lessons: 10,
      completed: 2
    },
    inventory: {
      name: 'Stock Management',
      description: 'Optimize your inventory flow',
      color: '#22c55e',
      progress: 60,
      lessons: 6,
      completed: 4
    },
    finance: {
      name: 'Financial Planning',
      description: 'Grow your wealth systematically',
      color: '#22c55e',
      progress: 30,
      lessons: 15,
      completed: 5
    }
  }

  const todaysLesson = {
    id: 'profit-margin',
    title: 'How to Calculate Your Profit Margin',
    description: 'Learn the essential skill of calculating and optimizing your profit margins for sustainable business growth.',
    duration: 180,
    difficulty: 'beginner',
    category: 'Business Basics',
    instructor: 'Prof. Adebayo',
    rating: 4.8,
    completions: 2340
  }

  const lessons = [
    {
      id: 'business-plan',
      title: 'Creating Your First Business Plan',
      duration: 240,
      difficulty: 'beginner',
      category: 'Business Basics',
      completed: true,
      rating: 4.9
    },
    {
      id: 'customer-service',
      title: 'Excellent Customer Service',
      duration: 180,
      difficulty: 'beginner',
      category: 'Business Basics',
      completed: true,
      rating: 4.7
    },
    {
      id: 'inventory-basics',
      title: 'Stock Management Fundamentals',
      duration: 300,
      difficulty: 'intermediate',
      category: 'Stock Management',
      completed: false,
      rating: 4.8
    },
    {
      id: 'negotiation-101',
      title: 'Negotiation Basics for Traders',
      duration: 220,
      difficulty: 'beginner',
      category: 'Negotiation Skills',
      completed: false,
      rating: 4.6
    },
    {
      id: 'pricing-psychology',
      title: 'Psychology of Pricing',
      duration: 280,
      difficulty: 'advanced',
      category: 'Pricing Strategies',
      completed: false,
      rating: 4.9
    }
  ]

  const certificates = [
    {
      id: 'basic-trader',
      name: 'Basic Trader Certification',
      description: 'Complete all Business Basics lessons',
      progress: 75,
      earned: false,
      requirements: 'Complete 12 lessons in Business Basics'
    },
    {
      id: 'price-master',
      name: 'Pricing Master',
      description: 'Master pricing strategies',
      progress: 45,
      earned: false,
      requirements: 'Complete 8 lessons in Pricing Strategies'
    },
    {
      id: 'negotiation-expert',
      name: 'Negotiation Expert',
      description: 'Become a negotiation pro',
      progress: 20,
      earned: false,
      requirements: 'Complete 10 lessons in Negotiation Skills'
    }
  ]

  const myProgress = {
    totalLessons: 51,
    completedLessons: 20,
    totalTime: 3600,
    streak: 7,
    certificates: 1,
    currentLevel: 'Intermediate Trader'
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return { bg: '#dcfce7', text: '#16a34a' }
      case 'intermediate': return { bg: '#fef3c7', text: '#d97706' }
      case 'advanced': return { bg: '#fee2e2', text: '#dc2626' }
      default: return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  const containerStyle = {
    padding: '24px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }

  const headerStyle = {
    textAlign: 'center'
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

  const todaysLessonStyle = {
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: '32px'
  }

  const playerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '24px',
    marginTop: '24px'
  }

  const controlsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '16px'
  }

  const controlButtonStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const playButtonStyle = {
    ...controlButtonStyle,
    width: '64px',
    height: '64px',
    backgroundColor: 'white',
    color: '#22c55e'
  }

  const progressBarStyle = {
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '2px',
    overflow: 'hidden',
    marginBottom: '8px'
  }

  const progressFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '2px'
  })

  const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '24px'
  }

  const pathsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  }

  const pathCardStyle = (isSelected, color) => ({
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: isSelected 
      ? `0 8px 25px -5px ${color}40` 
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: isSelected ? `2px solid ${color}` : '1px solid #e5e7eb',
    cursor: 'pointer'
  })

  const lessonsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px'
  }

  const lessonCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

  const progressDashboardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  }

  const progressCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Voice Business School</h1>
        <p style={subtitleStyle}>Learn, grow, and master your trade with bite-sized lessons</p>
      </div>

      <div style={todaysLessonStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ fontSize: '3rem' }}>📚</div>
          <div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '4px' }}>
              📅 Today's Lesson
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '8px' }}>
              {todaysLesson.title}
            </h2>
            <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '8px' }}>
              {todaysLesson.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.875rem', opacity: 0.9 }}>
              <span>⏱️ {formatTime(todaysLesson.duration)}</span>
              <span>📊 {todaysLesson.difficulty}</span>
              <span>⭐ {todaysLesson.rating}</span>
              <span>👥 {todaysLesson.completions.toLocaleString()} completed</span>
            </div>
          </div>
        </div>

        <div style={playerStyle}>
          <div style={controlsStyle}>
            <button style={controlButtonStyle}>
              <SkipBack size={20} />
            </button>
            <button 
              style={playButtonStyle}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button style={controlButtonStyle}>
              <SkipForward size={20} />
            </button>
            <button style={controlButtonStyle}>
              <Volume2 size={20} />
            </button>
          </div>
          
          <div style={progressBarStyle}>
            <div style={progressFillStyle((currentTime / todaysLesson.duration) * 100)}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', opacity: 0.9 }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(todaysLesson.duration)}</span>
          </div>
        </div>

        <Button variant="outline" style={{ marginTop: '16px', backgroundColor: 'white', color: '#22c55e' }}>
          📝 View Transcript & Notes
        </Button>
      </div>

      <div>
        <h3 style={sectionTitleStyle}>Learning Paths</h3>
        
        <div style={pathsGridStyle}>
          {Object.entries(learningPaths).map(([key, path]) => (
            <div
              key={key}
              style={pathCardStyle(selectedPath === key, path.color)}
              onClick={() => setSelectedPath(key)}
            >
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                  {path.name}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {path.description}
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Progress</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                    {path.completed}/{path.lessons} lessons
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${path.progress}%`,
                    height: '100%',
                    backgroundColor: path.color,
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>
              
              <div style={{ fontSize: '0.875rem', color: path.color, fontWeight: '600' }}>
                {path.progress}% Complete
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={sectionTitleStyle}>Lesson Library</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(filter => (
              <button
                key={filter}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  backgroundColor: filter === 'All' ? '#22c55e' : '#f3f4f6',
                  color: filter === 'All' ? 'white' : '#6b7280'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div style={lessonsGridStyle}>
          {lessons.map((lesson, index) => (
            <div key={lesson.id} style={lessonCardStyle}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem' }}>
                  {lesson.completed ? '✅' : '📚'}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                    {lesson.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: '#6b7280', marginBottom: '8px' }}>
                    <span>⏱️ {formatTime(lesson.duration)}</span>
                    <span style={{
                      padding: '2px 6px',
                      borderRadius: '4px',
                      ...getDifficultyColor(lesson.difficulty)
                    }}>
                      {lesson.difficulty}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={10} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                      <span>{lesson.rating}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '12px' }}>
                    {lesson.category}
                  </div>
                </div>
                {lesson.completed ? (
                  <CheckCircle size={20} style={{ color: '#16a34a' }} />
                ) : (
                  <Lock size={20} style={{ color: '#9ca3af' }} />
                )}
              </div>
              
              <Button 
                variant={lesson.completed ? 'outline' : 'primary'} 
                size="small" 
                style={{ width: '100%' }}
              >
                {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div style={progressDashboardStyle}>
        <div style={progressCardStyle}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            My Progress
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Lessons Completed</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                {myProgress.completedLessons}/{myProgress.totalLessons}
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Learning Streak</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                🔥 {myProgress.streak} days
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Time</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>
                {Math.floor(myProgress.totalTime / 3600)}h {Math.floor((myProgress.totalTime % 3600) / 60)}m
              </span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Current Level</span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#22c55e' }}>
                {myProgress.currentLevel}
              </span>
            </div>
          </div>
        </div>

        <div style={progressCardStyle}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Certificates
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {certificates.map((cert, index) => (
              <div key={cert.id} style={{
                padding: '12px',
                backgroundColor: cert.earned ? '#f0fdf4' : '#f9fafb',
                borderRadius: '8px',
                border: cert.earned ? '1px solid #bbf7d0' : '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Award size={16} style={{ color: cert.earned ? '#16a34a' : '#9ca3af' }} />
                  <span style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    color: cert.earned ? '#16a34a' : '#6b7280' 
                  }}>
                    {cert.name}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '8px' }}>
                  {cert.description}
                </p>
                <div style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${cert.progress}%`,
                    height: '100%',
                    backgroundColor: cert.earned ? '#16a34a' : '#22c55e',
                    borderRadius: '2px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}