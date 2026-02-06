import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaStar, FaCheckCircle, FaLightbulb, FaUserFriends } from 'react-icons/fa'
import SchemaMarkup from '../../components/SchemaMarkup'
import MobileCallButton from '../../components/MobileCallButton'

const SeolleungHomePage = () => {
  const faqs = [
    {
      question: '처음인데 혼자 가도 되나요?',
      answer: '네, 1인 방문도 가능합니다. 다만 쩜오는 일반적으로 2인 이상에 최적화된 시스템이라 2명 이상 방문을 권장드립니다. 1인 방문 시 추가 요금이 적용될 수 있으니 예약 시 미리 말씀해주세요.',
    },
    {
      question: '예산은 1인당 얼마 정도 준비해야 하나요?',
      answer: '최저가로 제공하고 있으며, 정확한 예산은 인원, 시간대, 옵션에 따라 달라집니다. 010-2303-3778로 전화 문의 시 상황에 맞는 최적의 예산을 안내해드립니다. 주류 추가나 시간 연장 시 추가 비용이 발생할 수 있습니다.',
    },
    {
      question: '초이스는 어떻게 진행되나요?',
      answer: '1차 초이스는 룸 입장 후 5-10분 내 진행됩니다. 매니저가 안내한 인원 중 선택하시면 되며, 부담 없이 자연스럽게 진행됩니다. 2차 초이스는 선택 사항이며, 원하시면 1시간 후 다시 진행할 수 있습니다.',
    },
    {
      question: '초이스를 안 하면 안 되나요?',
      answer: '초이스는 선택 사항입니다. 하지만 쩜오의 핵심 서비스이기 때문에 대부분 이용하시며, 초이스 없이는 일반 룸 이용 요금만 적용됩니다. 처음이라 부담스러우시다면 예약 시 미리 말씀해주세요.',
    },
    {
      question: '2차 초이스는 꼭 해야 하나요?',
      answer: '아니요, 2차 초이스는 선택 사항입니다. 1차 초이스로 만족하시면 그대로 이용하시면 되고, 분위기 전환을 원하시면 2차 초이스를 요청하실 수 있습니다. 추가 비용은 없습니다.',
    },
    {
      question: '예약 없이 가도 되나요?',
      answer: '평일에는 당일 방문도 가능하지만, 주말과 공휴일에는 예약이 필수입니다. 특히 저녁 8시 이후는 예약 고객 우선이므로 사전 예약을 권장합니다.',
    },
    {
      question: '복장은 어떻게 해야 하나요?',
      answer: '캐주얼한 복장으로 편하게 오셔도 됩니다. 슬리퍼, 민소매 등 지나치게 캐주얼한 복장만 피하시면 되며, 청바지와 티셔츠도 전혀 문제없습니다.',
    },
    {
      question: '주류는 어떤 걸 선택하면 좋나요?',
      answer: '기본으로 소주 1병이 포함되며, 양주로 변경 가능합니다. 처음이시라면 소주나 맥주를 추천드리며, 양주는 기본(7만원)과 프리미엄(10만원) 중 선택하실 수 있습니다.',
    },
    {
      question: '시간 연장은 어떻게 하나요?',
      answer: '기본 2시간이 끝나기 전 매니저에게 말씀하시면 됩니다. 30분 단위로 연장 가능하며, 30분당 1인 5만원이 추가됩니다. 룸 상황에 따라 연장이 어려울 수 있으니 미리 요청하세요.',
    },
    {
      question: '카드 결제가 되나요?',
      answer: '네, 모든 신용카드와 체크카드 결제가 가능합니다. 현금 결제도 가능하며, 영수증은 요청 시 즉시 발행됩니다.',
    },
    {
      question: '추가 비용은 어떤 게 있나요?',
      answer: '주류 추가(5-10만원), 안주 추가(3-5만원), 시간 연장(30분당 5만원)이 있습니다. 모든 추가 비용은 사전에 안내되며, 동의 없이 청구되지 않습니다.',
    },
    {
      question: '재방문 할인이 있나요?',
      answer: '네, 3회 방문 시 10% 할인 쿠폰이 발급됩니다. 또한 평일 오후 6시 이전 입장 시 1인 1만원 자동 할인이 적용됩니다.',
    },
    {
      question: '강남점과 선릉점 중 어디가 좋나요?',
      answer: '두 지점 모두 동일한 서비스를 제공하며, 위치만 다릅니다. 강남역이 가까우시면 강남점, 선릉역이 가까우시면 선릉점 이용을 권장합니다.',
    },
    {
      question: '처음인데 실수하지 않으려면 어떻게 해야 하나요?',
      answer: '예약 시 처음 방문이라고 미리 말씀해주시면 매니저가 단계별로 자세히 안내해드립니다. 또한 이용 시스템 페이지에서 전체 흐름을 미리 파악하시면 더욱 편안하게 이용하실 수 있습니다.',
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
      <SchemaMarkup type="organization" data={{ name: '선릉 좋아요 쩜오' }} />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: '홈', url: 'https://joayojjeomo.com/seolleung' },
            { name: '선릉 좋아요 쩜오', url: 'https://joayojjeomo.com/seolleung' },
          ],
        }}
      />

      <Helmet>
        <title>선릉 좋아요 쩜오 | 초보자 완벽 가이드 2026</title>
        <meta
          name="description"
          content="선릉역 도보 2분 선릉 좋아요 쩜오 초보자 완벽 가이드. 처음 방문하시는 분들을 위한 예약 팁, 초이스 요령, 예산 관리법까지 실전 노하우 총정리. 010-2303-3778 예약 문의. 2026년 최신 정보."
        />
        <meta name="keywords" content="선릉 좋아요, 선릉 쩜오, 쩜오 초보, 쩜오 처음, 선릉 유흥, 선릉역 쩜오, 초이스 팁" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joayojjeomo.com/seolleung" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="선릉 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="선릉 좋아요 쩜오 | 초보자 완벽 가이드 2026" />
        <meta property="og:description" content="선릉역 도보 2분 선릉 좋아요 쩜오. 초보자를 위한 완벽 가이드. 예약 팁, 초이스 요령, 예산 관리법 총정리. 010-2303-3778" />
        <meta property="og:url" content="https://joayojjeomo.com/seolleung" />
        <meta property="og:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="선릉 좋아요 쩜오 | 초보자 완벽 가이드 2026" />
        <meta name="twitter:description" content="선릉역 도보 2분 선릉 좋아요 쩜오. 초보자를 위한 완벽 가이드. 010-2303-3778" />
        <meta name="twitter:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />
      </Helmet>

      <main className="min-h-screen bg-dark-neon">
        {/* Hero 섹션 - 네온 스타일 */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-accent to-primary">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-neon-gradient"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="space-y-8">
              {/* 배지 */}
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-card-neon rounded-full animate-neon-pulse">
                <FaStar className="text-neon-pink" />
                <span className="text-sm md:text-base">초보자 환영</span>
              </div>

              {/* 메인 타이틀 - 네온 효과 */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block neon-text-pink">처음 방문하시나요?</span>
                <span className="block mt-4 neon-text-blue text-5xl md:text-7xl">
                  선릉 좋아요 쩜오
                </span>
                <span className="block mt-2 text-2xl md:text-4xl text-gray-300">
                  초보자 완벽 가이드
                </span>
              </h1>

              {/* 서브 타이틀 */}
              <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                선릉역 도보 2분 거리<br />
                초보자도 쉽게 이해하는 단계별 실전 가이드
              </p>

              {/* 주요 특징 */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-neon-pink" />
                  <span>예약 전 체크리스트</span>
                </div>
                <div className="h-4 w-px bg-neon-gradient" />
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-neon-blue" />
                  <span>초이스 실전 팁</span>
                </div>
                <div className="h-4 w-px bg-neon-gradient" />
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-neon-purple" />
                  <span>예산 계산법</span>
                </div>
              </div>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link
                  to="/seolleung/system"
                  className="px-8 py-4 neon-button text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300"
                >
                  초보 가이드 시작하기
                </Link>
                <Link
                  to="/seolleung/price"
                  className="px-8 py-4 glass-card-neon font-bold text-lg rounded-lg hover:border-neon-blue transition-all duration-300"
                >
                  예산 계산해보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 안내 문단 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card-neon p-8 md:p-12 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                처음 쩜오 방문을 고민하시는 분들께 실전 노하우를 알려드립니다.
                선릉 좋아요는 선릉역에서 걸어서 2분 거리에 위치한 쩜오로,
                초보자 분들도 부담 없이 이용하실 수 있도록 단계별 안내 시스템을
                갖추고 있습니다. 예약 방법부터 초이스 진행, 비용 정산까지
                막힘 없이 이해하실 수 있도록 실제 영업 매니저의 설명을
                바탕으로 작성한 가이드입니다.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                막연한 걱정보다는 미리 알고 가는 것이 훨씬 편합니다.
                <Link to="/seolleung/system" className="text-neon-pink hover:underline font-semibold ml-1">초이스 시스템 상세 가이드</Link>에서
                실제 진행 과정을 단계별로 확인하시고,
                <Link to="/seolleung/price" className="text-neon-blue hover:underline font-semibold ml-1">예산 계산 페이지</Link>에서
                인원별 비용을 미리 파악해보세요. 강남점과 비교하고 싶으시다면
                <Link to="/" className="text-neon-purple hover:underline font-semibold ml-1">강남 좋아요 이용 가이드</Link>도
                참고하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 처음 방문 전 알아야 할 3가지 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-pink">처음 방문 전</span>
              <span className="text-white"> 알아야 할 </span>
              <span className="neon-text-blue">3가지</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-neon-pink mb-4">1. 예약은 필수</h3>
                <p className="text-gray-300 leading-relaxed">
                  주말은 필수, 평일도 권장합니다. 예약 없이 방문 시 대기 시간이 길거나 입장이 어려울 수 있습니다.
                  전화 예약 시 인원, 시간, 처음 방문임을 미리 말씀해주세요.
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">👔</div>
                <h3 className="text-2xl font-bold text-neon-blue mb-4">2. 복장은 캐주얼 OK</h3>
                <p className="text-gray-300 leading-relaxed">
                  정장 필요 없습니다. 청바지와 티셔츠도 전혀 문제없으며, 편한 복장으로 오셔도 됩니다.
                  다만 슬리퍼, 민소매 등 지나치게 캐주얼한 복장은 피해주세요.
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">3. 예산 미리 문의</h3>
                <p className="text-gray-300 leading-relaxed">
                  최저가로 제공하고 있습니다. 정확한 비용은 인원과 옵션에 따라 달라지므로
                  010-2303-3778로 전화 문의하시면 최적의 예산을 안내해드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 예약 전 체크리스트 10가지 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">예약 전 체크리스트</span>
              <span className="text-neon-pink ml-3">10가지</span>
            </h2>

            <div className="space-y-4">
              {[
                '인원 확정하기 (최소 2인 권장)',
                '예산 범위 정하기 (1인 15-20만원)',
                '희망 시간대 선택 (저녁 8시 이후 인기)',
                '주차 여부 확인 (주차 가능, 요금 별도)',
                '전화번호 준비 (010-2303-3778)',
                '처음 방문임을 미리 말씀',
                '특별 요청 사항 전달 (생일, 기념일 등)',
                '선릉역 접근 방법 확인',
                '카드 또는 현금 준비',
                '예약 확정 문자 확인',
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-card-neon p-6 rounded-xl hover:border-neon-pink transition-all flex items-center gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-gradient flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 입장부터 퇴장까지 5단계 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">입장부터 퇴장까지 </span>
              <span className="neon-text-blue">5단계 실전 가이드</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: '입장 및 룸 배정',
                  description: '입구에서 예약 확인 후 전용 룸으로 안내받습니다. 룸 입장 후 5-10분 정도 대기하시면 매니저가 초이스 안내를 시작합니다.',
                  icon: '🚪',
                },
                {
                  step: 2,
                  title: '1차 초이스 진행',
                  description: '매니저가 안내한 인원 중 선택하시면 됩니다. 부담 없이 자연스럽게 진행되며, 선택 후 함께 대화하고 분위기를 즐기시면 됩니다.',
                  icon: '🎯',
                },
                {
                  step: 3,
                  title: '주류 및 안주 선택',
                  description: '기본 주류 1병이 포함되며, 추가 주문은 매니저에게 요청하시면 됩니다. 안주는 기본 제공되며, 추가 주문 가능합니다.',
                  icon: '🍾',
                },
                {
                  step: 4,
                  title: '2차 초이스 (선택)',
                  description: '1시간 후 분위기 전환을 원하시면 2차 초이스를 요청하실 수 있습니다. 선택 사항이며, 추가 비용은 없습니다.',
                  icon: '🔄',
                },
                {
                  step: 5,
                  title: '정산 및 퇴장',
                  description: '기본 2시간 후 정산합니다. 카드 또는 현금 결제 가능하며, 영수증은 요청 시 즉시 발행됩니다.',
                  icon: '💳',
                },
              ].map((step) => (
                <div key={step.step} className="glass-card-neon p-8 rounded-2xl">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="px-4 py-2 bg-neon-gradient rounded-lg font-bold text-primary">
                          STEP {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-neon-pink">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 실전 팁 8가지 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaLightbulb className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">실전 팁 모음</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '예약 시 처음 방문임을 꼭 말씀', desc: '매니저가 더 자세히 안내해드립니다' },
                { title: '초이스 시 부담 갖지 마세요', desc: '자연스럽게 선택하시면 됩니다' },
                { title: '시간 연장은 미리 요청', desc: '룸 상황에 따라 연장 불가할 수 있습니다' },
                { title: '추가 비용은 사전 확인', desc: '동의 없는 과금은 절대 없습니다' },
                { title: '매너와 에티켓 지키기', desc: '상호 존중이 가장 중요합니다' },
                { title: '예산 초과 시 솔직하게 말씀', desc: '기본 서비스만 이용도 가능합니다' },
                { title: '재방문 할인 쿠폰 챙기기', desc: '3회 방문 시 10% 할인됩니다' },
                { title: '평일 오후 6시 이전 입장', desc: '1인 1만원 자동 할인 적용' },
              ].map((tip, index) => (
                <div key={index} className="glass-card-neon p-6 rounded-xl hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-neon-pink mb-2">{tip.title}</h3>
                  <p className="text-gray-400">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ 섹션 (14개) */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">처음 방문자가 자주 묻는 질문</span>
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

        {/* CTA 섹션 */}
        <section className="py-20 px-4 neon-gradient-bg">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              이제 막막함은 없습니다<br />
              자신 있게 방문하세요
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              선릉 좋아요는 초보자를 환영합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2303-3778"
                className="px-10 py-5 bg-primary text-neon-pink font-bold text-xl rounded-lg shadow-neon-glow hover:scale-105 transition-all duration-300"
              >
                예약 문의하기
              </a>
              <Link
                to="/seolleung/system"
                className="px-10 py-5 glass-card-neon font-bold text-xl rounded-lg hover:bg-primary transition-all duration-300"
              >
                초이스 가이드 보기
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
              <FaUserFriends className="text-neon-purple" />
              <span className="text-sm">
                강남역이 더 가까우시다면
                <Link to="/" className="text-neon-pink hover:underline ml-1">강남 좋아요</Link>도 확인해보세요
              </span>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton phone="010-2303-3778" />
    </>
  )
}

export default SeolleungHomePage
