import { FaCheckCircle } from 'react-icons/fa'

const PriceSection = () => {
  const priceFeatures = [
    '기본 2시간 룸 차지',
    '주류 1병 포함',
    '기본 안주 제공',
    '2차 초이스 무료',
    '카드·현금 결제',
  ]

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">투명한 가격</span> 정책
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          <p className="text-gray-300 mt-6 text-lg">
            숨겨진 비용 없는 명확한 가격 구조
          </p>
        </div>

        {/* 가격 카드 */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-12 rounded-2xl border-2 border-gold shadow-gold-glow">
            <div className="text-center mb-8">
              <div className="text-gray-400 text-lg mb-2">1인 기본 요금</div>
              <div className="text-5xl md:text-6xl font-bold text-gold-gradient mb-4">
                최저가<br />유선문의
              </div>
              <div className="text-gray-300 text-sm">전화로 문의 주세요</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-center text-gold font-bold text-xl mb-4">포함 내역</div>
              {priceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-gold flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/price"
                className="inline-block w-full sm:w-auto px-8 py-4 bg-gold-gradient text-primary font-bold text-lg rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
              >
                상세 가격표 보기
              </a>
            </div>
          </div>

          {/* 이미지 섹션 */}
          <div className="mt-12 relative h-64 rounded-2xl overflow-hidden">
            <img
              src="/images/room-3.jpg"
              alt="강남 좋아요 합리적인 가격"
              className="w-full h-full object-cover"
              draggable={false}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/1200x400/1a1a1a/d4af37?text=Best+Price+Guarantee'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent flex items-center p-12">
              <div className="text-white max-w-lg">
                <div className="text-3xl font-bold text-gold mb-4">합리적인 가격</div>
                <div className="text-lg">강남 지역 최저가 보장 · 투명한 가격 정책</div>
              </div>
            </div>
          </div>

          {/* 할인 정보 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-xl">
              <div className="text-gold font-bold text-lg mb-2">평일 오후 6시 이전</div>
              <div className="text-2xl font-bold text-white">1인 1만원 할인</div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="text-gold font-bold text-lg mb-2">4인 이상 단체</div>
              <div className="text-2xl font-bold text-white">전체 5% 할인</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection
