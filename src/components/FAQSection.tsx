import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '강남 좋아요 쩜오는 어떤 곳인가요?',
      answer: (
        <>
          강남 좋아요는 강남역 인근에 위치한 프리미엄 쩜오 업소입니다. 고급스러운 인테리어와 체계적인 초이스 시스템을 갖추고 있으며, 합리적인 가격으로 VIP 서비스를 경험할 수 있습니다. 실제 이용하신 고객들의 평가가 궁금하시다면{' '}
          <Link to="/reviews" className="text-gold hover:underline">
            이용 후기 모음
          </Link>
          에서 생생한 경험담을 확인해보세요.
        </>
      ),
    },
    {
      question: '강남 좋아요 쩜오 가격은 얼마인가요?',
      answer: (
        <>
          기본 요금은 시간대와 인원에 따라 달라지며, 투명한 가격 정책을 운영하고 있습니다. 평일 오후 할인과 단체 할인 등 다양한 혜택이 준비되어 있어요.{' '}
          <Link to="/price" className="text-gold hover:underline">
            요금 안내 페이지
          </Link>
          를 방문하시면 포함 내역부터 할인 정보까지 한눈에 파악하실 수 있습니다.
        </>
      ),
    },
    {
      question: '예약은 필수인가요?',
      answer: (
        <>
          주말과 공휴일에는 예약을 권장합니다. 평일에는 당일 방문도 가능하지만, 원하는 시간대 이용을 위해서는 사전 예약이 좋습니다. 예약 방법과 영업시간 등 운영 관련 정보는{' '}
          <Link to="/info" className="text-gold hover:underline">
            위치 및 운영 정보
          </Link>
          에서 안내하고 있습니다.
        </>
      ),
    },
    {
      question: '처음 방문해도 이용하기 쉬운가요?',
      answer: (
        <>
          네, 처음 방문하시는 분들도 쉽게 이용하실 수 있도록 체계적인 시스템과 친절한 안내를 제공합니다. 입장부터 퇴장까지 5단계로 나누어 설명한{' '}
          <Link to="/system" className="text-gold hover:underline">
            이용 시스템 가이드
          </Link>
          를 미리 읽어보시면 더욱 편안하게 방문하실 수 있어요.
        </>
      ),
    },
    {
      question: '강남역에서 얼마나 걸리나요?',
      answer: (
        <>
          강남역 10번 출구에서 도보 3분 거리에 위치해 있어 접근성이 매우 좋습니다. 지하철 이용 방법, 주차 안내, 주변 랜드마크 등 찾아오시는 길에 대한 상세한 안내는{' '}
          <Link to="/info" className="text-gold hover:underline">
            오시는 길 안내
          </Link>
          에서 확인하실 수 있습니다.
        </>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-4xl">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">자주 묻는 질문</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          <p className="text-gray-300 mt-6 text-lg">
            궁금하신 점을 빠르게 확인하세요
          </p>
        </div>

        {/* FAQ 아코디언 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden hover:border-gold transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <span className="text-gold flex-shrink-0">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gold/30 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 추가 문의 */}
        <div className="mt-12 text-center glass-card p-8 rounded-xl">
          <p className="text-gray-300 mb-4">더 궁금하신 점이 있으신가요?</p>
          <a
            href="/info"
            className="inline-block px-8 py-4 bg-gold-gradient text-primary font-bold text-lg rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
          >
            문의하기
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
