/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#d4af37',
        accent: '#2a2a2a',
        light: '#f5f5dc',
        gold: {
          DEFAULT: '#d4af37',
          light: '#ffd700',
          dark: '#b8930c',
        },
        // 선릉 네온 컬러 (신규)
        neon: {
          pink: '#ff0080',
          blue: '#00e5ff',
          purple: '#a855f7',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37, #ffd700, #d4af37)',
        'dark-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)',
        // 선릉 네온 그라데이션 (신규)
        'neon-gradient': 'linear-gradient(135deg, #ff0080, #00e5ff)',
        'dark-neon': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.7)',
        // 선릉 네온 글로우 (신규)
        'neon-glow': '0 0 30px rgba(255, 0, 128, 0.6)',
        'neon-glow-blue': '0 0 30px rgba(0, 229, 255, 0.6)',
        'neon-glow-lg': '0 0 60px rgba(255, 0, 128, 0.8)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        // 선릉 네온 애니메이션 (신규)
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
        // 선릉 네온 keyframes (신규)
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.6)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 128, 1)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
