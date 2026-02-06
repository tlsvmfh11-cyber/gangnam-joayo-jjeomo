import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaHome, FaPhone, FaInfoCircle, FaDollarSign } from 'react-icons/fa'
import MobileCallButton from '../components/MobileCallButton'

const NotFoundPage = () => {
  const quickLinks = [
    {
      to: '/',
      icon: <FaHome className="text-4xl" />,
      title: '홈으로',
      description: '메인 페이지로 돌아가기',
      isInternal: true,
    },
    {
      to: '/price',
      icon: <FaDollarSign className="text-4xl" />,
      title: '가격 정보',
      description: '투명한 가격표 확인',
      isInternal: true,
    },
    {
      to: '/info',
      icon: <FaInfoCircle className="text-4xl" />,
      title: '위치·정보',
      description: '찾아오시는 길 안내',
      isInternal: true,
    },
    {
      to: 'tel:010-2303-3778',
      icon: <FaPhone className="text-4xl" />,
      title: '전화 문의',
      description: '010-2303-3778',
      isInternal: false,
    },
  ]

  return (
    <>
      <Helmet>
        <title>페이지를 찾을 수 없습니다 | 강남 좋아요 쩜오</title>
        <meta name="description" content="요청하신 페이지를 찾을 수 없습니다. 강남 좋아요 쩜오 메인 페이지로 돌아가시거나 다른 페이지를 방문해보세요." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-primary flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* 404 숫자 */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gold-gradient opacity-20">
              404
            </h1>
          </div>

          {/* 메시지 */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>
            <p className="text-gray-400">
              주소를 다시 확인하시거나 아래 링크를 이용해주세요.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickLinks.map((link, index) => {
              const content = (
                <>
                  <div className="text-gold mb-4">{link.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </>
              )

              const className = "glass-card p-6 rounded-xl hover:scale-105 hover:shadow-gold-glow transition-all duration-300 block"

              return link.isInternal ? (
                <Link
                  key={index}
                  to={link.to}
                  className={className}
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.to}
                  className={className}
                >
                  {content}
                </a>
              )
            })}
          </div>

          {/* 메인 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-10 py-5 bg-gold-gradient text-primary font-bold text-xl rounded-lg shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all duration-300"
            >
              메인으로 돌아가기
            </Link>
            <a
              href="tel:010-2303-3778"
              className="px-10 py-5 bg-transparent text-gold font-bold text-xl rounded-lg border-2 border-gold hover:bg-gold hover:text-primary transition-all duration-300"
            >
              전화 문의하기
            </a>
          </div>

          {/* 추가 정보 */}
          <div className="mt-16 text-gray-500 text-sm">
            <p>강남역 도보 3분 · PM 6:00 ~ AM 6:00 연중무휴</p>
            <p className="mt-2">예약 문의: 010-2303-3778 (24시간 상담 가능)</p>
          </div>
        </div>
      </main>
      <MobileCallButton />
    </>
  )
}

export default NotFoundPage
