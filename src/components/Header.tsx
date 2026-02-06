import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false)
  const location = useLocation()

  // 현재 경로 기준 지역 판단
  const isSeolleung = location.pathname.startsWith('/seolleung')
  const baseUrl = isSeolleung ? '/seolleung' : ''
  const locationName = isSeolleung ? '선릉 좋아요' : '강남 좋아요'
  const phoneNumber = '010-2303-3778' // 강남/선릉 동일 번호

  const navItems = [
    { name: '홈', path: `${baseUrl}/` },
    { name: '가격', path: `${baseUrl}/price` },
    { name: '후기', path: `${baseUrl}/reviews` },
    { name: '정보', path: `${baseUrl}/info` },
    { name: '시스템', path: `${baseUrl}/system` },
  ]

  const isActive = (path: string) => {
    if (path === '/seolleung/' || path === '/') {
      return location.pathname === path || (path === '/seolleung/' && location.pathname === '/seolleung')
    }
    return location.pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 & 지역 선택 */}
          <div className="flex items-center gap-4">
            <Link
              to={baseUrl === '' ? '/' : baseUrl}
              className={`text-2xl font-bold hover:scale-105 transition-transform ${isSeolleung ? 'neon-text-pink' : 'text-gold-gradient'}`}
            >
              {locationName}
            </Link>

            {/* 지역 선택 드롭다운 */}
            <div className="relative">
              <button
                onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                className={`flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm hover:border-gold transition-all ${isSeolleung ? 'border-neon-pink' : 'border-gold'}`}
              >
                <span>{isSeolleung ? '선릉점' : '강남점'}</span>
                <FaChevronDown className={`${isSeolleung ? 'text-neon-pink' : 'text-gold'} transition-transform ${isLocationMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationMenuOpen && (
                <div className="absolute top-full mt-2 left-0 glass-card rounded-lg p-2 min-w-[120px]">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gold/20 rounded transition-colors"
                    onClick={() => setIsLocationMenuOpen(false)}
                  >
                    강남점
                  </Link>
                  <Link
                    to="/seolleung"
                    className="block px-4 py-2 hover:bg-neon-pink/20 rounded transition-colors"
                    onClick={() => setIsLocationMenuOpen(false)}
                  >
                    선릉점
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:text-gold ${
                  isActive(item.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${phoneNumber}`}
              className={`px-6 py-2 font-bold rounded-lg hover:scale-105 transition-transform ${isSeolleung ? 'neon-button' : 'bg-gold-gradient text-primary'}`}
            >
              예약 문의
            </a>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold text-2xl"
            aria-label="메뉴"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {isOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(item.path) ? 'text-gold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${phoneNumber}`}
              className={`block text-center py-3 font-bold rounded-lg ${isSeolleung ? 'neon-button' : 'bg-gold-gradient text-primary'}`}
            >
              예약 문의
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
