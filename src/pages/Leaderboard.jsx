import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp, TrendingDown, Star, Award, Target, Zap, Crown } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

export default function Leaderboard() {
  const [timeRange, setTimeRange] = useState('week')
  const [category, setCategory] = useState('profit')
  const [location, setLocation] = useState('national')

  const leaderboardData = [
    {
      rank: 1,
      username: 'Trader #4523',
      score: 45230,
      location: 'Lagos',
      trend: 'up',
      change: 6,
      badges: ['perfect-payer', 'group-leader', 'top-seller'],
      avatar: '👑',
      specialty: 'Rice Trading'
    },
    {
      rank: 2,
      username: 'Mama Kemi Foods',
      score: 42150,
      location: 'Ibadan',
      trend: 'up',
      change: 3,
      badges: ['fast-responder', 'quality-supplier'],
      avatar: '👩🍳',
      specialty: 'Palm Oil'
    },
    {
      rank: 3,
      username: 'Alhaji Trades',
      score: 38900,
      location: 'Kano',
      trend: 'down',
      change: -1,
      badges: ['veteran-trader', 'bulk-specialist'],
      avatar: '🏪',
      specialty: 'Grains & Cereals'
    },
    {
      rank: 4,
      username: 'Fresh Farms NG',
      score: 35600,
      location: 'Jos',
      trend: 'up',
      change: 2,
      badges: ['organic-certified', 'fast-delivery'],
      avatar: '🌱',
      specialty: 'Vegetables'
    },
    {
      rank: 5,
      username: 'Chief Okoro',
      score: 33200,
      location: 'Onitsha',
      trend: 'same',
      change: 0,
      badges: ['trust-builder', 'community-leader'],
      avatar: '👨💼',
      specialty: 'Wholesale'
    }
  ]

  const myRanking = {
    rank: 12,
    score: 28450,
    location: 'Lagos',
    trend: 'up',
    change: 6,
    percentile: 15,
    nextRank: 11,
    pointsToNext: 1200
  }

  const achievements = [
    {
      id: 'first-sale',
      name: 'First Sale',
      description: 'Complete your first transaction',
      icon: '💰',
      rarity: 'common',
      unlocked: true,
      progress: 100
    },
    {
      id: 'perfect-week',
      name: 'Perfect Week',
      description: 'Log sales for 7 consecutive days',
      icon: '📅',
      rarity: 'rare',
      unlocked: true,
      progress: 100
    },
    {
      id: 'group-leader',
      name: 'Group Leader',
      description: 'Successfully organize 5 group buys',
      icon: '👥',
      rarity: 'epic',
      unlocked: false,
      progress: 60
    },
    {
      id: 'price-master',
      name: 'Price Master',
      description: 'Check prices 100 times',
      icon: '📊',
      rarity: 'rare',
      unlocked: false,
      progress: 85
    },
    {
      id: 'community-helper',
      name: 'Community Helper',
      description: 'Help 50 traders with advice',
      icon: '🤝',
      rarity: 'legendary',
      unlocked: false,
      progress: 30
    },
    {
      id: 'speed-demon',
      name: 'Speed Demon',
      description: 'Complete 10 transactions in one day',
      icon: '⚡',
      rarity: 'epic',
      unlocked: false,
      progress: 0
    }
  ]

  const weeklyChallenges = [
    {
      id: 1,
      title: 'Complete 5 group buys',
      description: 'Join or organize 5 group buying sessions',
      progress: 3,
      target: 5,
      reward: '500 points + Group Master badge',
      timeLeft: '4 days',
      difficulty: 'medium'
    },
    {
      id: 2,
      title: 'Log daily sales',
      description: 'Record your sales for 7 consecutive days',
      progress: 5,
      target: 7,
      reward: '300 points + Consistency badge',
      timeLeft: '2 days',
      difficulty: 'easy'
    },
    {
      id: 3,
      title: 'Help fellow traders',
      description: 'Provide advice or assistance to 3 traders',
      progress: 1,
      target: 3,
      reward: '750 points + Helper badge',
      timeLeft: '6 days',
      difficulty: 'hard'
    }
  ]

  const communityStats = {
    totalTraders: 12470,
    weeklyTransactions: 8934,
    totalSavings: 2300000,
    livesImpacted: 45600
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb' }
      case 'rare': return { bg: '#dbeafe', text: '#2563eb', border: '#bfdbfe' }
      case 'epic': return { bg: '#f3e8ff', text: '#9333ea', border: '#d8b4fe' }
      case 'legendary': return { bg: '#fef3c7', text: '#d97706', border: '#fde68a' }
      default: return { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb' }
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return { bg: '#dcfce7', text: '#16a34a' }
      case 'medium': return { bg: '#fef3c7', text: '#d97706' }
      case 'hard': return { bg: '#fee2e2', text: '#dc2626' }
      default: return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  const containerStyle = {
    padding: '24px',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }

  const headerStyle = {
    textAlign: 'left',
    marginBottom: '32px'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: '8px'
  }

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#6b7280'
  }

  const filtersStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '24px'
  }

  const filterSelectStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    minWidth: '120px'
  }

  const myRankCardStyle = {
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 8px 25px -5px rgba(34, 197, 94, 0.3)',
    marginBottom: '24px'
  }

  const leaderboardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const podiumStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    gap: '16px',
    marginBottom: '32px'
  }

  const podiumItemStyle = (rank) => {
    const heights = { 1: '120px', 2: '100px', 3: '80px' }
    const colors = { 1: '#fbbf24', 2: '#94a3b8', 3: '#f59e0b' }
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: colors[rank],
      borderRadius: '12px',
      minHeight: heights[rank],
      justifyContent: 'space-between',
      color: 'white',
      fontWeight: 'bold',
      minWidth: '120px'
    }
  }

  const leaderListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }

  const leaderItemStyle = (rank) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: rank <= 3 ? '#f9fafb' : 'white',
    borderRadius: '12px',
    border: rank <= 3 ? '2px solid #fbbf24' : '1px solid #e5e7eb',
    transition: 'all 0.2s ease'
  })

  const achievementsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px'
  }

  const achievementCardStyle = (unlocked, rarity) => {
    const colors = getRarityColor(rarity)
    return {
      backgroundColor: unlocked ? 'white' : '#f9fafb',
      borderRadius: '12px',
      padding: '20px',
      border: `2px solid ${colors.border}`,
      opacity: unlocked ? 1 : 0.7,
      transition: 'all 0.2s ease'
    }
  }

  const challengeCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const progressBarStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  }

  const progressFillStyle = (progress) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: '4px',
    transition: 'width 0.3s ease'
  })

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Oga Leaderboard</h1>
        <p style={subtitleStyle}>Compete, achieve, and celebrate success together</p>
      </div>

      {/* My Ranking Card */}
      <div style={myRankCardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '4px' }}>
              YOUR RANK: #{myRanking.rank} in {myRanking.location}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {myRanking.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>
                {myRanking.trend === 'up' ? 'Up' : 'Down'} from #{myRanking.rank + myRanking.change} last week (+{Math.abs(myRanking.change)})
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {myRanking.score.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
              points
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '4px' }}>
              You're in top {myRanking.percentile}%!
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
              {myRanking.pointsToNext.toLocaleString()} points to reach #{myRanking.nextRank}
            </div>
          </div>
          <Trophy size={32} style={{ opacity: 0.8 }} />
        </div>
      </div>

      {/* Filters */}
      <div style={filtersStyle}>
        <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>Filter by:</span>
        
        <select 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          style={filterSelectStyle}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">All Time</option>
        </select>
        
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={filterSelectStyle}
        >
          <option value="profit">Profit</option>
          <option value="growth">Growth</option>
          <option value="transactions">Transactions</option>
          <option value="community">Community Points</option>
        </select>
        
        <select 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          style={filterSelectStyle}
        >
          <option value="national">National</option>
          <option value="state">My State</option>
          <option value="city">My City</option>
        </select>
      </div>

      {/* Leaderboard */}
      <div style={leaderboardStyle}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
          Top Traders - {timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}
        </h3>

        {/* Podium */}
        <div style={podiumStyle}>
          {leaderboardData.slice(0, 3).map((trader, index) => {
            const positions = [1, 0, 2] // 2nd, 1st, 3rd
            const actualTrader = leaderboardData[positions[index]]
            return (
              <motion.div
                key={actualTrader.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={podiumItemStyle(actualTrader.rank)}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                  {actualTrader.rank === 1 ? '👑' : actualTrader.avatar}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}>
                    #{actualTrader.rank}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'normal', opacity: 0.9 }}>
                    {actualTrader.username}
                  </div>
                  <div style={{ fontSize: '0.875rem', marginTop: '4px' }}>
                    {actualTrader.score.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Full List */}
        <div style={leaderListStyle}>
          {leaderboardData.map((trader, index) => (
            <motion.div
              key={trader.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={leaderItemStyle(trader.rank)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = trader.rank <= 3 ? '#f9fafb' : 'white'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                <div style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: trader.rank <= 3 ? '#fbbf24' : '#6b7280',
                  minWidth: '40px'
                }}>
                  #{trader.rank}
                </div>
                
                <div style={{ fontSize: '1.5rem' }}>
                  {trader.rank === 1 ? '👑' : trader.avatar}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '2px' }}>
                    {trader.username}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {trader.specialty} • {trader.location}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '4px' }}>
                  {trader.badges.slice(0, 3).map((badge, i) => (
                    <div key={i} style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#f3f4f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem'
                    }}>
                      🏆
                    </div>
                  ))}
                </div>
                
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827' }}>
                    {trader.score.toLocaleString()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    {trader.trend === 'up' ? (
                      <TrendingUp size={12} style={{ color: '#16a34a' }} />
                    ) : trader.trend === 'down' ? (
                      <TrendingDown size={12} style={{ color: '#dc2626' }} />
                    ) : null}
                    <span style={{ 
                      fontSize: '0.75rem', 
                      color: trader.trend === 'up' ? '#16a34a' : trader.trend === 'down' ? '#dc2626' : '#6b7280'
                    }}>
                      {trader.change !== 0 ? `${trader.change > 0 ? '+' : ''}${trader.change}` : '—'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Achievement Badges
        </h3>
        
        <div style={achievementsGridStyle}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={achievementCardStyle(achievement.unlocked, achievement.rarity)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '2rem' }}>
                  {achievement.unlocked ? achievement.icon : '🔒'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827' }}>
                      {achievement.name}
                    </h4>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      ...getRarityColor(achievement.rarity)
                    }}>
                      {achievement.rarity}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              {!achievement.unlocked && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Progress</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#111827' }}>
                      {achievement.progress}%
                    </span>
                  </div>
                  <div style={progressBarStyle}>
                    <div style={progressFillStyle(achievement.progress)}></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Weekly Challenges
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {weeklyChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={challengeCardStyle}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                    {challenge.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {challenge.description}
                  </p>
                </div>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  ...getDifficultyColor(challenge.difficulty)
                }}>
                  {challenge.difficulty}
                </span>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Progress: {challenge.progress}/{challenge.target}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {challenge.timeLeft} left
                  </span>
                </div>
                <div style={progressBarStyle}>
                  <div style={progressFillStyle((challenge.progress / challenge.target) * 100)}></div>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: '#f0fdf4', 
                borderRadius: '8px', 
                padding: '8px 12px',
                border: '1px solid #bbf7d0'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: '500' }}>
                  🎁 Reward: {challenge.reward}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        border: '1px solid #f3f4f6'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Community Impact
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>
              {communityStats.totalTraders.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Traders</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>
              {communityStats.weeklyTransactions.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Weekly Transactions</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
              ₦{(communityStats.totalSavings / 1000000).toFixed(1)}M
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Total Savings</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
              {communityStats.livesImpacted.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Lives Impacted</div>
          </div>
        </div>
      </div>
    </div>
  )
}