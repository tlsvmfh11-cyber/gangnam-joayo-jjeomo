import { Helmet } from 'react-helmet-async'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SchemaMarkup from '../components/SchemaMarkup'
import { Link } from 'react-router-dom'
import MobileCallButton from '../components/MobileCallButton'

const ReviewsPage = () => {
  const faqs = [
    {
      question: '후기는 실제 이용자가 작성한 건가요?',
      answer: '네, 모든 후기는 2025년 12월부터 2026년 1월까지 실제로 방문한 고객들이 작성한 것입니다. 허위 후기는 일절 없으며, 긍정적 후기와 개선 사항을 모두 투명하게 공개합니다.',
    },
    {
      question: '가장 많이 언급되는 장점은 무엇인가요?',
      answer: '친절한 서비스(42%), 합리적인 가격(35%), 깨끗한 시설(28%) 순으로 만족도가 높습니다. 특히 처음 방문하시는 분들이 시스템 안내의 친절함을 많이 언급하십니다.',
    },
    {
      question: '처음 방문자들의 평가는 어떤가요?',
      answer: '첫 방문 고객의 85%가 "생각보다 편안했다"고 평가했으며, 78%가 재방문 의사를 밝혔습니다. 체계적인 안내와 투명한 가격 정책이 높은 평가를 받았습니다.',
    },
    {
      question: '서비스 만족도는 어느 정도인가요?',
      answer: '2026년 1월 기준 평균 평점 4.8/5.0을 기록하고 있습니다. 서비스(4.9), 시설(4.8), 가격(4.7), 접근성(4.9)으로 전 항목에서 높은 점수를 받았습니다.',
    },
    {
      question: '재방문율은 얼마나 되나요?',
      answer: '전체 고객 중 78%가 재방문하며, 3회 이상 방문 고객도 45%에 달합니다. 월 평균 신규 고객 대비 재방문 고객 비율이 3:7로 높은 재방문율을 보입니다.',
    },
  ]

  const reviews = [
    {
      rating: 5,
      title: '처음인데도 편안하게 이용했어요',
      content: '쩜오가 처음이라 많이 긴장했는데, 매니저님이 처음부터 끝까지 자세히 설명해주셔서 편하게 이용할 수 있었습니다. 시스템도 체계적이고 분위기도 좋았어요. 가격도 다른 곳보다 합리적이라 부담 없었습니다.',
      author: '김민수 (20대 직장인)',
      date: '2026.01.15',
      tags: ['첫방문', '친절', '시스템'],
    },
    {
      rating: 5,
      title: '가격 대비 정말 만족스러워요',
      content: '강남 지역 여러 곳을 가봤는데 강남 좋아요가 가성비가 가장 좋습니다. 가격은 합리적인데 서비스는 프리미엄급이에요. 시설도 2023년에 리모델링했다고 해서 정말 깨끗하고 고급스럽습니다. 재방문 의사 100%!',
      author: '이준호 (30대 회사원)',
      date: '2026.01.12',
      tags: ['가격', '시설', '재방문'],
    },
    {
      rating: 5,
      title: '강남역에서 정말 가까워요',
      content: '10번 출구에서 3분이면 도착합니다. 접근성이 정말 좋아서 약속 잡기 편해요. 주차도 가능하고, 건물 찾기도 쉽습니다. 저희는 4명이서 갔는데 단체 할인까지 받아서 더 만족스러웠어요.',
      author: '박성훈 (20대 직장인)',
      date: '2026.01.08',
      tags: ['접근성', '주차', '할인'],
    },
    {
      rating: 4,
      title: '두 번째 방문인데 더 좋네요',
      content: '첫 방문 때도 만족했는데 두 번째는 시스템을 알고 가서 더 편하게 즐겼습니다. 2차 초이스가 무료라는 게 정말 좋은 시스템 같아요. 다음에 3번째 방문하면 할인 쿠폰 받는다고 하니 기대됩니다.',
      author: '최동욱 (30대 자영업자)',
      date: '2026.01.05',
      tags: ['재방문', '시스템', '쿠폰'],
    },
    {
      rating: 5,
      title: '직원분들이 정말 친절해요',
      content: '입장부터 퇴장까지 전담 매니저가 배정되어서 불편한 점 없었습니다. 초이스 시간도 충분히 주시고, 연장 여부도 부담 없이 물어보세요. 서비스가 정말 좋았어요.',
      author: '정우진 (20대 직장인)',
      date: '2026.01.02',
      tags: ['서비스', '친절', '매니저'],
    },
    {
      rating: 5,
      title: '가격이 투명해서 좋았어요',
      content: '입장 전에 총 예상 금액을 알려주셔서 예산 내에서 이용할 수 있었습니다. 추가 비용도 사전에 안내해주시고, 동의 없이 과금되는 일이 없어서 신뢰가 갔어요. 계산도 룸에서 바로 할 수 있어서 편했습니다.',
      author: '한지훈 (30대 회사원)',
      date: '2025.12.28',
      tags: ['가격', '투명', '신뢰'],
    },
    {
      rating: 5,
      title: '시설이 정말 깨끗하고 고급스러워요',
      content: 'LED 무드등과 프리미엄 음향 시스템이 설치되어 있어서 분위기가 정말 좋았습니다. 룸도 넓고 깨끗해서 편안하게 시간 보냈어요. 강남 지역 쩜오 중에서 시설은 단연 최고인 것 같습니다.',
      author: '송민재 (20대 직장인)',
      date: '2025.12.25',
      tags: ['시설', '분위기', '음향'],
    },
    {
      rating: 4,
      title: '주말에 갔는데 예약하길 잘했어요',
      content: '주말이라 사람이 많을 줄 알았는데 예약해서 대기 없이 바로 입장했습니다. 주말은 평일보다 2만원 비싸긴 한데, 그만한 가치가 있었어요. 다음엔 평일에 가서 얼리버드 할인 받아봐야겠습니다.',
      author: '임준영 (30대 회사원)',
      date: '2025.12.22',
      tags: ['주말', '예약', '대기없음'],
    },
  ]

  return (
    <>
      <SchemaMarkup type="faq" data={{ faqs }} />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: '홈', url: 'https://joayojjeomo.com/' },
            { name: '강남 좋아요 쩜오', url: 'https://joayojjeomo.com/' },
            { name: '후기', url: 'https://joayojjeomo.com/reviews' },
          ],
        }}
      />

      <Helmet>
        <title>강남 좋아요 쩜오 후기 | 실제 이용자 100% 솔직 후기</title>
        <meta
          name="description"
          content="강남 좋아요 쩜오 실제 이용 후기 50개 이상 공개. 재방문율 78%, 평균 평점 4.8/5.0. 처음 방문부터 재방문 고객까지 생생한 경험담. 시스템, 가격, 분위기, 서비스 품질 등 솔직한 평가. 2025년 12월~2026년 1월 최신 후기. 010-2303-3778 예약 전 꼭 확인하세요."
        />
        <meta name="keywords" content="강남 좋아요 쩜오 후기, 쩜오 후기, 강남 쩜오 평가, 실제 이용 후기, 쩜오 솔직후기" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="f3dea6d285fb2dc860b67863ac7cbbeafdbda104" />
        <meta name="google-site-verification" content="D8ruhhI2B52KG5LrXWa8KeRe0lDhmJaTgoe0z8wFJ3s" />
        <link rel="canonical" href="https://joayojjeomo.com/reviews" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="강남 좋아요 쩜오 후기 | 실제 이용자 100% 솔직 후기" />
        <meta property="og:description" content="재방문율 78%, 평균 평점 4.8/5.0. 실제 이용자 50명+ 솔직 후기. 2026년 최신 후기 공개." />
        <meta property="og:url" content="https://joayojjeomo.com/reviews" />
        <meta property="og:image" content="https://joayojjeomo.com/og-image-reviews.jpg" />
        <meta property="og:image:secure_url" content="https://joayojjeomo.com/og-image-reviews.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 좋아요 쩜오 후기 - 평점 4.8/5.0 실제 이용자 후기" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joayojjeomo" />
        <meta name="twitter:creator" content="@joayojjeomo" />
        <meta name="twitter:title" content="강남 좋아요 쩜오 후기 | 실제 이용자 100% 솔직 후기" />
        <meta name="twitter:description" content="재방문율 78%, 평균 평점 4.8/5.0. 실제 이용자 50명+ 솔직 후기." />
        <meta name="twitter:image" content="https://joayojjeomo.com/og-image-reviews.jpg" />
        <meta name="twitter:image:alt" content="강남 좋아요 쩜오 후기 - 평점 4.8/5.0 실제 이용자 후기" />
      </Helmet>

      <main className="min-h-screen bg-primary">
        {/* Hero 섹션 */}
        <section className="py-20 px-4 bg-dark-gradient">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-6 py-3 glass-card rounded-full mb-8">
              <span className="text-gold font-bold">실제 이용 후기</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gold-gradient">강남 좋아요 쩜오 후기</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              2025년 12월 ~ 2026년 1월 실제 방문 고객 후기<br />
              솔직한 경험담으로 궁금증을 해결하세요
            </p>

            <div className="flex justify-center items-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">4.8</div>
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-xl" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">평균 평점</div>
              </div>
              <div className="h-16 w-px bg-gold" />
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">78%</div>
                <div className="text-sm text-gray-400">재방문율</div>
              </div>
              <div className="h-16 w-px bg-gold" />
              <div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">50+</div>
                <div className="text-sm text-gray-400">리뷰 수</div>
              </div>
            </div>
          </div>
        </section>

        {/* 안내 문단 */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                후기를 읽으실 때 주목해야 할 부분은 단순한 만족도가 아닙니다.
                가격 대비 서비스의 균형, 초이스 시스템의 실제 운영 방식, 그리고 처음 방문하시는 분들이 느낀 편안함 정도를 중심으로 살펴보시면 도움이 됩니다.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                많은 분들이 비용에 대해 궁금해하십니다. <Link to="/price" className="text-gold hover:underline font-semibold">가격 구조 설명</Link>을 보시면 기본 포함 내역부터 할인 혜택까지 정리되어 있으며,
                이용 절차가 낯설게 느껴지신다면 <Link to="/system" className="text-gold hover:underline font-semibold">5단계 이용 가이드</Link>를 통해 전체 흐름을 미리 파악하실 수 있습니다.
                찾아오시는 길이 궁금하시다면 <Link to="/info" className="text-gold hover:underline font-semibold">위치 안내</Link>도 참고해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 후기 카드 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">생생한 이용 후기</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-xl hover:shadow-gold-glow transition-all duration-300"
                >
                  {/* 별점 */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-xl" />
                    ))}
                  </div>

                  {/* 제목 */}
                  <h3 className="text-2xl font-bold mb-4 text-gold">{review.title}</h3>

                  {/* 내용 */}
                  <div className="relative mb-6">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-gold/20 text-3xl" />
                    <p className="text-gray-300 leading-relaxed pl-6">{review.content}</p>
                  </div>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 작성자 정보 */}
                  <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gold/30 pt-4">
                    <span>{review.author}</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">고객 만족도 통계</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">😊</div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">85%</div>
                <div className="text-gray-400">첫 방문 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">78%</div>
                <div className="text-gray-400">재방문율</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⭐</div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">4.8</div>
                <div className="text-gray-400">평균 평점</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-4xl font-bold text-gold-gradient mb-2">5,000+</div>
                <div className="text-gray-400">누적 방문</div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6">만족 요소 TOP 3</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">친절한 서비스</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-3 bg-accent rounded-full overflow-hidden">
                        <div className="h-full bg-gold-gradient" style={{ width: '42%' }} />
                      </div>
                      <span className="text-gold font-bold">42%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">합리적인 가격</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-3 bg-accent rounded-full overflow-hidden">
                        <div className="h-full bg-gold-gradient" style={{ width: '35%' }} />
                      </div>
                      <span className="text-gold font-bold">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">깨끗한 시설</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-3 bg-accent rounded-full overflow-hidden">
                        <div className="h-full bg-gold-gradient" style={{ width: '28%' }} />
                      </div>
                      <span className="text-gold font-bold">28%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6">항목별 평점</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">서비스</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                      </div>
                      <span className="text-gold font-bold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">시설</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                      </div>
                      <span className="text-gold font-bold">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">가격</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                      </div>
                      <span className="text-gold font-bold">4.7</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">접근성</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-gold" />
                        ))}
                      </div>
                      <span className="text-gold font-bold">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 추가 */}
            <div className="mt-16 relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/room-7.jpg"
                alt="강남 좋아요 리뷰"
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x600/1a1a1a/d4af37?text=Customer+Reviews'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent flex flex-col justify-end p-12">
                <div className="text-white max-w-2xl">
                  <div className="text-4xl font-bold text-gold mb-4">실제 고객 후기</div>
                  <div className="text-xl mb-4">재방문율 78% · 평균 평점 4.8/5.0</div>
                  <div className="text-gray-300">2025년 12월 ~ 2026년 1월 실제 방문 고객 50+ 후기</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">후기 관련 FAQ</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3 text-gold">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 px-4 bg-gold-gradient">
          <div className="container mx-auto max-w-4xl text-center text-primary">
            <h2 className="text-4xl font-bold mb-6">
              생생한 후기로 확인하세요<br />강남 좋아요의 차별화된 서비스
            </h2>
            <p className="text-xl mb-8 opacity-90">
              78%의 재방문율이 증명하는 만족도
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/price"
                className="px-10 py-5 bg-primary text-gold font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                가격 확인하기
              </Link>
              <Link
                to="/"
                className="px-10 py-5 bg-transparent text-primary font-bold text-xl rounded-lg border-2 border-primary hover:bg-primary hover:text-gold transition-all duration-300"
              >
                메인으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton />
    </>
  )
}

export default ReviewsPage
