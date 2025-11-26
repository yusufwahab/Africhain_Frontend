export const mockUser = {
  id: '1',
  name: 'Mama Ngozi',
  email: 'ngozi@example.com',
  phone: '+234 803 XXX XXXX',
  location: 'Lagos',
  language: 'pcm',
  trustScore: 4.8,
  joinedDate: '2023-01-15',
  avatar: '/avatars/user1.jpg'
}

export const mockSales = [
  {
    id: '1',
    product: 'Eggs (crates)',
    quantity: 3,
    amount: 9000,
    profit: 2500,
    date: '2024-11-26T10:30:00',
    customer: 'Musa'
  },
  {
    id: '2',
    product: 'Rice (50kg bag)',
    quantity: 2,
    amount: 84000,
    profit: 8000,
    date: '2024-11-25T14:20:00',
    customer: 'Kemi'
  }
]

export const mockPrices = [
  {
    product: 'Rice (50kg bag)',
    location: 'Kano',
    currentPrice: 42000,
    change: 3,
    trend: [38000, 39000, 40000, 41000, 42000, 42500, 42000],
    lastUpdated: '2024-11-26T09:00:00',
    insights: 'Price dey rise. Better buy now before e reach ₦45k next week.'
  },
  {
    product: 'Tomatoes (basket)',
    location: 'Lagos',
    currentPrice: 8500,
    change: -12,
    trend: [9500, 9200, 8800, 8600, 8500, 8400, 8500],
    lastUpdated: '2024-11-26T08:30:00',
    insights: 'Good time to buy tomatoes. Price don drop well well.'
  }
]

export const mockTasks = [
  {
    id: '1',
    title: 'Clean front table',
    assignedTo: 'Blessing',
    dueDate: '2024-11-26T09:00:00',
    status: 'pending',
    location: 'Main shop floor',
    priority: 'normal'
  },
  {
    id: '2',
    title: 'Restock rice bags',
    assignedTo: 'John',
    dueDate: '2024-11-27T10:00:00',
    status: 'pending',
    location: 'Storage room',
    priority: 'high'
  }
]

export const mockSuppliers = [
  {
    id: '1',
    name: 'Alhaji Trades Ltd',
    products: ['Rice', 'Beans', 'Garri'],
    location: 'Kano, Nigeria',
    trustScore: 4.9,
    ordersCompleted: 1247,
    responseTime: '< 2 hours',
    verified: true,
    yearsInBusiness: 7,
    phone: '+234 XXX',
    whatsapp: '+234 XXX',
    email: 'alhaji@example.com'
  }
]

export const languages = [
  { code: 'pcm', name: 'Pidgin', flag: '🇳🇬', greeting: 'How far?' },
  { code: 'yo', name: 'Yoruba', flag: '👑', greeting: 'Báwo ni?' },
  { code: 'ha', name: 'Hausa', flag: '🌙', greeting: 'Sannu?' },
  { code: 'ig', name: 'Igbo', flag: '🦁', greeting: 'Kedu?' },
  { code: 'en', name: 'English', flag: '🌍', greeting: 'Hello!' }
]