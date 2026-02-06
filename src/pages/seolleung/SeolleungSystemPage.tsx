import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaUserCheck, FaGlassCheers, FaHandshake } from 'react-icons/fa'
import SchemaMarkup from '../../components/SchemaMarkup'
import MobileCallButton from '../../components/MobileCallButton'

const SeolleungSystemPage = () => {
  const faqs = [
    {
      question: '1차 초이스는 언제 진행되나요?',
      answer: '룸 입장 후 5-10분 내에 진행됩니다. 매니저가 안내하므로 별도로 요청하실 필요 없습니다.',
    },
    {
      question: '초이스를 거절해도 되나요?',
      answer: '네, 초이스는 선택 사항입니다. 하지만 쩜오의 핵심 서비스이므로 대부분 이용하십니다. 부담스러우시면 예약 시 미리 말씀하세요.',
    },
    {
      question: '2차 초이스는 어떻게 요청하나요?',
      answer: '매니저에게 직접 요청하시면 됩니다. 보통 1시간 후 진행 가능하며, 추가 비용은 없습니다.',
    },
    {
      question: '초이스 시 주의할 점은?',
      answer: '상호 존중과 매너가 가장 중요합니다. 무리한 요구나 불쾌한 발언은 삼가주세요. 처음이라면 자연스럽게 대화하시면 됩니다.',
    },
    {
      question: '초이스를 변경할 수 있나요?',
      answer: '2차 초이스를 통해 변경 가능합니다. 1차 초이스 변경은 특별한 사유가 있을 때만 가능하니 신중하게 선택하세요.',
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
            { name: '시스템', url: 'https://joayojjeomo.com/seolleung/system' },
          ],
        }}
      />

      <Helmet>
        <title>선릉 좋아요 쩜오 초이스 시스템 완벽 가이드 | 1차·2차 초이스 방법</title>
        <meta
          name="description"
          content="선릉 좋아요 쩜오 초이스 시스템 완벽 해부. 1차/2차 초이스 진행 방법, 매너와 에티켓, 초보자 실수 방지 가이드. 룸 입장 후 5-10분 내 진행, 추가 비용 없음. 010-2303-3778 문의."
        />
        <meta name="keywords" content="선릉 좋아요 초이스, 쩜오 시스템, 초이스 방법, 초보자 가이드" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joayojjeomo.com/seolleung/system" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="선릉 좋아요 쩜오" />
        <meta property="og:title" content="선릉 좋아요 쩜오 초이스 시스템 완벽 가이드" />
        <meta property="og:description" content="1차/2차 초이스 진행 방법, 매너와 에티켓, 초보자 실수 방지 가이드" />
        <meta property="og:url" content="https://joayojjeomo.com/seolleung/system" />
        <meta property="og:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="선릉 좋아요 쩜오 초이스 시스템 가이드" />
        <meta name="twitter:description" content="1차/2차 초이스 진행 방법 완벽 정리" />
        <meta name="twitter:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />
      </Helmet>

      <main className="min-h-screen bg-dark-neon pt-24">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary to-accent">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text-pink">선릉 좋아요</span>
              <br />
              <span className="neon-text-blue text-3xl md:text-5xl mt-2 block">
                초이스 시스템 실전 가이드
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              처음 방문자를 위한 초이스 시스템 완벽 설명<br />
              1차/2차 초이스 진행 방법과 매너
            </p>
          </div>
        </section>

        {/* 초이스 시스템이란? */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaUserCheck className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">초이스 시스템이란?</span>
            </h2>

            <div className="glass-card-neon p-8 md:p-12 rounded-2xl mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                초이스 시스템은 쩜오의 핵심 서비스로, 고객님이 함께 시간을 보낼 분을 선택하는 과정입니다.
                매니저가 여러 분을 순차적으로 안내하며, 고객님이 편안하게 대화를 나눌 수 있는 분을 선택하시면 됩니다.
                부담 없이 자연스럽게 진행되며, 처음이시라도 어렵지 않습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-4">1차 초이스</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">✓</span>
                    <span>룸 입장 후 5-10분 내 진행</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">✓</span>
                    <span>매니저가 3-5명 순차 안내</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">✓</span>
                    <span>각 1-2분씩 대화 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink">✓</span>
                    <span>마음에 드는 분 선택</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">2차 초이스</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">✓</span>
                    <span>선택 사항 (필수 아님)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">✓</span>
                    <span>1시간 후 요청 가능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">✓</span>
                    <span>분위기 전환 원할 때</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-blue">✓</span>
                    <span>추가 비용 없음</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 1차 초이스 상세 가이드 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-white">1차 초이스 </span>
              <span className="neon-text-pink">상세 가이드</span>
            </h2>

            <div className="space-y-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">1️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neon-pink mb-4">룸 입장 및 대기</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      예약 확인 후 전용 룸으로 안내받습니다. 자리에 앉아 5-10분 정도 대기하시면
                      매니저가 초이스 안내를 시작합니다. 이 시간 동안 주류나 안주를 선택하실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">2️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neon-blue mb-4">매니저 안내 시작</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      매니저가 여러 분을 순차적으로 안내합니다. 각 분과 1-2분씩 대화할 수 있으며,
                      자연스럽게 이야기를 나누시면 됩니다. 질문을 하거나 대화를 이어가는 것이 좋습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">3️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neon-purple mb-4">선택 및 확정</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      모든 안내가 끝나면 마음에 드는 분을 선택합니다. 매니저에게 번호나 이름을 말씀하시면 되며,
                      선택하신 분이 함께 자리하게 됩니다. 이후 2시간 동안 함께 시간을 보냅니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2차 초이스 팁 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="neon-text-gradient">2차 초이스 활용 팁</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">2차 초이스란?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  1차 초이스 후 1시간 정도 지나면 매니저에게 2차 초이스를 요청할 수 있습니다.
                  분위기를 전환하고 싶거나 다른 분과 대화를 원하실 때 선택하는 서비스입니다.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• 추가 비용 없음</li>
                  <li>• 선택 사항 (필수 아님)</li>
                  <li>• 1시간 후 요청 가능</li>
                  <li>• 분위기 전환 목적</li>
                </ul>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">언제 활용할까?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✓</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">분위기 전환</h4>
                      <p className="text-gray-300">대화가 어색하거나 분위기를 바꾸고 싶을 때</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✓</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">다양한 대화</h4>
                      <p className="text-gray-300">여러 분과 대화하고 싶을 때</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✓</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">재미 추가</h4>
                      <p className="text-gray-300">더 즐거운 시간을 원할 때</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 매너와 에티켓 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaHandshake className="inline text-neon-purple mr-4" />
              <span className="text-white">매너와 에티켓</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">✅ 지켜야 할 매너</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-neon-pink text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">상호 존중</h4>
                      <p>서로를 존중하는 태도가 가장 중요합니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-pink text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">자연스러운 대화</h4>
                      <p>편안하게 대화를 나누세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-pink text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">적절한 시간 배분</h4>
                      <p>초이스 시간은 1-2분씩 공평하게</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-pink text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">신중한 선택</h4>
                      <p>한 번 선택하면 변경이 어렵습니다</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">❌ 피해야 할 행동</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-neon-blue text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">무리한 요구</h4>
                      <p>부적절하거나 무리한 요청은 삼가주세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-blue text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">불쾌한 발언</h4>
                      <p>상대방을 불편하게 하는 말이나 행동 금지</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-blue text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">신체 접촉</h4>
                      <p>과도한 신체 접촉은 금지됩니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon-blue text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">사진 촬영</h4>
                      <p>본인 및 타인 사진 촬영 금지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 초보자 실수 방지 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaGlassCheers className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">초보자 실수 방지 가이드</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">흔한 실수 TOP 5</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="pb-4 border-b border-neon-pink/30">
                    <h4 className="font-bold text-white mb-2">1. 너무 긴장하기</h4>
                    <p>편안하게 대화하세요. 매니저가 도와드립니다.</p>
                  </div>
                  <div className="pb-4 border-b border-neon-pink/30">
                    <h4 className="font-bold text-white mb-2">2. 초이스 거부하기</h4>
                    <p>초이스는 쩜오의 핵심입니다. 부담 없이 선택하세요.</p>
                  </div>
                  <div className="pb-4 border-b border-neon-pink/30">
                    <h4 className="font-bold text-white mb-2">3. 성급한 선택</h4>
                    <p>모든 분을 보고 신중하게 선택하세요.</p>
                  </div>
                  <div className="pb-4 border-b border-neon-pink/30">
                    <h4 className="font-bold text-white mb-2">4. 매너 무시</h4>
                    <p>상호 존중이 가장 중요합니다.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">5. 예산 초과</h4>
                    <p>추가 비용은 미리 확인하세요.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">성공적인 이용 팁</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">예약 시 처음 방문 말씀</h4>
                      <p className="text-gray-300">매니저가 더 자세히 안내해드립니다</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">자연스럽게 대화</h4>
                      <p className="text-gray-300">편안하게 이야기를 나누세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">예산 미리 말씀</h4>
                      <p className="text-gray-300">추가 비용 걱정 없이 이용하세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">2차 초이스 활용</h4>
                      <p className="text-gray-300">분위기 전환을 원하시면 요청하세요</p>
                    </div>
                  </div>
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
              초이스 시스템 이해했다면<br />
              자신 있게 방문하세요
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              시스템을 이해하셨다면
              <Link to="/seolleung/price" className="text-neon-pink hover:underline mx-1">가격 정보</Link>도 확인하시고,
              <Link to="/seolleung/reviews" className="text-neon-blue hover:underline mx-1">실제 후기</Link>와
              <Link to="/seolleung/info" className="text-neon-purple hover:underline mx-1">위치 정보</Link>도 알아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="tel:010-2303-3778"
                className="px-10 py-5 bg-primary text-neon-pink font-bold text-xl rounded-lg shadow-neon-glow hover:scale-105 transition-all"
              >
                예약 문의하기
              </a>
              <Link
                to="/seolleung"
                className="px-10 py-5 glass-card-neon font-bold text-xl rounded-lg hover:bg-primary transition-all"
              >
                홈으로 돌아가기
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>강남역이 더 가까우시다면
                <Link to="/system" className="text-neon-pink hover:underline ml-1">강남 좋아요 시스템 안내</Link>도 참고하세요
              </p>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton phone="010-2303-3778" />
    </>
  )
}

export default SeolleungSystemPage
