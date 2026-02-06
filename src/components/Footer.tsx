import { Link } from 'react-router-dom'
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-gold/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* 로고 및 소개 */}
          <div>
            <h3 className="text-2xl font-bold text-gold-gradient mb-4">강남 좋아요</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              강남역 인근 프리미엄 쩜오<br />
              투명한 가격, 체계적인 시스템<br />
              2026년 최신 정보
            </p>
          </div>

          {/* 사이트맵 */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">사이트맵</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">홈</Link></li>
              <li><Link to="/price" className="hover:text-gold transition-colors">가격</Link></li>
              <li><Link to="/reviews" className="hover:text-gold transition-colors">후기</Link></li>
              <li><Link to="/info" className="hover:text-gold transition-colors">정보</Link></li>
              <li><Link to="/system" className="hover:text-gold transition-colors">시스템</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">연락처</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone className="text-gold" />
                <span>010-2303-3778</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-gold" />
                <span>PM 6:00 ~ AM 6:00</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold" />
                <span>강남역 10번 출구</span>
              </li>
            </ul>
          </div>

          {/* 영업 정보 */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">영업 정보</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• 연중무휴 운영</li>
              <li>• 24시간 예약 상담</li>
              <li>• 카드·현금 결제</li>
              <li>• 주차 2시간 무료</li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gold/30 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">© 2026 강남 좋아요. All rights reserved.</p>
          <p className="text-xs">
            본 사이트의 모든 콘텐츠는 저작권으로 보호됩니다.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
