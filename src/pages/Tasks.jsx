import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, CheckSquare, Clock, User, MapPin, Calendar, Filter, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import HybridInput from '../components/shared/HybridInput'
import useStore from '../store/useStore'

export default function Tasks() {
  const { t } = useTranslation()
  const { tasks, addTask, updateTask } = useStore()
  const [viewMode, setViewMode] = useState('list') // 'list' or 'board'
  const [filterStatus, setFilterStatus] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTask, setNewTask] = useState({ title: '', assignedTo: '', dueDate: '', location: '' })

  const mockTasks = [
    {
      id: 1,
      title: 'Clean front table and arrange products',
      assignedTo: 'Blessing',
      dueDate: '2024-11-26T09:00:00',
      status: 'pending',
      location: 'Main shop floor',
      priority: 'normal',
      description: 'Make sure all products are properly arranged and the table is spotless'
    },
    {
      id: 2,
      title: 'Restock rice bags in storage',
      assignedTo: 'John',
      dueDate: '2024-11-27T10:00:00',
      status: 'in-progress',
      location: 'Storage room',
      priority: 'high',
      description: 'We are running low on 50kg rice bags'
    },
    {
      id: 3,
      title: 'Update price list for vegetables',
      assignedTo: 'Mary',
      dueDate: '2024-11-25T16:00:00',
      status: 'completed',
      location: 'Office',
      priority: 'normal',
      description: 'Update all vegetable prices based on new market rates'
    },
    {
      id: 4,
      title: 'Call supplier for tomato delivery',
      assignedTo: 'Ahmed',
      dueDate: '2024-11-26T14:00:00',
      status: 'overdue',
      location: 'Office',
      priority: 'urgent',
      description: 'Confirm tomorrow\'s tomato delivery schedule'
    }
  ]

  const handleAddTask = (taskInput) => {
    const task = {
      title: taskInput,
      assignedTo: 'You',
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      status: 'pending',
      location: 'Shop',
      priority: 'normal'
    }
    addTask(task)
  }

  const handleStatusChange = (taskId, newStatus) => {
    updateTask(taskId, { status: newStatus })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return { bg: '#dcfce7', text: '#16a34a', border: '#bbf7d0' }
      case 'in-progress': return { bg: '#dbeafe', text: '#2563eb', border: '#bfdbfe' }
      case 'overdue': return { bg: '#fee2e2', text: '#dc2626', border: '#fca5a5' }
      default: return { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb' }
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return { bg: '#fee2e2', text: '#dc2626' }
      case 'high': return { bg: '#fef3c7', text: '#d97706' }
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#15803d'
  }

  const quickInputStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6'
  }

  const filtersStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const filterButtonStyle = (active) => ({
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: active ? '#22c55e' : '#f3f4f6',
    color: active ? 'white' : '#6b7280'
  })

  const viewToggleStyle = {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    padding: '4px'
  }

  const viewButtonStyle = (active) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: active ? 'white' : 'transparent',
    color: active ? '#111827' : '#6b7280',
    boxShadow: active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
  })

  const tasksGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }

  const taskCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2p rgba(0, 0, 0, 0.04)',
    border: '1px solid #f3f4f6',
    transition: 'all 0.2s ease'
  }

  const taskHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  }

  const taskTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  }

  const taskMetaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '12px'
  }

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const statusBadgeStyle = (status) => {
    const colors = getStatusColor(status)
    return {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: colors.bg,
      color: colors.text,
      border: `1px solid ${colors.border}`
    }
  }

  const priorityBadgeStyle = (priority) => {
    const colors = getPriorityColor(priority)
    return {
      padding: '2px 8px',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: colors.bg,
      color: colors.text
    }
  }

  const taskActionsStyle = {
    display: 'flex',
    gap: '8px',
    marginTop: '16px'
  }

  const actionButtonStyle = {
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '0.75rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }

  const completeButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#dcfce7',
    color: '#16a34a'
  }

  const editButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#dbeafe',
    color: '#2563eb'
  }

  const filteredTasks = mockTasks.filter(task => {
    if (filterStatus === 'all') return true
    return task.status === filterStatus
  })

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Tasks & Team</h1>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            Manage your team tasks and workflow
          </p>
        </div>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          <Plus size={16} style={{ marginRight: '8px' }} />
          Add Task
        </Button>
      </div>

      {/* Quick Voice Input */}
      <div style={quickInputStyle}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
          Quick Task Creation
        </h3>
        <HybridInput
          placeholder="Tell someone to do something... e.g., 'Tell John to clean the storage room by 5 PM'"
          onSubmit={handleAddTask}
          size="large"
        />
        <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Quick examples:</span>
          {['Clean front desk', 'Restock inventory', 'Call supplier'].map((example, i) => (
            <button
              key={i}
              onClick={() => handleAddTask(example)}
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
      </div>

      {/* Filters and View Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={filtersStyle}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>Filter:</span>
          {['all', 'pending', 'in-progress', 'completed', 'overdue'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              style={filterButtonStyle(filterStatus === status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div style={viewToggleStyle}>
          <button
            onClick={() => setViewMode('list')}
            style={viewButtonStyle(viewMode === 'list')}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('board')}
            style={viewButtonStyle(viewMode === 'board')}
          >
            Board View
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div style={tasksGridStyle}>
        <AnimatePresence>
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              style={taskCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={taskHeaderStyle}>
                <div style={{ flex: 1 }}>
                  <h3 style={taskTitleStyle}>{task.title}</h3>
                  {task.description && (
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '12px' }}>
                      {task.description}
                    </p>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={priorityBadgeStyle(task.priority)}>
                    {task.priority}
                  </span>
                  <span style={statusBadgeStyle(task.status)}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <div style={taskMetaStyle}>
                <div style={metaItemStyle}>
                  <User size={14} />
                  <span>{task.assignedTo}</span>
                </div>
                <div style={metaItemStyle}>
                  <Clock size={14} />
                  <span>{new Date(task.dueDate).toLocaleDateString()} at {new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div style={metaItemStyle}>
                  <MapPin size={14} />
                  <span>{task.location}</span>
                </div>
              </div>

              <div style={taskActionsStyle}>
                {task.status !== 'completed' && (
                  <button
                    onClick={() => handleStatusChange(task.id, 'completed')}
                    style={completeButtonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#bbf7d0'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#dcfce7'}
                  >
                    <CheckSquare size={12} style={{ marginRight: '4px' }} />
                    Mark Complete
                  </button>
                )}
                <button
                  style={editButtonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}
                >
                  Edit
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredTasks.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          border: '1px solid #f3f4f6'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📋</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
            No tasks found
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            {filterStatus === 'all' 
              ? "You're all caught up! Create a new task to get started."
              : `No ${filterStatus.replace('-', ' ')} tasks found. Try a different filter.`
            }
          </p>
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            <Plus size={16} style={{ marginRight: '8px' }} />
            Create First Task
          </Button>
        </div>
      )}
    </div>
  )
}