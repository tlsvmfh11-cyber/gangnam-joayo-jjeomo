import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gold-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-primary">
          {/* 메인 CTA */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 예약하세요
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            강남 좋아요에서 특별한 시간을 경험해 보세요
          </p>

          {/* 연락처 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary/90 backdrop-blur-sm p-8 rounded-xl">
              <FaPhone className="text-5xl text-gold mx-auto mb-4" />
              <div className="text-white font-bold text-xl mb-2">전화 예약</div>
              <div className="text-gray-300">010-2303-3778</div>
              <div className="text-gray-400 text-sm mt-2">24시간 상담 가능</div>
            </div>

            <div className="bg-primary/90 backdrop-blur-sm p-8 rounded-xl">
              <FaMapMarkerAlt className="text-5xl text-gold mx-auto mb-4" />
              <div className="text-white font-bold text-xl mb-2">오시는 길</div>
              <div className="text-gray-300">강남역 10번 출구</div>
              <div className="text-gray-400 text-sm mt-2">도보 3분 거리</div>
            </div>

            <div className="bg-primary/90 backdrop-blur-sm p-8 rounded-xl">
              <FaClock className="text-5xl text-gold mx-auto mb-4" />
              <div className="text-white font-bold text-xl mb-2">영업 시간</div>
              <div className="text-gray-300">PM 6:00 ~ AM 6:00</div>
              <div className="text-gray-400 text-sm mt-2">연중무휴</div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:010-2303-3778"
              className="px-10 py-5 bg-primary text-gold font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-primary"
            >
              지금 전화하기
            </a>
            <a
              href="/info"
              className="px-10 py-5 bg-transparent text-primary font-bold text-xl rounded-lg border-2 border-primary hover:bg-primary hover:text-gold transition-all duration-300"
            >
              상세 정보 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
