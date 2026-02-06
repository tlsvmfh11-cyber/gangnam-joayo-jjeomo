import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 코드 스플리팅 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리를 별도 청크로 분리
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 아이콘 라이브러리 분리
          'icons': ['react-icons'],
          // React Helmet 분리
          'helmet': ['react-helmet-async'],
        },
      },
    },
    // 청크 크기 경고 한계 증가 (KB)
    chunkSizeWarningLimit: 1000,
    // 압축 최적화
    minify: 'esbuild', // esbuild가 더 빠르고 효율적
    // CSS 코드 스플리팅
    cssCodeSplit: true,
    // 이미지 최적화 설정
    assetsInlineLimit: 4096, // 4KB 이하 이미지는 inline으로 변환
  },
  // 개발 서버 최적화
  server: {
    fs: {
      strict: false,
    },
  },
})
