import { FaStar } from 'react-icons/fa'

const ReviewsSection = () => {
  const reviews = [
    {
      rating: 5,
      text: '처음 방문이었는데 매니저가 처음부터 끝까지 자세히 설명해줘서 편하게 이용했습니다. 시스템도 체계적이고 분위기도 좋았어요.',
      author: '20대 직장인',
      date: '2026.01',
    },
    {
      rating: 5,
      text: '가격이 투명해서 좋았습니다. 입장 전에 총 금액을 알려줘서 예산 내에서 이용할 수 있었어요. 강남역에서 가깝고 접근성도 좋습니다.',
      author: '30대 회사원',
      date: '2026.01',
    },
    {
      rating: 5,
      text: '두 번째 방문인데 첫 번째보다 더 만족스러웠습니다. 시스템을 알고 가니까 더 편하게 즐길 수 있었어요. 3번째 방문 시 할인 쿠폰도 받았습니다.',
      author: '30대 자영업자',
      date: '2025.12',
    },
    {
      rating: 4,
      text: '다른 곳도 가봤지만 강남 좋아요가 가성비가 가장 좋습니다. 시설도 깔끔하고 서비스도 친절해요. 재방문 의사 있습니다.',
      author: '20대 직장인',
      date: '2025.12',
    },
  ]

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="container mx-auto max-w-6xl">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">실제 이용 후기</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          <p className="text-gray-300 mt-6 text-lg">
            2025년 12월 ~ 2026년 1월 실제 방문 후기
          </p>
        </div>

        {/* 리뷰 그리드 (정적) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover:shadow-gold-glow transition-all duration-300">
              {/* 별점 */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold text-xl" />
                ))}
              </div>

              {/* 후기 내용 */}
              <p className="text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                "{review.text}"
              </p>

              {/* 작성자 정보 */}
              <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gold/30 pt-4">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 이미지 섹션 */}
        <div className="relative h-64 rounded-2xl overflow-hidden">
          <img
            src="/images/room-4.jpg"
            alt="강남 좋아요 고객 만족"
            className="w-full h-full object-cover"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/1200x400/1a1a1a/d4af37?text=Customer+Satisfaction'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 to-transparent flex items-center justify-end p-12">
            <div className="text-white text-right max-w-lg">
              <div className="text-3xl font-bold text-gold mb-4">고객 만족도 1위</div>
              <div className="text-lg">실제 이용자들의 생생한 후기를 확인하세요</div>
            </div>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">78%</div>
            <div className="text-gray-400">재방문율</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">5,000+</div>
            <div className="text-gray-400">누적 방문</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">4.8</div>
            <div className="text-gray-400">평균 평점</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">3년</div>
            <div className="text-gray-400">운영 경력</div>
          </div>
        </div>

        {/* 더보기 버튼 */}
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-block px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-primary transition-all duration-300"
          >
            후기 더 보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
