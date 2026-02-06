import { Routes, Route } from 'react-router-dom'
import { useContentProtection } from './hooks/useContentProtection'
import Header from './components/Header'
import Footer from './components/Footer'

// 강남 Pages
import HomePage from './pages/HomePage'
import PricePage from './pages/PricePage'
import ReviewsPage from './pages/ReviewsPage'
import InfoPage from './pages/InfoPage'
import SystemPage from './pages/SystemPage'
import NotFoundPage from './pages/NotFoundPage'

// 선릉 Pages
import SeolleungHomePage from './pages/seolleung/SeolleungHomePage'
import SeolleungPricePage from './pages/seolleung/SeolleungPricePage'
import SeolleungReviewsPage from './pages/seolleung/SeolleungReviewsPage'
import SeolleungInfoPage from './pages/seolleung/SeolleungInfoPage'
import SeolleungSystemPage from './pages/seolleung/SeolleungSystemPage'

function App() {
  // 콘텐츠 보호 적용
  useContentProtection()

  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Routes>
          {/* 강남 라우트 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/system" element={<SystemPage />} />

          {/* 선릉 라우트 */}
          <Route path="/seolleung" element={<SeolleungHomePage />} />
          <Route path="/seolleung/price" element={<SeolleungPricePage />} />
          <Route path="/seolleung/reviews" element={<SeolleungReviewsPage />} />
          <Route path="/seolleung/info" element={<SeolleungInfoPage />} />
          <Route path="/seolleung/system" element={<SeolleungSystemPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
