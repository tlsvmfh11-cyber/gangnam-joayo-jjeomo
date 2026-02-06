import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaCalculator, FaPercent, FaCoins } from 'react-icons/fa'
import SchemaMarkup from '../../components/SchemaMarkup'
import MobileCallButton from '../../components/MobileCallButton'

const SeolleungPricePage = () => {
  const faqs = [
    {
      question: '가격은 얼마인가요?',
      answer: '최저가로 제공하고 있으며, 정확한 가격은 유선 문의 부탁드립니다. 010-2303-3778로 전화주시면 인원, 시간대, 옵션에 따른 최적의 가격을 안내해드립니다.',
    },
    {
      question: '전화로 문의하면 어떤 정보를 알 수 있나요?',
      answer: '인원별 정확한 비용, 시간대별 할인 정보, 이벤트 가격, 패키지 할인 등 다양한 혜택을 안내해드립니다. 010-2303-3778로 부담 없이 문의하세요.',
    },
    {
      question: '추가 비용은 어떤 게 있나요?',
      answer: '주류 추가(5-10만원), 안주 추가(3-5만원), 시간 연장(30분당 1인 5만원)이 있습니다. 모든 추가 비용은 사전에 안내되며, 동의 없이 청구되지 않습니다.',
    },
    {
      question: '할인 받을 수 있는 방법이 있나요?',
      answer: '평일 오후 6시 이전 입장 시 1인 1만원 자동 할인, 3회 재방문 시 10% 할인 쿠폰이 있습니다. 예약 시 할인 여부를 확인하세요.',
    },
    {
      question: '카드 할부가 가능한가요?',
      answer: '네, 모든 신용카드 할부 결제가 가능합니다. 무이자 할부는 카드사별로 다르니 결제 시 확인하세요.',
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
            { name: '가격', url: 'https://joayojjeomo.com/seolleung/price' },
          ],
        }}
      />

      <Helmet>
        <title>선릉 좋아요 쩜오 최저가 보장 | 투명한 가격 안내·유선 문의</title>
        <meta
          name="description"
          content="선릉 좋아요 쩜오 최저가 보장. 인원, 시간대, 이벤트별 맞춤 가격 안내. 정확한 비용은 010-2303-3778 유선 문의. 추가 비용 항목, 할인 정보, 예산 절약 팁까지 투명하게 공개. 평일 6시 이전 1만원 할인."
        />
        <meta name="keywords" content="선릉 좋아요 가격, 선릉 쩜오 비용, 쩜오 최저가, 유선 문의" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joayojjeomo.com/seolleung/price" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="선릉 좋아요 쩜오" />
        <meta property="og:title" content="선릉 좋아요 쩜오 최저가 보장 | 투명한 가격 안내" />
        <meta property="og:description" content="선릉 좋아요 쩜오 최저가 보장. 인원, 시간대별 맞춤 가격. 010-2303-3778 유선 문의." />
        <meta property="og:url" content="https://joayojjeomo.com/seolleung/price" />
        <meta property="og:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="선릉 좋아요 쩜오 최저가 보장" />
        <meta name="twitter:description" content="인원, 시간대별 맞춤 가격. 010-2303-3778 유선 문의" />
        <meta name="twitter:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />
      </Helmet>

      <main className="min-h-screen bg-dark-neon pt-24">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary to-accent">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <FaCalculator className="inline text-6xl text-neon-pink mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text-pink">선릉 좋아요 쩜오</span>
              <br />
              <span className="neon-text-blue text-3xl md:text-5xl mt-2 block">
                초보자 예산 가이드
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              최저가 보장<br />
              정확한 가격은 유선 문의 (010-2303-3778)
            </p>
            <div className="glass-card-neon p-6 rounded-xl max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                선릉 좋아요 쩜오의 가격은 인원, 시간대, 이벤트에 따라 최적화된 맞춤 견적으로 제공됩니다.
                기본 비용 구조부터 추가 비용, 할인 혜택, 예산 절약 팁까지 투명하게 공개합니다.
                정확한 비용은 010-2303-3778로 전화 문의하시면 상황에 맞는 최저가를 안내해드립니다.
                처음 방문하시는 분들도 부담 없이 예산을 계획하실 수 있도록 상세하게 정리했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 기본 비용 구조 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">기본 비용 구조</span>
            </h2>

            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              <div className="glass-card-neon p-12 rounded-2xl text-center border-neon-pink">
                <div className="text-8xl mb-6">📞</div>
                <h3 className="text-3xl font-bold text-neon-pink mb-6">최저가 보장</h3>
                <p className="text-6xl font-bold text-white mb-4">유선 문의</p>
                <a href="tel:010-2303-3778" className="text-4xl text-neon-blue hover:text-neon-pink transition-colors">
                  010-2303-3778
                </a>
                <ul className="mt-8 text-left space-y-3 text-gray-300 text-lg">
                  <li>✓ 인원별 맞춤 가격 안내</li>
                  <li>✓ 시간대별 할인 정보</li>
                  <li>✓ 이벤트 및 패키지 할인</li>
                  <li>✓ 최저가 보장</li>
                </ul>
                <div className="mt-8 p-4 bg-neon-pink/10 rounded-lg">
                  <p className="text-neon-pink font-bold">
                    💡 전화 문의 시 더욱 저렴한 가격으로 이용 가능합니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 가격 문의 방법 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">정확한 가격은 </span>
              <span className="neon-text-pink">전화로 확인하세요</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-6xl mb-6">👥</div>
                <h3 className="text-2xl font-bold text-neon-pink mb-4">인원별 맞춤 가격</h3>
                <p className="text-gray-300 leading-relaxed">
                  2인, 4인, 단체 등<br />
                  인원에 따라<br />
                  최적의 가격 안내
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-6xl mb-6">⏰</div>
                <h3 className="text-2xl font-bold text-neon-blue mb-4">시간대별 할인</h3>
                <p className="text-gray-300 leading-relaxed">
                  평일 6시 이전,<br />
                  주말, 심야 등<br />
                  시간대별 가격 안내
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-6xl mb-6">🎁</div>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">이벤트 할인</h3>
                <p className="text-gray-300 leading-relaxed">
                  재방문 쿠폰,<br />
                  단체 할인 등<br />
                  진행 중인 이벤트 안내
                </p>
              </div>
            </div>

            <div className="mt-12 glass-card-neon p-10 rounded-2xl text-center">
              <p className="text-2xl text-gray-300 mb-6">
                전화 한 통으로 모든 비용 정보를 정확하게 안내받으세요
              </p>
              <a
                href="tel:010-2303-3778"
                className="inline-block px-12 py-6 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold text-2xl rounded-lg shadow-neon-glow hover:scale-105 transition-all"
              >
                📞 010-2303-3778
              </a>
              <p className="text-sm text-gray-400 mt-4">
                상담 가능 시간: 오후 6시 ~ 새벽 5시
              </p>
            </div>
          </div>
        </section>

        {/* 추가 비용 항목 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaCoins className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">추가 비용 항목</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">주류 추가</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center pb-3 border-b border-neon-pink/30">
                    <span>소주 추가 (1병)</span>
                    <span className="font-bold text-white">5만원</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-pink/30">
                    <span>맥주 추가 (4캔)</span>
                    <span className="font-bold text-white">5만원</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-pink/30">
                    <span>양주 기본</span>
                    <span className="font-bold text-white">7만원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>양주 프리미엄</span>
                    <span className="font-bold text-white">10만원</span>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">기타 추가 비용</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>안주 추가</span>
                    <span className="font-bold text-white">3-5만원</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>시간 연장 (30분, 1인)</span>
                    <span className="font-bold text-white">5만원</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>2차 초이스 (선택)</span>
                    <span className="font-bold text-white">무료</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>주차</span>
                    <span className="font-bold text-neon-blue">무료</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>발렛 파킹 (선택)</span>
                    <span className="font-bold text-neon-blue">무료</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card-neon p-6 rounded-xl text-center">
              <p className="text-lg text-gray-300">
                <span className="text-neon-pink font-bold">중요:</span> 모든 추가 비용은 사전에 안내되며,
                <span className="text-neon-blue font-bold"> 동의 없는 과금은 절대 없습니다.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 할인 받는 법 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaPercent className="inline text-neon-purple mr-4" />
              <span className="text-white">할인 받는 법 </span>
              <span className="neon-text-pink">3가지</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">🕐</div>
                <h3 className="text-2xl font-bold text-neon-pink mb-4">평일 6시 이전</h3>
                <p className="text-4xl font-bold text-white mb-4">1만원 할인</p>
                <p className="text-gray-300 leading-relaxed">
                  평일 오후 6시 이전 입장 시 1인당 1만원 자동 할인. 예약 없이도 적용됩니다.
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="text-2xl font-bold text-neon-blue mb-4">재방문 쿠폰</h3>
                <p className="text-4xl font-bold text-white mb-4">10% 할인</p>
                <p className="text-gray-300 leading-relaxed">
                  3회 방문 시 10% 할인 쿠폰 발급. 4회차 방문 시 사용 가능합니다.
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">단체 예약</h3>
                <p className="text-4xl font-bold text-white mb-4">협의 가능</p>
                <p className="text-gray-300 leading-relaxed">
                  6인 이상 단체 예약 시 할인 협의 가능. 예약 시 문의하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 예산 절약 팁 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">예산 절약 팁</span>
            </h2>

            <div className="space-y-6">
              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-pink mb-2">평일 이용하기</h3>
                  <p className="text-gray-300">주말보다 1인당 3만원 저렴합니다. 평일 6시 이전이면 추가 1만원 할인.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-blue mb-2">기본 시간 지키기</h3>
                  <p className="text-gray-300">2시간 기본 시간만 이용하면 추가 비용 없습니다. 시간 연장은 30분당 1인 5만원.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-purple mb-2">기본 주류 이용</h3>
                  <p className="text-gray-300">기본 주류(소주/맥주)로도 충분합니다. 양주는 추가 비용 7-10만원.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-pink mb-2">재방문 쿠폰 활용</h3>
                  <p className="text-gray-300">3회 방문 후 10% 할인 쿠폰 사용하면 1인당 1.5-2만원 절약.</p>
                </div>
              </div>

              <div className="glass-card-neon p-6 rounded-xl flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-neon-blue mb-2">예산 미리 말씀</h3>
                  <p className="text-gray-300">예약 시 예산 한도를 말씀하시면 그에 맞춰 안내해드립니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 초보자 예산 관리 팁 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-pink">초보자를 위한</span>
              <span className="text-white"> 예산 관리법</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">예약 시 예산 미리 알리기</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  전화 예약할 때 예산 한도를 미리 말씀하시면 그에 맞춰 최적의 플랜을 안내해드립니다.
                  예를 들어 "2명이서 50만원 이내로 이용하고 싶어요"라고 말씀하시면
                  그 범위 내에서 최상의 서비스를 추천해드립니다.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>예산 한도 명확히 전달</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>인원수와 희망 시간 함께 말씀</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>추가 옵션 필요 여부 상담</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">추가 비용 미리 확인하기</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  모든 추가 비용은 사전에 안내되며, 동의 없이 청구되지 않습니다.
                  하지만 미리 알고 계시면 예산 관리가 더 쉽습니다.
                  주류 추가, 안주 추가, 시간 연장 등을 고려하여 10-20만원 여유를 두시면 좋습니다.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">•</span>
                    <span>기본 요금에 10-20% 추가 여유</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">•</span>
                    <span>시간 연장 원하면 미리 계산</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">•</span>
                    <span>주류 선택은 취향에 맞게</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">할인 혜택 적극 활용</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  평일 6시 이전 입장 시 1인 1만원 자동 할인, 3회 재방문 시 10% 할인 쿠폰 등
                  다양한 할인 혜택이 있습니다. 예약 시 할인 가능 여부를 확인하세요.
                  단체 예약(6인 이상)은 별도 할인 협의도 가능합니다.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-purple">•</span>
                    <span>평일 오후 방문으로 할인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-purple">•</span>
                    <span>재방문 쿠폰 챙기기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-purple">•</span>
                    <span>단체 예약 시 할인 문의</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">결제 방법 선택하기</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  모든 신용카드 및 체크카드 결제가 가능하며, 할부도 지원됩니다.
                  현금 결제 시 영수증 즉시 발행 가능하고, 카드사별 무이자 할부 혜택도 있으니
                  결제 전 확인하시면 좋습니다.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>카드 할부 가능 (카드사별 상이)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>현금 결제도 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">•</span>
                    <span>영수증 발행 즉시 처리</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 가격 관련 자주 묻는 질문 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">가격 관련 </span>
              <span className="neon-text-blue">궁금증</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card-neon p-6 rounded-xl">
                <h3 className="text-xl font-bold text-neon-pink mb-3">💰 예산 초과 걱정되시나요?</h3>
                <p className="text-gray-300 leading-relaxed">
                  예약 시 예산을 미리 말씀하시면 절대 초과하지 않도록 안내해드립니다.
                  모든 추가 비용은 사전 동의 후에만 발생하므로 걱정하지 않으셔도 됩니다.
                </p>
              </div>

              <div className="glass-card-neon p-6 rounded-xl">
                <h3 className="text-xl font-bold text-neon-blue mb-3">📞 전화 문의가 번거로우신가요?</h3>
                <p className="text-gray-300 leading-relaxed">
                  정확한 가격은 인원과 시간대에 따라 달라집니다. 전화 문의 시 1-2분 내에
                  명확한 견적을 받으실 수 있어 오히려 더 빠르고 정확합니다.
                </p>
              </div>

              <div className="glass-card-neon p-6 rounded-xl">
                <h3 className="text-xl font-bold text-neon-purple mb-3">🎁 할인은 어떻게 받나요?</h3>
                <p className="text-gray-300 leading-relaxed">
                  평일 6시 이전은 자동 할인, 재방문 쿠폰은 3회 방문 시 자동 발급됩니다.
                  예약 시 할인 가능 여부를 확인하시면 더 많은 혜택을 받으실 수 있습니다.
                </p>
              </div>

              <div className="glass-card-neon p-6 rounded-xl">
                <h3 className="text-xl font-bold text-neon-pink mb-3">💳 카드 할부 가능한가요?</h3>
                <p className="text-gray-300 leading-relaxed">
                  네, 모든 신용카드 할부 결제가 가능합니다. 무이자 할부는 카드사별로 다르니
                  결제 시 확인하시면 됩니다. 현금 결제도 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-primary">
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
              예산 계산 끝났다면<br />
              지금 바로 예약하세요
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              가격 확인하셨다면
              <Link to="/seolleung/system" className="text-neon-pink hover:underline mx-1">초이스 시스템</Link>도 미리 알아보시고,
              <Link to="/seolleung/reviews" className="text-neon-blue hover:underline mx-1">실제 후기</Link>도 참고하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:010-2303-3778"
                className="px-10 py-5 bg-primary text-neon-pink font-bold text-xl rounded-lg shadow-neon-glow hover:scale-105 transition-all"
              >
                최저가 문의하기
              </a>
              <Link
                to="/seolleung/info"
                className="px-10 py-5 glass-card-neon font-bold text-xl rounded-lg hover:bg-primary transition-all"
              >
                위치·영업시간 보기
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>강남역이 더 가까우시다면
                <Link to="/price" className="text-neon-purple hover:underline ml-1">강남 좋아요 가격 정보</Link>도 비교해보세요
              </p>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton phone="010-2303-3778" />
    </>
  )
}

export default SeolleungPricePage
