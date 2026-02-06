import { Helmet } from 'react-helmet-async'

interface FAQItem {
  question: string
  answer: string
}

interface SchemaMarkupProps {
  type: 'faq' | 'breadcrumb' | 'local-business' | 'organization'
  data?: {
    faqs?: FAQItem[]
    breadcrumbs?: { name: string; url: string }[]
  }
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  let schema = {}

  switch (type) {
    case 'faq':
      if (data?.faqs) {
        schema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      }
      break

    case 'breadcrumb':
      if (data?.breadcrumbs) {
        schema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      }
      break

    case 'local-business':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'NightClub',
        name: '강남 좋아요 쩜오',
        alternateName: '강남 좋아요',
        description: '강남역 도보 3분 거리 프리미엄 쩜오. 투명한 가격, 1·2차 초이스 시스템, 프라이빗 룸 제공.',
        url: 'https://joayojjeomo.com',
        telephone: '+82-10-2303-3778',
        image: [
          'https://joayojjeomo.com/og-image.jpg',
          'https://joayojjeomo.com/images/room-1.jpg',
          'https://joayojjeomo.com/images/room-2.jpg',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: '서울',
          addressRegion: '강남구',
          streetAddress: '강남대로',
          addressCountry: 'KR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '37.4979',
          longitude: '127.0276',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '18:00',
            closes: '23:59',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '06:00',
          },
        ],
        priceRange: '₩₩₩',
        servesCuisine: 'Korean',
        acceptsReservations: true,
        paymentAccepted: '현금, 카드',
        currenciesAccepted: 'KRW',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1',
        },
        amenityFeature: [
          {
            '@type': 'LocationFeatureSpecification',
            name: '프라이빗 룸',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: '주차 가능',
            value: true,
          },
          {
            '@type': 'LocationFeatureSpecification',
            name: '예약 필수',
            value: true,
          },
        ],
      }
      break

    case 'organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '강남 좋아요 쩜오',
        alternateName: '강남 좋아요',
        url: 'https://joayojjeomo.com',
        logo: 'https://joayojjeomo.com/logo.png',
        description: '강남역 도보 3분, 프리미엄 쩜오 서비스',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '서울',
          addressRegion: '강남구',
          streetAddress: '강남대로',
          addressCountry: 'KR',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+82-10-2303-3778',
          contactType: '예약 문의',
          availableLanguage: ['Korean'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '18:00',
            closes: '06:00',
          },
        },
        sameAs: ['https://joayojjeomo.com'],
      }
      break
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default SchemaMarkup
