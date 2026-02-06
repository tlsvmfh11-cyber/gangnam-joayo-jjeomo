import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import SystemSection from '../components/SystemSection'
import PriceSection from '../components/PriceSection'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import SchemaMarkup from '../components/SchemaMarkup'
import MobileCallButton from '../components/MobileCallButton'

const HomePage = () => {
  const faqs = [
    {
      question: '강남 좋아요 쩜오는 어떤 곳인가요?',
      answer: '강남 좋아요는 강남역 인근에 위치한 프리미엄 쩜오 업소입니다. 고급스러운 인테리어와 체계적인 초이스 시스템을 갖추고 있으며, 합리적인 가격으로 VIP 서비스를 경험할 수 있습니다.',
    },
    {
      question: '강남 좋아요 쩜오 가격은 얼마인가요?',
      answer: '기본 요금은 시간대와 인원에 따라 달라지며, 평일 기준 1인 15만원부터 시작합니다. 자세한 가격은 가격 페이지에서 확인하실 수 있습니다. 각종 할인 혜택도 제공됩니다.',
    },
    {
      question: '예약은 필수인가요?',
      answer: '주말과 공휴일에는 예약을 권장합니다. 평일에는 당일 방문도 가능하지만, 원하는 시간대 이용을 위해서는 사전 예약이 좋습니다.',
    },
    {
      question: '처음 방문해도 이용하기 쉬운가요?',
      answer: '네, 처음 방문하시는 분들도 쉽게 이용하실 수 있도록 체계적인 시스템과 친절한 안내를 제공합니다. 시스템 페이지에서 이용 절차를 미리 확인하실 수 있습니다.',
    },
    {
      question: '강남역에서 얼마나 걸리나요?',
      answer: '강남역 10번 출구에서 도보 3분 거리에 위치해 있어 접근성이 매우 좋습니다. 정확한 위치와 찾아오는 방법은 정보 페이지에서 확인하세요.',
    },
  ]

  return (
    <>
      <SchemaMarkup type="faq" data={{ faqs }} />
      <SchemaMarkup type="local-business" />
      <SchemaMarkup type="organization" />
      <SchemaMarkup
        type="breadcrumb"
        data={{
          breadcrumbs: [
            { name: '홈', url: 'https://joayojjeomo.com/' },
            { name: '강남 좋아요 쩜오', url: 'https://joayojjeomo.com/' },
          ],
        }}
      />

      <Helmet>
        <title>강남 좋아요 쩜오 | 2026 가격·후기·시스템 완벽 가이드</title>
        <meta
          name="description"
          content="강남역 도보 3분 프리미엄 쩜오 강남 좋아요. 투명한 가격, 실제 이용 후기, 1·2차 초이스 시스템까지 완벽 정리. 처음 방문하시는 분들도 쉽게 이해할 수 있도록 체계적으로 안내합니다. 010-2303-3778 예약 문의 24시간 가능. 2026년 최신 정보."
        />
        <meta name="keywords" content="강남 좋아요, 강남 쩜오, 쩜오 가격, 쩜오 후기, 강남 유흥, 강남역 쩜오, 초이스 시스템" />
        <meta name="robots" content="index, follow" />
        <meta name="naver-site-verification" content="f3dea6d285fb2dc860b67863ac7cbbeafdbda104" />
        <meta name="google-site-verification" content="D8ruhhI2B52KG5LrXWa8KeRe0lDhmJaTgoe0z8wFJ3s" />
        <link rel="canonical" href="https://joayojjeomo.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="강남 좋아요 쩜오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content="강남 좋아요 쩜오 | 2026 가격·후기·시스템 완벽 가이드" />
        <meta property="og:description" content="강남역 도보 3분 프리미엄 쩜오. 투명한 가격, 실제 후기, 1·2차 초이스 시스템. 24시간 예약 상담 가능. 010-2303-3778" />
        <meta property="og:url" content="https://joayojjeomo.com/" />
        <meta property="og:image" content="https://joayojjeomo.com/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://joayojjeomo.com/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="강남 좋아요 쩜오 - 강남역 도보 3분 프리미엄 쩜오" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joayojjeomo" />
        <meta name="twitter:creator" content="@joayojjeomo" />
        <meta name="twitter:title" content="강남 좋아요 쩜오 | 2026 가격·후기·시스템 완벽 가이드" />
        <meta name="twitter:description" content="강남역 도보 3분 프리미엄 쩜오. 투명한 가격, 실제 후기, 1·2차 초이스 시스템. 24시간 예약 상담 가능." />
        <meta name="twitter:image" content="https://joayojjeomo.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="강남 좋아요 쩜오 - 강남역 도보 3분 프리미엄 쩜오" />
      </Helmet>

      <main>
        <HeroSection />
        <SystemSection />
        <PriceSection />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <MobileCallButton />
    </>
  )
}

export default HomePage
