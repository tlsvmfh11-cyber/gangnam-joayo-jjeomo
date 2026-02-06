import { FaUserFriends, FaDoorOpen, FaClock } from 'react-icons/fa'

const SystemSection = () => {
  const systems = [
    {
      icon: <FaUserFriends className="text-5xl text-gold" />,
      title: '1·2차 초이스',
      description: '라인업 형태로 진행되는 1차 초이스와 무료 2차 초이스 시스템으로 원하는 스타일을 정확히 선택할 수 있습니다.',
    },
    {
      icon: <FaDoorOpen className="text-5xl text-gold" />,
      title: '프라이빗 룸',
      description: '2023년 리모델링한 프리미엄 룸은 LED 무드등과 고급 음향 시스템을 갖추고 있어 편안한 분위기를 제공합니다.',
    },
    {
      icon: <FaClock className="text-5xl text-gold" />,
      title: '유연한 시간',
      description: '기본 2시간 제공, 30분 단위 연장 가능. 시간 종료 30분 전 안내로 여유있게 결정하실 수 있습니다.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-accent" >
      <div className="container mx-auto max-w-6xl">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">강남 좋아요</span> 시스템
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
          <p className="text-gray-300 mt-6 text-lg">
            처음 방문하시는 분들도 쉽게 이용할 수 있는 체계적인 시스템
          </p>
        </div>

        {/* 시스템 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
                                          className="glass-card p-8 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-gold-glow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="mb-4">{system.icon}</div>
                <h3 className="text-2xl font-bold text-gold">{system.title}</h3>
                <p className="text-gray-300 leading-relaxed">{system.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 이미지 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative h-80 rounded-2xl overflow-hidden" >
            <img
              src="/images/room-1.jpg"
              alt="강남 좋아요 프리미엄 룸"
              className="w-full h-full object-cover"
              draggable={false}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=Premium+Room'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xl font-bold text-gold mb-2">프리미엄 룸</div>
                <div className="text-sm">고급스러운 인테리어</div>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden" >
            <img
              src="/images/room-2.jpg"
              alt="강남 좋아요 LED 무드등"
              className="w-full h-full object-cover"
              draggable={false}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x600/1a1a1a/d4af37?text=LED+Mood+Lighting'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xl font-bold text-gold mb-2">LED 무드등</div>
                <div className="text-sm">분위기 있는 조명</div>
              </div>
            </div>
          </div>
        </div>

        {/* 상세 안내 링크 */}
        <div className="text-center mt-12">
          <a
            href="/system"
            className="inline-block px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-primary transition-all duration-300"
          >
            시스템 자세히 알아보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default SystemSection
