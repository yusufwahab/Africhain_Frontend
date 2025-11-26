import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './services/i18n'
import LanguageSelection from './pages/LanguageSelection'
import Dashboard from './pages/Dashboard'
import PriceChecker from './pages/PriceChecker'
import VoiceChat from './pages/VoiceChat'
import Suppliers from './pages/Suppliers'
import Tasks from './pages/Tasks'
import TradeCredit from './pages/TradeCredit'
import CurrencyShield from './pages/CurrencyShield'
import GroupBuy from './pages/GroupBuy'
import Leaderboard from './pages/Leaderboard'
import BusinessSchool from './pages/BusinessSchool'
import GovPayTracker from './pages/GovPayTracker'
import RouteOptimizer from './pages/RouteOptimizer'
import TaxAssistant from './pages/TaxAssistant'
import WeatherTrading from './pages/WeatherTrading'
import LoyaltySystem from './pages/LoyaltySystem'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import TestPage from './pages/TestPage'
import SimpleTest from './pages/SimpleTest'
import Layout from './components/layout/Layout'
import './index.css'

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/language" element={<LanguageSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/simple" element={<SimpleTest />} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/voice" element={<Layout><VoiceChat /></Layout>} />
            <Route path="/prices" element={<Layout><PriceChecker /></Layout>} />
            <Route path="/suppliers" element={<Layout><Suppliers /></Layout>} />
            <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
            <Route path="/credit" element={<Layout><TradeCredit /></Layout>} />
            <Route path="/forex" element={<Layout><CurrencyShield /></Layout>} />
            <Route path="/groupbuy" element={<Layout><GroupBuy /></Layout>} />
            <Route path="/govtracker" element={<Layout><GovPayTracker /></Layout>} />
            <Route path="/routes" element={<Layout><RouteOptimizer /></Layout>} />
            <Route path="/tax" element={<Layout><TaxAssistant /></Layout>} />
            <Route path="/weather" element={<Layout><WeatherTrading /></Layout>} />
            <Route path="/leaderboard" element={<Layout><Leaderboard /></Layout>} />
            <Route path="/learn" element={<Layout><BusinessSchool /></Layout>} />
            <Route path="/loyalty" element={<Layout><LoyaltySystem /></Layout>} />
            <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  )
}