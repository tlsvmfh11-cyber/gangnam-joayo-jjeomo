import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

interface ImageGalleryProps {
  title?: string
  images: string[]
}

const ImageGallery = ({ title = '매장 사진', images }: ImageGalleryProps) => {
  // 실제 이미지가 없는 경우 placeholder 사용
  const displayImages = images.length > 0 ? images : [
    '/images/room-1.jpg',
    '/images/room-2.jpg',
    '/images/room-3.jpg',
    '/images/room-4.jpg',
    '/images/room-5.jpg',
  ]

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gold-gradient">{title}</span>
        </h2>

        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            effect="fade"
            breakpoints={{
              768: {
                slidesPerView: 2,
                effect: 'slide',
              },
              1024: {
                slidesPerView: 3,
                effect: 'slide',
              },
            }}
            className="rounded-2xl overflow-hidden"
          >
            {displayImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-80 md:h-96 bg-accent rounded-xl overflow-hidden group">
                  <img
                    src={image}
                    alt={`강남 좋아요 매장 사진 ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable={false}
                    onError={(e) => {
                      // 이미지 로드 실패 시 placeholder 표시
                      e.currentTarget.src = `https://via.placeholder.com/800x600/1a1a1a/d4af37?text=Image+${index + 1}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xl font-bold text-gold mb-2">강남 좋아요</div>
                      <div className="text-sm">프리미엄 쩜오 매장</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 text-center glass-card p-6 rounded-xl">
          <p className="text-gray-300">
            <strong className="text-gold">2023년 12월 리모델링</strong>으로 전 룸에 프리미엄 시설을 갖추었습니다.<br />
            LED 무드등, 고급 음향 시스템, 깨끗한 인테리어로 최상의 분위기를 제공합니다.
          </p>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(212, 175, 55, 0.5);
        }
        .swiper-pagination-bullet-active {
          background: #d4af37;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #d4af37;
        }
      `}</style>
    </section>
  )
}

export default ImageGallery
