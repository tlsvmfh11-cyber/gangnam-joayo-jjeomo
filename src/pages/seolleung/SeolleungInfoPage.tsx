import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaClock, FaParking, FaPhone } from 'react-icons/fa'
import SchemaMarkup from '../../components/SchemaMarkup'
import MobileCallButton from '../../components/MobileCallButton'

const SeolleungInfoPage = () => {
  const faqs = [
    {
      question: '선릉역 몇 번 출구에서 가까운가요?',
      answer: '선릉역 5번 출구에서 걸어서 2분 거리입니다. 출구 나와서 직진 후 첫 번째 골목에서 우회전하시면 바로 보입니다.',
    },
    {
      question: '주차는 가능한가요?',
      answer: '네, 건물 지하 주차장 이용 가능하며 발렛 파킹 서비스도 지원합니다. 주차는 무료로 제공되며, 발렛 파킹 이용 시 예약 때 미리 말씀해주세요. 주차 공간이 제한적이므로 대중교통 이용을 권장합니다.',
    },
    {
      question: '영업시간이 어떻게 되나요?',
      answer: '매일 오후 6시부터 새벽 5시까지 영업합니다. 주말과 공휴일에는 오후 5시부터 영업하며, 라스트 오더는 새벽 4시입니다.',
    },
    {
      question: '예약은 어떻게 하나요?',
      answer: '전화 예약만 가능합니다. 010-2303-3778으로 전화주시면 예약 도와드립니다. 인원, 시간, 처음 방문 여부를 말씀해주세요.',
    },
    {
      question: '강남점과 선릉점 중 어디로 가야 할까요?',
      answer: '강남역이 가까우면 강남점, 선릉역이 가까우면 선릉점을 이용하세요. 두 지점 모두 서비스는 동일합니다.',
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
            { name: '정보', url: 'https://joayojjeomo.com/seolleung/info' },
          ],
        }}
      />

      <Helmet>
        <title>선릉역 선릉 좋아요 찾아가는 법 | 예약 전 체크리스트</title>
        <meta
          name="description"
          content="선릉역 5번 출구 도보 2분. 선릉 좋아요 쩜오 위치, 영업시간 18:00-05:00, 주차 무료 지원, 발렛 파킹, 예약 방법까지 한눈에 정리. 처음 방문 전 꼭 확인하세요. 010-2303-3778"
        />
        <meta name="keywords" content="선릉 좋아요 위치, 선릉역 쩜오, 찾아가는 법, 예약 방법, 주차 정보" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://joayojjeomo.com/seolleung/info" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="선릉 좋아요 쩜오" />
        <meta property="og:title" content="선릉역 선릉 좋아요 찾아가는 법 | 예약 전 체크리스트" />
        <meta property="og:description" content="선릉역 5번 출구 도보 2분. 영업시간 18:00-05:00, 주차 무료, 발렛 파킹 지원" />
        <meta property="og:url" content="https://joayojjeomo.com/seolleung/info" />
        <meta property="og:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="선릉역 선릉 좋아요 찾아가는 법" />
        <meta name="twitter:description" content="선릉역 5번 출구 도보 2분. 주차 무료, 발렛 파킹" />
        <meta name="twitter:image" content="https://joayojjeomo.com/images/seolleung/og-image.jpg" />
      </Helmet>

      <main className="min-h-screen bg-dark-neon pt-24">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary to-accent">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text-pink">선릉 좋아요 쩜오</span>
              <br />
              <span className="neon-text-blue text-3xl md:text-5xl mt-2 block">
                찾아가는 법
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              선릉역 5번 출구 도보 2분<br />
              위치·영업시간·예약 방법 한눈에
            </p>
          </div>
        </section>

        {/* 위치 정보 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaMapMarkerAlt className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">위치 정보</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">선릉역 기준</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">1️⃣</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">선릉역 5번 출구</h4>
                      <p>지하철 2호선 또는 분당선 선릉역 5번 출구로 나오세요.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">2️⃣</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">직진 후 우회전</h4>
                      <p>출구 나와서 직진 약 50m, 첫 번째 골목에서 우회전하세요.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">3️⃣</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">도보 2분</h4>
                      <p>골목으로 들어와서 20m 직진하면 왼쪽에 입구가 보입니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">주요 랜드마크</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>선릉역</span>
                    <span className="font-bold text-white">도보 2분</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>강남역</span>
                    <span className="font-bold text-white">차량 5분</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neon-blue/30">
                    <span>삼성역</span>
                    <span className="font-bold text-white">차량 7분</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>코엑스</span>
                    <span className="font-bold text-white">차량 10분</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card-neon p-6 rounded-xl text-center">
              <p className="text-lg text-gray-300">
                <span className="text-neon-pink font-bold">주소:</span> 서울 강남구 테헤란로 인근
                <span className="text-gray-500 ml-2">(정확한 주소는 예약 시 안내)</span>
              </p>
            </div>
          </div>
        </section>

        {/* 영업 시간 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaClock className="inline text-neon-blue mr-4" />
              <span className="text-white">영업 시간</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">평일</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">18:00 - 05:00</div>
                  <p className="text-gray-300">월요일 ~ 목요일</p>
                  <p className="text-gray-400 mt-4">라스트 오더: 새벽 4시</p>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl border-neon-blue">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">주말/공휴일</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">17:00 - 05:00</div>
                  <p className="text-gray-300">금요일, 토요일, 공휴일 전날</p>
                  <p className="text-gray-400 mt-4">라스트 오더: 새벽 4시</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-6 rounded-xl">
                <h4 className="text-xl font-bold text-neon-purple mb-4">할인 시간대</h4>
                <p className="text-gray-300">
                  평일 오후 6시 이전 입장 시 1인 1만원 자동 할인
                </p>
              </div>
              <div className="glass-card-neon p-6 rounded-xl">
                <h4 className="text-xl font-bold text-neon-pink mb-4">인기 시간대</h4>
                <p className="text-gray-300">
                  저녁 8시 ~ 11시 / 주말은 예약 필수
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 주차 정보 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaParking className="inline text-neon-purple mr-4" />
              <span className="neon-text-gradient">주차 안내</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-neon-pink mb-4">건물 지하 주차장</h3>
                <p className="text-gray-300">
                  건물 지하 주차장 이용 가능<br />
                  <span className="text-neon-pink font-bold">무료 지원</span>
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center border-neon-blue">
                <div className="text-5xl mb-4">💯</div>
                <h3 className="text-2xl font-bold text-neon-blue mb-4">주차비 무료</h3>
                <p className="text-gray-300">
                  이용 시간 내<br />
                  <span className="text-neon-blue font-bold">주차 요금 없음</span>
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center border-neon-pink">
                <div className="text-5xl mb-4">🔑</div>
                <h3 className="text-2xl font-bold text-neon-pink mb-4">발렛 파킹 지원</h3>
                <p className="text-gray-300">
                  발렛 서비스 이용 가능<br />
                  예약 시 미리 말씀
                </p>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">🚇</div>
                <h3 className="text-2xl font-bold text-neon-purple mb-4">대중교통 권장</h3>
                <p className="text-gray-300">
                  주차 공간 제한적<br />
                  지하철 이용 추천
                </p>
              </div>
            </div>

            <div className="mt-12 glass-card-neon p-6 rounded-xl text-center">
              <p className="text-lg text-gray-300">
                <span className="text-neon-pink font-bold">참고:</span> 발렛 파킹 이용 시 예약 시 미리 말씀해주세요. 주말과 저녁 시간대는 주차 공간이 부족할 수 있으니
                <span className="text-neon-blue font-bold"> 대중교통 이용을 권장합니다.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 예약 방법 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <FaPhone className="inline text-neon-pink mr-4" />
              <span className="neon-text-gradient">예약 방법</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-pink mb-6">전화 예약</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h4 className="font-bold text-white text-2xl mb-2">010-2303-3778</h4>
                      <p>매일 18:00 ~ 새벽 5:00 전화 가능</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📝</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">예약 시 말씀해주세요</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>방문 인원</li>
                        <li>희망 시간대</li>
                        <li>처음 방문 여부</li>
                        <li>특별 요청사항</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">예약 팁</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">주말은 필수 예약</h4>
                      <p className="text-gray-300">금/토/공휴일 전날은 예약 없이 입장 어렵습니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">평일도 예약 권장</h4>
                      <p className="text-gray-300">원하는 시간대 보장을 위해 예약을 권장합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="font-bold text-white mb-2">처음 방문 꼭 말씀</h4>
                      <p className="text-gray-300">매니저가 더 자세히 안내해드립니다.</p>
                    </div>
                  </div>
                </div>
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
              위치 확인했다면<br />
              지금 바로 예약하세요
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              방문 전에
              <Link to="/seolleung/system" className="text-neon-pink hover:underline mx-1">초이스 시스템</Link>과
              <Link to="/seolleung/price" className="text-neon-blue hover:underline mx-1">가격 정보</Link>도 확인하시고,
              <Link to="/seolleung/reviews" className="text-neon-purple hover:underline mx-1">실제 후기</Link>도 읽어보세요.
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
            <div className="mt-8 text-gray-400">
              <p>강남역이 더 가까우시다면 <Link to="/info" className="text-neon-pink hover:underline">강남 좋아요 위치 정보</Link>도 확인해보세요</p>
            </div>
          </div>
        </section>
      </main>
      <MobileCallButton phone="010-2303-3778" />
    </>
  )
}

export default SeolleungInfoPage
