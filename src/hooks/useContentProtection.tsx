import { useEffect } from 'react';

/**
 * 콘텐츠 보호 훅
 * - 우클릭 방지
 * - 드래그/선택 방지
 * - 개발자 도구 차단
 * - 복사 방지
 */
export const useContentProtection = () => {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 키보드 단축키 차단 (개발자 도구, 소스 보기, 복사)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 차단
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (개발자 도구)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (콘솔)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (요소 선택)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (저장)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Ctrl+C (복사) - 선택적
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+I (Mac 개발자 도구)
      if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+C (Mac 요소 선택)
      if (e.metaKey && e.altKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+J (Mac 콘솔)
      if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();
        return false;
      }

      // Cmd+U (Mac 소스 보기)
      if (e.metaKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Cmd+S (Mac 저장)
      if (e.metaKey && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Cmd+C (Mac 복사) - 선택적
      if (e.metaKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }
    };

    // 드래그 방지
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 선택 방지
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    // 개발자 도구 감지 (선택적)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        console.clear();
        console.log('%c⚠️ 경고', 'color: #d4af37; font-size: 20px; font-weight: bold;');
        console.log('%c이 사이트의 콘텐츠는 저작권으로 보호됩니다.', 'color: #fff; font-size: 14px;');
      }
    };

    // 주기적으로 개발자 도구 감지
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // 클린업
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(devToolsInterval);
    };
  }, []);
};
