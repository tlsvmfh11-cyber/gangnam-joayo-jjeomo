import { Helmet } from 'react-helmet-async'
import { FaUserCheck, FaDoorOpen, FaMusic, FaClock, FaExchangeAlt } from 'react-icons/fa'
import SchemaMarkup from '../components/SchemaMarkup'
import { Link } from 'react-router-dom'
import MobileCallButton from '../components/MobileCallButton'

const SystemPage = () => {
  const faqs = [
    {
      question: '초이스 시스템은 어떻게 진행되나요?',
      answer: '1차 초이스는 라인업 형태로 진행됩니다. 입장 후 룸으로 이동하면 매니저가 라인업을 안내하며, 고객이 원하는 스타일을 직접 선택합니다. 평균 소요 시간은 15분이며, 편안하게 선택하실 수 있습니다.',
    },
    {
      question: '룸은 몇 명까지 이용 가능한가요?',
      answer: '룸 크기에 따라 2-10명까지 이용 가능합니다. 예약 시 인원을 전달하시면 적합한 룸으로 배정됩니다. 모든 룸에 LED 무드등과 프리미엄 음향 시스템이 설치되어 있습니다.',
    },
    {
      question: '이용 시간은 어떻게 되나요?',
      answer: '기본 2시간이 제공되며, 30분 단위로 연장 가능합니다. 시간 종료 30분 전에 연장 여부를 확인하며, 원하지 않으시면 시간에 맞춰 자연스럽게 마무리됩니다.',
    },
    {
      question: '추가 시간 연장은 가능한가요?',
      answer: '네, 30분 단위로 자유롭게 연장 가능합니다. 30분 연장 시 1인 5만원, 1시간 연장 시 1인 9만원입니다. 시간 종료 30분 전에 매니저가 안내합니다.',
    },
    {
      question: '처음 이용 시 주의사항은?',
      answer: '초이스 시 너무 오래 고민하지 않아도 괜찮습니다. 2차 초이스가 무료로 제공되므로 편안하게 선택하세요. 특별한 요청사항이 있으면 매니저에게 미리 전달하시면 됩니다.',
    },
  ]

  const steps = [
    {
      number: 1,
      title: '입장 및 안내',
      time: '5분',
      icon: <FaDoorOpen className="text-5xl text-gold" />,
      description: '예약 확인 후 전담 매니저 배정. 인원수와 원하는 분위기를 간단히 전달하면 적합한 룸으로 안내합니다.',
      details: [
        '신분증 확인 (성인 인증)',
        '전담 매니저 배정',
        '룸 이동 및 시설 안내',
        '기본 메뉴 설명',
      ],
    },
    {
      number: 2,
      title: '1차 초이스',
      time: '15분',
      icon: <FaUserCheck className="text-5xl text-gold" />,
      description: '라인업 형태로 진행. 고객이 원하는 스타일을 직접 선택하며, 편안하게 고민할 시간이 충분히 제공됩니다.',
      details: [
        '라인업 안내 (10-15명)',
        '스타일별 소개',
        '고객 선택 (복수 선택 가능)',
        '룸으로 이동',
      ],
    },
    {
      number: 3,
      title: '서비스 시작',
      time: '2시간',
      icon: <FaMusic className="text-5xl text-gold" />,
      description: '기본 2시간 동안 주류와 안주가 제공되며, 노래방 기능도 자유롭게 이용 가능. 프라이빗한 공간에서 편안한 시간을 보냅니다.',
      details: [
        '주류 1병 + 기본 안주 제공',
        '노래방 시스템 이용',
        'LED 무드등 조절 가능',
        '추가 주문 가능',
      ],
    },
    {
      number: 4,
      title: '2차 초이스 (선택)',
      time: '무료',
      icon: <FaExchangeAlt className="text-5xl text-gold" />,
      description: '서비스 중간에 교체를 원할 경우 2차 초이스 가능. 별도 비용 없이 매니저에게 요청하시면 즉시 진행됩니다.',
      details: [
        '무료 제공 (추가 비용 없음)',
        '매니저에게 요청',
        '즉시 교체 진행',
        '횟수 제한 없음',
      ],
    },
    {
      number: 5,
      title: '연장 및 종료',
      time: '30분 전',
      icon: <FaClock className="text-5xl text-gold" />,
      description: '기본 시간 종료 30분 전 연장 여부 확인. 원하지 않으시면 시간에 맞춰 자연스럽게 마무리되며, 룸에서 바로 계산 가능합니다.',
      details: [
        '종료 30분 전 안내',
        '연장 여부 선택',
        '룸 내 카드 결제',
        '자연스러운 퇴장',
      ],
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
            { name: '시스템', url: 'https://joayojjeomo.com/system' },
          ],
        }}
      />

      <Helmet>
        <title>강남 좋아요 쩜오 시스템 | 초이스·이용방법 5단계 가이드</title>
        <meta
          name="description"
          content="쩜오 처음이신가요? 입장부터 퇴장까지 5단계 완벽 가이드. 1·2차 초이스 시스템, 프라이빗 룸, 기본 2시간 제공. 2차 초이스 무료, 전담 매니저 배정. 2023년 리모델링 LED 무드등과 고급 음향. 쩜오 vs 룸살롱 vs 가라오케 차이점 비교. 처음 방문 시 주의사항 및 팁 공개."
        />
        <meta name="keywords" content="강남 좋아요 쩜오 시스템, 초이스 방식, 이용 방법, 쩜오 절차, 쩜오 vs 룸살롱" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="f3dea6d285fb2dc860b67863ac7cbbeafdbda104" />
        <meta name="google-site-verification" content="D8ruhhI2B52KG5LrXWa8KeRe0lDhmJaTgoe0z8wFJ3s" />
        <link rel="canonical" href="https://joayojjeomo.com/system" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="강남 좋아요 쩜오 시스템 | 초이스·이용방법 5단계 가이드" />
        <meta property="og:description" content="입장부터 퇴장까지 5단계 가이드. 1·2차 초이스 시스템, 2차 초이스 무료, 전담 매니저 배정." />
        <meta property="og:url" content="https://joayojjeomo.com/system" />
        <meta property="og:image" content="https://joayojjeomo.com/og-image-system.jpg" />
        <meta property="og:image:secure_url" content="https://joayojjeomo.com/og-image-system.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 좋아요 쩜오 시스템 - 1·2차 초이스 5단계 가이드" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joayojjeomo" />
        <meta name="twitter:creator" content="@joayojjeomo" />
        <meta name="twitter:title" content="강남 좋아요 쩜오 시스템 | 초이스·이용방법 5단계 가이드" />
        <meta name="twitter:description" content="입장부터 퇴장까지 5단계 가이드. 1·2차 초이스 시스템, 2차 초이스 무료." />
        <meta name="twitter:image" content="https://joayojjeomo.com/og-image-system.jpg" />
        <meta name="twitter:image:alt" content="강남 좋아요 쩜오 시스템 - 1·2차 초이스 5단계 가이드" />
      </Helmet>

      <main className="min-h-screen bg-primary">
        {/* Hero 섹션 */}
        <section className="py-20 px-4 bg-dark-gradient">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-6 py-3 glass-card rounded-full mb-8">
              <span className="text-gold font-bold">쩜오 시스템 완벽 가이드</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gold-gradient">강남 좋아요 쩜오 시스템</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              처음이셔도 걱정 없습니다<br />
              입장부터 퇴장까지 5단계로 쉽게 설명합니다
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>체계적인 안내</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>1·2차 초이스</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <span className="text-gold">✓</span>
                <span>전담 매니저</span>
              </div>
            </div>
          </div>
        </section>

        {/* 안내 문단 */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                쩜오를 처음 이용하시는 분들이 가장 궁금해하시는 부분은 '실제로 어떻게 진행되는가'입니다.
                온라인에서 아무리 설명을 읽어도 막상 도착하면 낯설게 느껴질 수 있기 때문에, 저희는 입장부터 퇴장까지의 모든 과정을 투명하게 안내하고 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                시스템을 이해하셨다면, 다음으로 확인하실 것은 실제 비용입니다. <Link to="/price" className="text-gold hover:underline font-semibold">요금 구조 페이지</Link>에서 포함 내역과 할인 조건을 살펴보시고,
                이미 경험하신 분들의 평가를 듣고 싶으시다면 <Link to="/reviews" className="text-gold hover:underline font-semibold">이용자 후기</Link>를 읽어보세요.
                방문 경로가 궁금하시다면 <Link to="/info" className="text-gold hover:underline font-semibold">오시는 길 정보</Link>에서 강남역으로부터의 도보 안내를 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 이용 절차 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">5단계 이용 절차</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="glass-card p-8 md:p-12 rounded-2xl"
                >
                  <div className="grid md:grid-cols-[auto_1fr] gap-8">
                    {/* 왼쪽: 번호 + 아이콘 */}
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center mb-4 text-primary text-3xl font-bold">
                        {step.number}
                      </div>
                      {step.icon}
                      <div className="mt-4 px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-bold">
                        {step.time}
                      </div>
                    </div>

                    {/* 오른쪽: 내용 */}
                    <div>
                      <h3 className="text-3xl font-bold text-gold mb-4">{step.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{step.description}</p>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-primary/50 rounded-lg">
                            <span className="text-gold">✓</span>
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 5단계 프로세스 이미지 */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/room-3.jpg"
                  alt="강남 좋아요 체계적인 시스템"
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=Systematic+Process'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xl font-bold text-gold mb-2">체계적인 시스템</div>
                    <div className="text-sm">입장부터 퇴장까지 전담 매니저 안내</div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/images/room-4.jpg"
                  alt="강남 좋아요 1·2차 초이스"
                  className="w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=Choice+System'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xl font-bold text-gold mb-2">1·2차 초이스</div>
                    <div className="text-sm">2차 초이스 무료 · 횟수 제한 없음</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 시스템 특징 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">강남 좋아요만의 시스템</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-gold mb-4">2차 초이스 무료</h3>
                <p className="text-gray-300 leading-relaxed">
                  타 업소는 추가 비용이 발생하지만, 강남 좋아요는 2차 초이스를 무료로 제공합니다.
                  횟수 제한도 없어 만족할 때까지 선택 가능합니다.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-2xl font-bold text-gold mb-4">전담 매니저 배정</h3>
                <p className="text-gray-300 leading-relaxed">
                  입장부터 퇴장까지 1:1 전담 매니저가 배정됩니다.
                  불편한 점이나 추가 요청사항을 언제든지 편하게 전달할 수 있습니다.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <div className="text-5xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-gold mb-4">프리미엄 룸 시스템</h3>
                <p className="text-gray-300 leading-relaxed">
                  2023년 리모델링으로 전 룸에 LED 무드등과 고급 음향 시스템을 설치했습니다.
                  프라이빗한 공간에서 편안한 시간을 보낼 수 있습니다.
                </p>
              </div>
            </div>

            {/* 프리미엄 룸 이미지 */}
            <div className="mt-16 relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/room-5.jpg"
                alt="강남 좋아요 프리미엄 룸 시스템"
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x600/1a1a1a/d4af37?text=Premium+Room+System'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent flex items-center p-12">
                <div className="text-white max-w-2xl">
                  <div className="text-4xl font-bold text-gold mb-4">프리미엄 룸 시스템</div>
                  <div className="text-xl mb-4">2023년 리모델링 완료 · LED 무드등 · 고급 음향</div>
                  <div className="text-gray-300">전 룸 프라이빗 보장 · 편안한 분위기</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 초보자 가이드 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">처음 방문 시 알아두면 좋은 팁</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
                  <span>✅</span> DO (권장)
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>예약 시 인원수와 원하는 분위기를 미리 전달하세요</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>초이스 시 너무 오래 고민하지 마세요 (2차 초이스 가능)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>연장 여부는 시간 종료 30분 전에 결정하세요</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>불편한 점은 매니저에게 바로 말씀하세요</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>주말 방문은 예약을 권장합니다</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
                  <span>❌</span> DON'T (주의)
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>무리한 요구나 불쾌한 언행은 삼가주세요</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>과도한 음주는 서비스 제한 사유가 됩니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>동의 없는 촬영은 절대 금지입니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>시설 파손 시 변상 책임이 있습니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl">•</span>
                    <p>예약 취소 시 반드시 연락해주세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 쩜오 vs 타 업종 비교 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">쩜오 vs 타 업종 비교</span>
            </h2>

            <div className="glass-card p-8 md:p-12 rounded-2xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="py-4 px-4 text-gold font-bold">구분</th>
                    <th className="py-4 px-4 text-gold font-bold">쩜오</th>
                    <th className="py-4 px-4 text-gray-400">룸살롱</th>
                    <th className="py-4 px-4 text-gray-400">가라오케</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gold/30">
                    <td className="py-4 px-4 font-bold">초이스 시스템</td>
                    <td className="py-4 px-4 text-gold">1·2차 초이스</td>
                    <td className="py-4 px-4">1차만</td>
                    <td className="py-4 px-4">없음</td>
                  </tr>
                  <tr className="border-b border-gold/30">
                    <td className="py-4 px-4 font-bold">룸 이동</td>
                    <td className="py-4 px-4 text-gold">별도 룸</td>
                    <td className="py-4 px-4">테이블</td>
                    <td className="py-4 px-4">노래방</td>
                  </tr>
                  <tr className="border-b border-gold/30">
                    <td className="py-4 px-4 font-bold">노래방 기능</td>
                    <td className="py-4 px-4 text-gold">있음</td>
                    <td className="py-4 px-4">없음</td>
                    <td className="py-4 px-4">있음</td>
                  </tr>
                  <tr className="border-b border-gold/30">
                    <td className="py-4 px-4 font-bold">프라이빗</td>
                    <td className="py-4 px-4 text-gold">높음</td>
                    <td className="py-4 px-4">중간</td>
                    <td className="py-4 px-4">높음</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">평균 가격</td>
                    <td className="py-4 px-4 text-gold">최저가 유선문의</td>
                    <td className="py-4 px-4">25만원~</td>
                    <td className="py-4 px-4">10만원~</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">시스템 관련 FAQ</span>
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
              시스템을 미리 알고 가면<br />더 편안하게 즐길 수 있습니다
            </h2>
            <p className="text-xl mb-8 opacity-90">
              처음이셔도 걱정 마세요. 친절하게 안내해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/info"
                className="px-10 py-5 bg-primary text-gold font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                예약하러 가기
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

export default SystemPage
