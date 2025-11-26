import { create } from 'zustand'

const useStore = create((set, get) => ({
      // User state
      user: {
        id: '1',
        name: 'Mama Ngozi',
        email: 'ngozi@example.com',
        phone: '+234 803 XXX XXXX',
        location: 'Lagos',
        language: 'en',
        trustScore: 4.8,
        joinedDate: '2023-01-15',
        avatar: '/avatars/user1.jpg'
      },
      
      // Language state
      currentLanguage: 'en',
      setLanguage: (language) => set({ currentLanguage: language }),
      
      // Voice recording state
      isRecording: false,
      setRecording: (recording) => set({ isRecording: recording }),
      
      // Chat messages
      messages: [],
      addMessage: (message) => set((state) => ({
        messages: [...state.messages, { ...message, id: Date.now() }]
      })),
      
      // Sales data
      sales: [],
      addSale: (sale) => set((state) => ({
        sales: [...state.sales, { ...sale, id: Date.now() }]
      })),
      
      // Tasks
      tasks: [],
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Date.now(), status: 'pending' }]
      })),
      updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map(task => 
          task.id === id ? { ...task, ...updates } : task
        )
      })),
      
      // Price alerts
      priceAlerts: [],
      addPriceAlert: (alert) => set((state) => ({
        priceAlerts: [...state.priceAlerts, { ...alert, id: Date.now() }]
      })),
      
      // Notifications
      notifications: [],
      addNotification: (notification) => set((state) => ({
        notifications: [...state.notifications, { 
          ...notification, 
          id: Date.now(),
          timestamp: new Date().toISOString()
        }]
      })),
      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })),
      
      // UI state
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      // Theme
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }))

export default useStore