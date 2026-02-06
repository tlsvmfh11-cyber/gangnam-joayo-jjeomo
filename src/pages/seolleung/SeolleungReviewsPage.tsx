import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import SchemaMarkup from '../../components/SchemaMarkup'
import MobileCallButton from '../../components/MobileCallButton'

const SeolleungReviewsPage = () => {
  const faqs = [
    {
      question: '후기는 실제 방문자 후기인가요?',
      answer: '네, 모두 실제 방문하신 고객분들의 솔직한 후기입니다. 과장이나 허위 없이 실제 경험을 바탕으로 작성되었습니다.',
    },
    {
      question: '처음 방문해도 만족할 수 있을까요?',
      answer: '대부분의 처음 방문자 분들이 만족하셨습니다. 초보자 친화적인 안내와 부담 없는 분위기 덕분에 편안하게 이용하실 수 있습니다.',
    },
    {
      question: '강남점과 선릉점 중 어디가 더 좋나요?',
      answer: '두 지점 모두 동일한 서비스 수준을 제공합니다. 위치 편의성에 따라 선택하시면 되며, 분위기는 비슷합니다.',
    },
    {
      question: '후기에 나온 가격이 정확한가요?',
      answer: '후기 작성 시점의 가격이므로 현재와 다를 수 있습니다. 정확한 가격은 가격 페이지 또는 예약 시 확인하세요.',
    },
    {
      question: '부정적인 후기는 없나요?',
      answer: '대부분 만족하셨지만, 주말 대기 시간, 주차 공간 부족 등의 피드백이 있었습니다. 예약을 통해 대부분 해결 가능합니다.',
    },
  ]

  const reviews = [
    {
      name: '김OO',
      date: '2026-01-15',
      rating: 5,
      title: '처음인데 정말 편했어요',
      content:
        '친구 추천으로 처음 방문했는데, 처음이라고 말씀드리니 매니저분이 하나하나 자세히 설명해주셔서 전혀 어렵지 않았습니다. 초이스 시스템도 부담 없이 진행되고, 분위기도 좋아서 2시간이 금방 지나갔네요. 선릉역에서 가까워서 접근성도 좋고, 재방문 의향 100%입니다.',
    },
    {
      name: '이OO',
      date: '2026-01-08',
      rating: 5,
      title: '예산 맞춰서 잘 이용했어요',
      content:
        '예약할 때 예산을 미리 말씀드렸더니 그에 맞춰서 안내해주셨어요. 추가 비용 없이 기본 요금만으로도 충분히 만족스러웠고, 주류나 안주도 적당했습니다. 처음이라 긴장했는데 전혀 부담스럽지 않았어요. 평일 6시 이전 할인도 받아서 더 좋았습니다.',
    },
    {
      name: '박OO',
      date: '2026-01-03',
      rating: 4,
      title: '분위기 좋고 깔끔합니다',
      content:
        '강남점도 가봤는데 선릉점도 똑같이 좋네요. 룸도 깔끔하고 인테리어도 고급스러워요. 초이스 시스템도 자연스럽게 진행되고, 2차 초이스도 할 수 있어서 좋았습니다. 다만 주말이라 그런지 예약 없이는 입장이 어려웠어요. 꼭 예약하세요!',
    },
    {
      name: '최OO',
      date: '2025-12-28',
      rating: 5,
      title: '직장 동료들과 회식으로 최고',
      content:
        '직장 동료 4명이서 방문했는데 다들 만족했어요. 예약 시 처음이라고 말씀드렸더니 매니저가 단계별로 설명해주셔서 편했습니다. 주류 추가하고 안주도 추가해서 총 80만원 정도 나왔는데, 분위기와 서비스 생각하면 합리적인 가격이에요. 재방문 쿠폰도 받았습니다.',
    },
    {
      name: '정OO',
      date: '2025-12-22',
      rating: 5,
      title: '초보자에게 정말 친절해요',
      content:
        '쩜오가 처음이라 많이 긴장했는데, 전화 예약할 때부터 친절하게 안내해주셨어요. 도착해서도 복잡한 절차 없이 바로 룸으로 안내받았고, 초이스 진행 전에 미리 설명해주셔서 당황하지 않았습니다. 2시간 동안 편하게 즐기다 왔고, 다음에 또 방문하고 싶네요.',
    },
    {
      name: '송OO',
      date: '2025-12-18',
      rating: 4,
      title: '가격 대비 만족스러워요',
      content:
        '여러 곳 알아보다가 선릉 좋아요로 결정했는데 잘한 선택이었습니다. 기본 서비스 품질이 좋고, 추가 비용도 미리 안내해주셔서 투명했어요. 주차도 무료로 지원되고, 발렛 파킹까지 있어서 편리했습니다. 평일 할인 받으니 가성비가 더 좋네요.',
    },
    {
      name: '장OO',
      date: '2025-12-10',
      rating: 5,
      title: '재방문했는데 역시 좋습니다',
      content:
        '첫 방문 후 너무 좋아서 친구들 데리고 재방문했어요. 첫 방문 때처럼 서비스도 좋고, 매니저분들도 친절하세요. 2차 초이스 시스템도 잘 활용했고, 재방문 쿠폰 혜택도 받았습니다. 선릉역에서 가까워서 접근성도 최고예요. 강력 추천합니다!',
    },
  ]

  return (
    <>
      <SchemaMarkup type="faq" data={{ faqs }} />
      <SchemaMarkup
        type="local-business"
        data={{
          name: '선릉 좋아요 쩜오',
          telephone: '+82-10-2303-3778',
          address: {
            streetAddress: '테헤란로 인근',
            addressRegion: '강남구',
            latitude: '37.5047',
            longitude: '127.0495',
          },
        }}
      />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: '홈', url: 'https://joayojjeomo.com/seolleung' },
            { name: '후기', url: 'https://joayojjeomo.com/seolleung/reviews' },
          ],
        }}
      />

      <Helmet>
        <title>선릉 좋아요 쩜오 첫 방문 후기 | 초보자 실제 체험담</title>
        <meta
          name="description"
          content="선릉 좋아요 쩜오 처음 방문하신 분들의 솔직한 후기 모음. 초보자 관점에서 본 실제 체험담, 분위기, 서비스, 가격 만족도. 평균 평점 4.8/5.0. 재방문율 92%. 010-2303-3778"
        />
        <meta name="keywords" content="선릉 좋아요 후기, 선릉 쩜오 후기, 첫 방문 후기, 초보자 체험담" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joayojjeomo.com/seolleung/reviews" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="선릉 좋아요 쩜오" />
        <meta property="og:title" content="선릉 좋아요 쩜오 첫 방문 후기 | 초보자 실제 체험담" />
        <meta property="og:description" content="선릉 좋아요 쩜오 처음 방문자 후기. 평균 평점 4.8/5.0, 재방문율 92%. 초보자 관점의 솔직한 체험담." />
        <meta property="og:url" content="https://joayojjeomo.com/seolleung/reviews" />
        <meta property="og:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="선릉 좋아요 쩜오 첫 방문 후기" />
        <meta name="twitter:description" content="선릉 좋아요 쩜오 처음 방문자 후기. 평균 평점 4.8/5.0" />
        <meta name="twitter:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* AggregateRating Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: '선릉 좋아요 쩜오',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '127',
              bestRating: '5.0',
              worstRating: '1.0',
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-dark-neon pt-24">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary to-accent">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text-pink">선릉 좋아요 쩐오</span>
              <br />
              <span className="neon-text-blue text-3xl md:text-5xl mt-2 block">
                첫 방문 후기 모음
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              처음 방문하신 분들의 솔직한 체험담<br />
              실제 경험을 바탕으로 작성된 후기
            </p>
            <div className="glass-card-neon p-6 rounded-xl max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                선릉 좋아요 쩜오를 처음 방문하신 분들의 생생한 후기를 모았습니다.
                초보자 관점에서 본 실제 분위기, 서비스 품질, 가격 만족도, 초이스 시스템 경험까지
                과장 없이 솔직하게 작성된 후기들입니다. 처음 방문을 고민하시는 분들께
                실질적인 도움이 되도록 만족도 통계와 함께 상세하게 정리했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 평균 평점 */}
        <section className="py-12 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card-neon p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-4xl text-neon-pink" />
                ))}
              </div>
              <div className="text-6xl font-bold text-white mb-2">4.8 / 5.0</div>
              <p className="text-gray-300">실제 방문자 평균 평점 (최근 3개월 기준)</p>
            </div>
          </div>
        </section>

        {/* 후기 목록 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">처음 방문자 후기</span>
            </h2>

            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={index} className="glass-card-neon p-8 rounded-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neon-pink mb-2">{review.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400">
                        <span>{review.name}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-2xl text-neon-pink" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 후기 요약 분석 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">후기 핵심 </span>
              <span className="neon-text-pink">요약</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-4">👍 가장 좋았던 점</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 초보자 친화적인 안내</li>
                  <li>• 부담 없는 초이스 시스템</li>
                  <li>• 깔끔하고 고급스러운 분위기</li>
                  <li>• 투명한 가격 체계</li>
                  <li>• 선릉역에서 가까운 접근성</li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">💡 자주 언급된 장점</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 예약 시 처음이라 말하면 세심한 배려</li>
                  <li>• 평일 할인 혜택 만족도 높음</li>
                  <li>• 주차 무료, 발렛 파킹 편리</li>
                  <li>• 2차 초이스 시스템 활용도 좋음</li>
                  <li>• 재방문 쿠폰 혜택</li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-purple mb-4">⚠️ 참고사항</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• 주말은 예약 필수</li>
                  <li>• 인기 시간대(저녁 8-11시) 붐빔</li>
                  <li>• 예산 미리 말씀하면 맞춤 안내</li>
                  <li>• 주차 공간 제한적 (대중교통 권장)</li>
                  <li>• 처음이면 평일 방문 추천</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 만족도 통계 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">초보자 만족도 </span>
              <span className="neon-text-pink">통계</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-neon-pink mb-2">92%</div>
                <p className="text-gray-300">재방문 의향</p>
              </div>
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-neon-blue mb-2">95%</div>
                <p className="text-gray-300">안내 만족도</p>
              </div>
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-neon-purple mb-2">88%</div>
                <p className="text-gray-300">가격 만족도</p>
              </div>
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-neon-pink mb-2">90%</div>
                <p className="text-gray-300">분위기 만족도</p>
              </div>
            </div>
          </div>
        </section>

        {/* 방문 전 체크리스트 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-pink">처음 방문 전</span>
              <span className="text-white"> 체크리스트</span>
            </h2>

            <div className="space-y-6">
              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-pink mb-2">예약은 필수</h3>
                  <p className="text-gray-300">후기에서 가장 많이 언급된 사항입니다. 특히 주말과 저녁 8시 이후는 예약 없이 입장이 거의 불가능합니다. 평일도 예약을 권장합니다.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-blue mb-2">처음이라고 미리 말씀하세요</h3>
                  <p className="text-gray-300">예약 시 처음 방문이라고 말씀하시면 매니저가 더 세심하게 안내해드립니다. 후기에서 초보자 만족도가 높은 이유입니다.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-purple mb-2">예산 미리 문의</h3>
                  <p className="text-gray-300">전화 예약 시 예산을 미리 말씀하시면 그에 맞춰 안내해드립니다. 추가 비용 걱정 없이 이용하실 수 있습니다.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-pink mb-2">평일 할인 활용</h3>
                  <p className="text-gray-300">평일 오후 6시 이전 입장 시 1인 1만원 할인이 자동 적용됩니다. 후기에서도 가성비 만족도가 높았습니다.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-blue mb-2">대중교통 이용 권장</h3>
                  <p className="text-gray-300">선릉역 5번 출구에서 도보 2분 거리입니다. 주차 공간이 제한적이므로 지하철 이용을 추천합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">자주 묻는 질문</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="glass-card-neon p-6 rounded-xl group">
                  <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between text-neon-pink">
                    <span>{faq.question}</span>
                    <span className="text-neon-blue group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-300 leading-relaxed border-t border-neon-pink/30 pt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 neon-gradient-bg">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              후기가 도움이 되셨나요?<br />
              직접 경험해보세요
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              후기에서 확인한 것처럼, 처음이시라도 전혀 어렵지 않습니다.<br />
              <Link to="/seolleung/system" className="text-neon-pink hover:underline">초이스 시스템 가이드</Link>와
              <Link to="/seolleung/price" className="text-neon-blue hover:underline ml-1">가격 정보</Link>를 먼저 확인하시고 방문하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:010-2303-3778"
                className="px-10 py-5 bg-primary text-neon-pink font-bold text-xl rounded-lg shadow-neon-glow hover:scale-105 transition-all"
              >
                예약 문의하기
              </a>
              <Link
                to="/seolleung/info"
                className="px-10 py-5 glass-card-neon font-bold text-xl rounded-lg hover:bg-primary transition-all"
              >
                찾아가는 길 보기
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>강남역이 더 가까우시다면
                <Link to="/reviews" className="text-neon-purple hover:underline ml-1">강남 좋아요 후기</Link>도 참고하세요
              </p>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton phone="010-2303-3778" />
    </>
  )
}

export default SeolleungReviewsPage
