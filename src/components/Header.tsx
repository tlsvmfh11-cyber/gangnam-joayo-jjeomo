import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '홈', path: '/' },
    { name: '가격', path: '/price' },
    { name: '후기', path: '/reviews' },
    { name: '정보', path: '/info' },
    { name: '시스템', path: '/system' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-bold text-gold-gradient hover:scale-105 transition-transform">
            강남 좋아요
          </Link>

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
              href="tel:010-2303-3778"
              className="px-6 py-2 bg-gold-gradient text-primary font-bold rounded-lg hover:scale-105 transition-transform"
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
              href="tel:010-2303-3778"
              className="block text-center py-3 bg-gold-gradient text-primary font-bold rounded-lg"
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
