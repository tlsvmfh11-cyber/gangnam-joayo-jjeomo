import { Helmet } from 'react-helmet-async'
import { FaMapMarkerAlt, FaClock, FaPhone, FaParking, FaSubway, FaBus } from 'react-icons/fa'
import SchemaMarkup from '../components/SchemaMarkup'
import { Link } from 'react-router-dom'
import MobileCallButton from '../components/MobileCallButton'

const InfoPage = () => {
  const faqs = [
    {
      question: '주차는 가능한가요?',
      answer: '네, 건물 지하 주차장을 이용하실 수 있습니다. 2시간 무료 주차가 제공되며, 초과 시 시간당 3,000원입니다. 주차 공간이 제한적이므로 가급적 대중교통 이용을 권장합니다.',
    },
    {
      question: '영업시간은 어떻게 되나요?',
      answer: '평일·주말·공휴일 모두 오후 6시부터 새벽 6시까지 운영합니다. 연중무휴로 운영되며, 특별한 휴무일은 없습니다. 예약은 24시간 상담 가능합니다.',
    },
    {
      question: '강남역 몇 번 출구가 가까운가요?',
      answer: '강남역 10번 출구에서 도보 3분 거리입니다. 출구로 나와 직진하시면 1층에 편의점이 있는 건물이 보이며, 해당 건물 5층에 위치합니다.',
    },
    {
      question: '대중교통으로 가는 방법은?',
      answer: '지하철 2호선 또는 신분당선 강남역 10번 출구 이용 시 가장 가깝습니다. 버스는 강남역 정류장에서 하차 후 도보 5분 소요됩니다.',
    },
    {
      question: '예약 문의는 어디로 하나요?',
      answer: '전화(010-2303-3778) 또는 카카오톡으로 예약하실 수 있습니다. 24시간 상담이 가능하며, 주말·공휴일에는 사전 예약을 권장합니다.',
    },
  ]

  return (
    <>
      <SchemaMarkup type="faq" data={{ faqs }} />
      <SchemaMarkup type="local-business" />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: '홈', url: 'https://joayojjeomo.com/' },
            { name: '강남 좋아요 쩜오', url: 'https://joayojjeomo.com/' },
            { name: '정보', url: 'https://joayojjeomo.com/info' },
          ],
        }}
      />

      <Helmet>
        <title>강남 좋아요 쩜오 정보 | 위치·영업·예약 총정리 2026</title>
        <meta
          name="description"
          content="강남역 10번 출구 도보 3분. PM 6:00~AM 6:00 연중무휴 운영. 지하철 2호선·신분당선 이용 가능. 건물 지하 주차장 2시간 무료. 전화 010-2303-3778, 카카오톡 24시간 예약 가능. 주말·공휴일 사전 예약 권장. 방문 전 필수 확인 정보 총정리."
        />
        <meta name="keywords" content="강남 좋아요 쩜오 정보, 위치, 영업시간, 예약 방법, 강남역, 강남역 10번 출구" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="f3dea6d285fb2dc860b67863ac7cbbeafdbda104" />
        <meta name="google-site-verification" content="D8ruhhI2B52KG5LrXWa8KeRe0lDhmJaTgoe0z8wFJ3s" />
        <link rel="canonical" href="https://joayojjeomo.com/info" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="강남 좋아요 쩜오 정보 | 위치·영업·예약 총정리 2026" />
        <meta property="og:description" content="강남역 10번 출구 도보 3분. PM 6:00~AM 6:00 연중무휴. 24시간 예약 가능. 010-2303-3778" />
        <meta property="og:url" content="https://joayojjeomo.com/info" />
        <meta property="og:image" content="https://joayojjeomo.com/og-image-info.jpg" />
        <meta property="og:image:secure_url" content="https://joayojjeomo.com/og-image-info.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 좋아요 쩜오 위치 - 강남역 10번 출구 도보 3분" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joayojjeomo" />
        <meta name="twitter:creator" content="@joayojjeomo" />
        <meta name="twitter:title" content="강남 좋아요 쩜오 정보 | 위치·영업·예약 총정리 2026" />
        <meta name="twitter:description" content="강남역 10번 출구 도보 3분. PM 6:00~AM 6:00 연중무휴. 24시간 예약 가능." />
        <meta name="twitter:image" content="https://joayojjeomo.com/og-image-info.jpg" />
        <meta name="twitter:image:alt" content="강남 좋아요 쩜오 위치 - 강남역 10번 출구 도보 3분" />
      </Helmet>

      <main className="min-h-screen bg-primary">
        {/* Hero 섹션 */}
        <section className="py-20 px-4 bg-dark-gradient">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-block px-6 py-3 glass-card rounded-full mb-8">
              <span className="text-gold font-bold">방문 필수 정보</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gold-gradient">강남 좋아요 쩜오 정보</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              위치, 영업시간, 예약 방법까지<br />
              방문 전 꼭 알아야 할 모든 정보
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold" />
                <span>강남역 도보 3분</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <FaClock className="text-gold" />
                <span>PM 6:00 ~ AM 6:00</span>
              </div>
              <div className="h-4 w-px bg-gold" />
              <div className="flex items-center gap-2">
                <FaPhone className="text-gold" />
                <span>24시간 상담</span>
              </div>
            </div>
          </div>
        </section>

        {/* 안내 문단 */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                처음 방문을 계획 중이시라면, 위치 확인만큼 중요한 것이 전체적인 이용 흐름을 이해하는 것입니다.
                강남역에서 가깝다는 것만 알고 오시는 것보다, 입장 후 어떤 방식으로 진행되는지 미리 알고 오시면 훨씬 여유롭게 즐기실 수 있거든요.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                예를 들어 <Link to="/system" className="text-gold hover:underline font-semibold">초이스 방식 소개</Link>를 읽어보시면 1차와 2차 선택이 어떻게 이루어지는지 구체적으로 파악하실 수 있고,
                <Link to="/price" className="text-gold hover:underline font-semibold">비용 안내</Link>에서는 기본 포함 항목이 무엇인지 명확히 확인하실 수 있습니다.
                실제 이용하신 분들의 접근성 평가가 궁금하시다면 <Link to="/reviews" className="text-gold hover:underline font-semibold">방문 후기</Link>에서 교통편 관련 의견도 살펴보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 위치 정보 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">오시는 길</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 주소 정보 */}
              <div>
                <div className="glass-card p-8 rounded-xl mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-3xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gold">주소</h3>
                      <p className="text-gray-400">서울 강남구 강남대로</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p className="leading-relaxed">
                      <strong className="text-gold">건물명:</strong> ㅇㅇ빌딩 5층<br />
                      <strong className="text-gold">랜드마크:</strong> 1층 편의점 (GS25)
                    </p>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gold mb-6">찾아오는 방법</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gold font-bold">1</span>
                      </div>
                      <p>강남역 10번 출구로 나옵니다</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gold font-bold">2</span>
                      </div>
                      <p>출구에서 직진 (약 3분)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gold font-bold">3</span>
                      </div>
                      <p>1층 GS25 편의점이 있는 건물 5층</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 교통 정보 */}
              <div>
                <div className="glass-card p-8 rounded-xl mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                      <FaSubway className="text-3xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gold">지하철</h3>
                      <p className="text-gray-400">가장 편한 방법</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-primary/50 rounded-lg">
                      <div>
                        <div className="text-gold font-bold mb-1">2호선 강남역</div>
                        <div className="text-gray-400 text-sm">10번 출구 도보 3분</div>
                      </div>
                      <div className="text-gold font-bold text-xl">추천</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-primary/50 rounded-lg">
                      <div>
                        <div className="text-gold font-bold mb-1">신분당선 강남역</div>
                        <div className="text-gray-400 text-sm">10번 출구 도보 3분</div>
                      </div>
                      <div className="text-gold font-bold text-xl">추천</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-xl mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                      <FaBus className="text-3xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gold">버스</h3>
                      <p className="text-gray-400">강남역 정류장 하차</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p><strong className="text-gold">간선:</strong> 140, 146, 341, 360, 362</p>
                    <p><strong className="text-gold">지선:</strong> 3412, 4412, 6411</p>
                    <p><strong className="text-gold">광역:</strong> 1100, 1700, 2000, 7007</p>
                    <p className="text-sm text-gray-400">* 정류장에서 도보 5분</p>
                  </div>
                </div>

                <div className="glass-card p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                      <FaParking className="text-3xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gold">주차</h3>
                      <p className="text-gray-400">건물 지하 주차장</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p><strong className="text-gold">무료:</strong> 2시간</p>
                    <p><strong className="text-gold">초과:</strong> 시간당 3,000원</p>
                    <p className="text-sm text-gray-400">* 주차 공간 제한적 (대중교통 권장)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 위치 이미지 */}
            <div className="mt-16 relative h-80 rounded-2xl overflow-hidden">
              <img
                src="/images/room-1.jpg"
                alt="강남역 10번 출구 도보 3분"
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x500/1a1a1a/d4af37?text=Easy+Access+Location'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center p-12">
                <div className="text-white max-w-lg">
                  <div className="text-3xl font-bold text-gold mb-4">강남역에서 도보 3분</div>
                  <div className="text-lg">지하철 2호선·신분당선 강남역 10번 출구 직진</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 영업 정보 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">영업 안내</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaClock className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-4">영업시간</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-xl font-bold">PM 6:00 ~ AM 6:00</p>
                  <p className="text-sm text-gray-400">평일·주말·공휴일 동일</p>
                  <p className="text-sm text-gold">연중무휴</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPhone className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-4">예약·문의</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-xl font-bold">010-2303-3778</p>
                  <p className="text-sm text-gray-400">24시간 상담 가능</p>
                  <p className="text-sm text-gold">카카오톡 예약 가능</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl text-center">
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📅</span>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-4">예약 권장</h3>
                <div className="space-y-2 text-gray-300">
                  <p className="text-xl font-bold">주말·공휴일</p>
                  <p className="text-sm text-gray-400">평일은 당일 가능</p>
                  <p className="text-sm text-gold">미리 예약 시 대기 없음</p>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">예약 방법</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-primary text-sm">1</span>
                    전화 예약
                  </h4>
                  <div className="space-y-2 text-gray-300 pl-10">
                    <p>• 010-2303-3778로 전화</p>
                    <p>• 방문 날짜·시간·인원 전달</p>
                    <p>• 특별 요청사항 전달 (선택)</p>
                    <p>• 예약 확정 문자 수신</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-primary text-sm">2</span>
                    카카오톡 예약
                  </h4>
                  <div className="space-y-2 text-gray-300 pl-10">
                    <p>• 카카오톡 ID 검색</p>
                    <p>• 방문 정보 메시지 전송</p>
                    <p>• 실시간 상담 가능</p>
                    <p>• 예약 확정 답변 수신</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 영업 안내 이미지 */}
            <div className="mt-16 relative h-80 rounded-2xl overflow-hidden">
              <img
                src="/images/room-2.jpg"
                alt="강남 좋아요 24시간 예약 상담"
                className="w-full h-full object-cover"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1200x500/1a1a1a/d4af37?text=24hr+Reservation'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/90 to-transparent flex items-center justify-end p-12">
                <div className="text-white text-right max-w-lg">
                  <div className="text-3xl font-bold text-gold mb-4">24시간 예약·문의</div>
                  <div className="text-lg mb-2">전화: 010-2303-3778</div>
                  <div className="text-gray-300">연중무휴 · 주말·공휴일도 운영</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 추가 정보 섹션 */}
        <section className="py-20 px-4 bg-accent">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">알아두면 좋은 정보</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6">방문 전 준비사항</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-gold">✓</span>
                    <p>예산 미리 계획하기 (최저가 유선문의)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold">✓</span>
                    <p>주말 방문 시 예약 필수</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold">✓</span>
                    <p>원하는 분위기 미리 생각해두기</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold">✓</span>
                    <p>대중교통 이용 권장</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold">✓</span>
                    <p>예약 시 특별 요청사항 전달</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gold mb-6">취소 및 변경</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="p-4 bg-primary/50 rounded-lg">
                    <h4 className="font-bold text-gold mb-2">예약 취소</h4>
                    <p>방문 2시간 전까지 가능<br />위약금 없음</p>
                  </div>
                  <div className="p-4 bg-primary/50 rounded-lg">
                    <h4 className="font-bold text-gold mb-2">예약 변경</h4>
                    <p>방문 2시간 전까지 가능<br />전화로 변경 요청</p>
                  </div>
                  <div className="p-4 bg-primary/50 rounded-lg">
                    <h4 className="font-bold text-gold mb-2">노쇼 방지</h4>
                    <p>불가피한 사정 시 반드시 연락<br />노쇼 3회 시 예약 제한</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-20 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gold-gradient">방문 정보 FAQ</span>
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
              강남역 도보 3분<br />찾아오기 쉬운 위치
            </h2>
            <p className="text-xl mb-8 opacity-90">
              24시간 예약·문의 가능
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2303-3778"
                className="px-10 py-5 bg-primary text-gold font-bold text-xl rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                지금 전화하기
              </a>
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

export default InfoPage
