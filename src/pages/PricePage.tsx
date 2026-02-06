import { Helmet } from 'react-helmet-async'
import { FaCheckCircle, FaCreditCard, FaClock } from 'react-icons/fa'
import SchemaMarkup from '../components/SchemaMarkup'
import { Link } from 'react-router-dom'
import MobileCallButton from '../components/MobileCallButton'

const PricePage = () => {
  const faqs = [
    {
      question: '가격에 포함된 서비스는 무엇인가요?',
      answer: '기본 요금에는 2시간 룸 차지, 주류 1병, 기본 안주, 1차 및 2차 초이스가 모두 포함됩니다. 추가 비용 없이 기본 서비스를 모두 이용하실 수 있습니다.',
    },
    {
      question: '추가 비용은 어떤 것이 있나요?',
      answer: '주류 추가(5-10만원), 안주 추가(3-5만원), 시간 연장(30분당 5만원)이 있습니다. 모든 추가 비용은 사전에 안내되며 동의 없이 청구되지 않습니다.',
    },
    {
      question: '할인 혜택은 어떻게 받나요?',
      answer: '평일 오후 6시 이전 입장 시 1인 1만원 자동 할인, 4인 이상 단체는 전체 금액의 5% 할인이 자동 적용됩니다. 재방문 고객은 3회 방문 시 10% 할인 쿠폰이 발급됩니다.',
    },
    {
      question: '카드 결제가 가능한가요?',
      answer: '네, 모든 신용카드 및 체크카드 결제가 가능합니다. 현금 결제도 가능하며, 영수증은 요청 시 즉시 발행됩니다.',
    },
    {
      question: '가격은 시간대별로 다른가요?',
      answer: '평일과 주말/공휴일 가격이 다릅니다. 주말은 평일 대비 1인당 2만원 추가됩니다. 시간대별 추가 요금은 없으며, 영업시간 내 동일한 가격이 적용됩니다.',
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
            { name: '가격', url: 'https://joayojjeomo.com/price' },
          ],
        }}
      />

      <Helmet>
        <title>강남 좋아요 쩜오 가격 | 2026 최신 요금표·할인 정보</title>
        <meta
          name="description"
          content="강남 좋아요 쩜오 최저가 가격 정보. 기본 2시간 룸 차지, 주류 1병, 기본 안주, 2차 초이스 무료 포함. 평일 오후 6시 이전 1인 1만원 할인, 4인 이상 단체 5% 할인. 카드·현금 결제 가능. 숨겨진 비용 없는 투명한 가격 정책. 010-2303-3778 전화 문의."
        />
        <meta name="keywords" content="강남 좋아요 쩜오 가격, 쩜오 요금, 강남 쩜오 가격표, 쩜오 할인, 강남역 쩜오 가격" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="f3dea6d285fb2dc860b67863ac7cbbeafdbda104" />
        <meta name="google-site-verification" content="D8ruhhI2B52KG5LrXWa8KeRe0lDhmJaTgoe0z8wFJ3s" />
        <link rel="canonical" href="https://joayojjeomo.com/price" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="강남 좋아요 쩜오 가격 | 2026 최신 요금표·할인 정보" />
        <meta property="og:description" content="최저가 가격 정보. 평일 오후 6시 이전 1인 1만원 할인. 투명한 가격 정책. 010-2303-3778" />
        <meta property="og:url" content="https://joayojjeomo.com/price" />
        <meta property="og:image" content="https://joayojjeomo.com/og-image-price.jpg" />
        <meta property="og:image:secure_url" content="https://joayojjeomo.com/og-image-price.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 좋아요 쩜오 가격 - 투명한 요금표와 할인 혜택" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joayojjeomo" />
        <meta name="twitter:creator" content="@joayojjeomo" />
        <meta name="twitter:title" content="강남 좋아요 쩜오 가격 | 2026 최신 요금표·할인 정보" />
        <meta name="twitter:description" content="최저가 가격 정보. 평일 오후 6시 이전 1인 1만원 할인. 투명한 가격 정책." />
        <meta name="twitter:image" content="https://joayojjeomo.com/og-image-price.jpg" />
        <meta name="twitter:image:alt" content="강남 좋아요 쩜오 가격 - 투명한 요금표와 할인 혜택" />
      </Helmet>

      <main className="min-h-screen bg-primary">
        {/* Hero 섹션 */}
        <section className="py-20 px-4 bg-dark-gradient">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-6 py-3 glass-card rounded-full mb-8">
              <span className="text-gold font-bold">투명한 가격 정책</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gold-gradient">강남 좋아요 쩜오 가격</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              숨겨진 비용 없는 명확한 가격 구조<br />
              2026년 최신 요금표를 투명하게 공개합니다
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-gold" />
                <span>사전 고지</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-gold" />
                <span>추가 과금 없음</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-gold" />
                <span>카드 결제 가능</span>
              </div>
            </div>
          </div>
        </section>

        {/* 안내 문단 */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                강남 좋아요는 처음 문의하시는 순간부터 명확한 금액을 안내해드립니다.
                예상치 못한 추가 비용으로 당황하시는 일이 없도록, 모든 포함 내역과 선택 사항을 사전에 투명하게 공개하는 것이 저희의 원칙입니다.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                가격만큼 중요한 것이 시스템에 대한 이해입니다.
                입장부터 퇴장까지의 전체 흐름을 미리 파악하고 싶으시다면 <Link to="/system" className="text-gold hover:underline font-semibold">운영 방식 안내</Link>를 먼저 읽어보시길 권해드리며,
                실제 방문하신 분들의 가성비 평가가 궁금하시다면 <Link to="/reviews" className="text-gold hover:underline font-semibold">고객 후기</Link>에서 솔직한 의견을 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 기본 가격 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">기본 요금</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 평일 가격 */}
              <div className="glass-card p-10 rounded-2xl border-2 border-gold/50">
                <div className="text-center mb-6">
                  <div className="text-gold text-2xl font-bold mb-2">평일 (월~목)</div>
                  <div className="text-4xl font-bold text-gold-gradient mb-4">최저가<br />유선문의</div>
                  <div className="text-gray-400">1인 기준</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">기본 2시간 룸 차지</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">주류 1병 포함</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">기본 안주 제공</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">1차·2차 초이스 무료</span>
                  </div>
                </div>
              </div>

              {/* 주말 가격 */}
              <div className="glass-card p-10 rounded-2xl border-2 border-gold">
                <div className="text-center mb-6">
                  <div className="text-gold text-2xl font-bold mb-2">주말·공휴일 (금~일)</div>
                  <div className="text-4xl font-bold text-gold-gradient mb-4">최저가<br />유선문의</div>
                  <div className="text-gray-400">1인 기준</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">평일과 동일한 서비스</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">예약 우선 배정</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">주말 특별 메뉴</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-gold flex-shrink-0" />
                    <span className="text-gray-300">연장 시간 유연 적용</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 비교 정보 */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">강남 지역 가격 비교</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-gray-400 mb-2">타 업소 A</div>
                  <div className="text-3xl font-bold text-gray-500">20만원~</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">타 업소 B</div>
                  <div className="text-3xl font-bold text-gray-500">18만원~</div>
                </div>
                <div className="border-2 border-gold rounded-lg p-4">
                  <div className="text-gold mb-2 font-bold">강남 좋아요</div>
                  <div className="text-2xl font-bold text-gold-gradient">최저가<br />유선문의</div>
                  <div className="text-sm text-gold mt-2">전화 문의 필수</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 추가 옵션 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">추가 옵션</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <div className="text-4xl mb-4">🍾</div>
                <h3 className="text-2xl font-bold text-gold mb-4">주류 추가</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>소주·맥주</span>
                    <span className="text-gold font-bold">5만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>양주 (기본)</span>
                    <span className="text-gold font-bold">7만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>양주 (프리미엄)</span>
                    <span className="text-gold font-bold">10만원</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-4">* 병당 가격</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="text-4xl mb-4">🍖</div>
                <h3 className="text-2xl font-bold text-gold mb-4">안주 추가</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>기본 안주</span>
                    <span className="text-gold font-bold">3만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>특선 안주</span>
                    <span className="text-gold font-bold">5만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>세트 메뉴</span>
                    <span className="text-gold font-bold">8만원</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-4">* 세트는 10% 할인</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-gold mb-4">시간 연장</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>30분 연장</span>
                    <span className="text-gold font-bold">5만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1시간 연장</span>
                    <span className="text-gold font-bold">9만원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2시간 연장</span>
                    <span className="text-gold font-bold">17만원</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-4">* 1인 기준</div>
                </div>
              </div>
            </div>

            {/* 이미지 추가 */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/room-5.jpg"
                  alt="강남 좋아요 VIP 룸"
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=VIP+Room'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xl font-bold text-gold mb-2">VIP 룸</div>
                    <div className="text-sm">프라이빗한 공간</div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/room-6.jpg"
                  alt="강남 좋아요 프리미엄 서비스"
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=Premium+Service'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xl font-bold text-gold mb-2">프리미엄 서비스</div>
                    <div className="text-sm">최상의 만족도</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 할인 혜택 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">할인 혜택</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl border-2 border-gold/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">⏰</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold">얼리버드 할인</h3>
                    <p className="text-gray-400">평일 오후 6시 이전 입장</p>
                  </div>
                </div>
                <div className="text-center py-6 bg-primary/50 rounded-lg">
                  <div className="text-4xl font-bold text-gold-gradient mb-2">1인 1만원</div>
                  <div className="text-gray-300">자동 할인 적용</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl border-2 border-gold/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">👥</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold">단체 할인</h3>
                    <p className="text-gray-400">4인 이상 방문 시</p>
                  </div>
                </div>
                <div className="text-center py-6 bg-primary/50 rounded-lg">
                  <div className="text-4xl font-bold text-gold-gradient mb-2">전체 5%</div>
                  <div className="text-gray-300">총 금액 할인</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl border-2 border-gold/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">🎫</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold">재방문 쿠폰</h3>
                    <p className="text-gray-400">3회 방문 시 발급</p>
                  </div>
                </div>
                <div className="text-center py-6 bg-primary/50 rounded-lg">
                  <div className="text-4xl font-bold text-gold-gradient mb-2">10% 할인</div>
                  <div className="text-gray-300">다음 방문 시 사용</div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl border-2 border-gold/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">🎉</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold">이벤트 할인</h3>
                    <p className="text-gray-400">시즌별 특별 할인</p>
                  </div>
                </div>
                <div className="text-center py-6 bg-primary/50 rounded-lg">
                  <div className="text-4xl font-bold text-gold-gradient mb-2">최대 20%</div>
                  <div className="text-gray-300">문의 후 확인</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 결제 방법 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">결제 방법</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCreditCard className="text-4xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">카드 결제</h3>
                <p className="text-gray-400">모든 신용·체크카드</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💵</span>
                </div>
                <h3 className="text-xl font-bold mb-2">현금 결제</h3>
                <p className="text-gray-400">영수증 즉시 발행</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-4xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">룸 결제</h3>
                <p className="text-gray-400">이동 없이 간편하게</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gold mb-4">가격 보장 정책</h3>
              <p className="text-gray-300 leading-relaxed">
                강남 좋아요는 투명한 가격 정책을 운영합니다. 입장 전 총 예상 금액을 안내받을 수 있으며,<br />
                <strong className="text-gold">동의 없는 추가 과금은 절대 발생하지 않습니다.</strong><br />
                서비스 불만족 시 부분 환불 정책도 운영하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">가격 관련 FAQ</span>
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
              합리적인 가격으로<br />프리미엄 서비스를 경험하세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              강남 좋아요는 최고의 가성비를 보장합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/info"
                className="px-10 py-5 bg-primary text-gold font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                예약 문의하기
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

export default PricePage
