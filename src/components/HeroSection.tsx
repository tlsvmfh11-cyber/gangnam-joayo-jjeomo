import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient">
      {/* 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* 배지 */}
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
            <FaStar className="text-gold" />
            <span className="text-sm md:text-base">강남 프리미엄 쩜오</span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-gold-gradient">강남 좋아요</span>
            <span className="block mt-4 text-white" style={{
              textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
              WebkitTextStroke: '2px #d4af37'
            }}>
              쩜오
            </span>
          </h1>

          {/* 서브 타이틀 */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            2026년 강남역 인근 최고의 쩜오 업소<br />
            투명한 가격, 체계적인 시스템, 프리미엄 서비스
          </p>

          {/* 주요 특징 */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gold" />
              <span>강남역 도보 3분</span>
            </div>
            <div className="h-4 w-px bg-gold" />
            <div className="flex items-center gap-2">
              <FaStar className="text-gold" />
              <span>재방문율 78%</span>
            </div>
            <div className="h-4 w-px bg-gold" />
            <div className="flex items-center gap-2">
              <FaStar className="text-gold" />
              <span>최저가 유선문의</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/price"
              className="px-8 py-4 bg-gold-gradient text-primary font-bold text-lg rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
            >
              가격 확인하기
            </Link>
            <Link
              to="/reviews"
              className="px-8 py-4 glass-card font-bold text-lg rounded-lg hover:border-gold transition-all duration-300"
            >
              실제 후기 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
