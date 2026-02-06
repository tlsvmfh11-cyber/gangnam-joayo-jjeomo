import { Routes, Route } from 'react-router-dom'
import { useContentProtection } from './hooks/useContentProtection'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import PricePage from './pages/PricePage'
import ReviewsPage from './pages/ReviewsPage'
import InfoPage from './pages/InfoPage'
import SystemPage from './pages/SystemPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  // 콘텐츠 보호 적용
  useContentProtection()

  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/system" element={<SystemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
