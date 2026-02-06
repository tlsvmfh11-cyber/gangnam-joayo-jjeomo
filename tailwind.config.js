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
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37, #ffd700, #d4af37)',
        'dark-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.7)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
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
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
