import { FaPhone } from 'react-icons/fa'

const MobileCallButton = () => {
  return (
    <a
      href="tel:010-2303-3778"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="전화 예약 문의"
    >
      <div className="bg-gold-gradient shadow-gold-glow-lg p-4 flex items-center justify-center gap-3 active:scale-95 transition-transform duration-200">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
          <FaPhone className="text-2xl text-primary" />
        </div>
        <div className="text-primary">
          <div className="text-sm font-semibold opacity-90">지금 바로 예약</div>
          <div className="text-xl font-bold">010-2303-3778</div>
        </div>
      </div>
    </a>
  )
}

export default MobileCallButton
