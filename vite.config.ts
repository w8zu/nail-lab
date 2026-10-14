import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 프로젝트 사이트 주소: https://<user>.github.io/nail-lab/
// 배포 빌드와 빌드 미리보기(vite preview)는 /nail-lab/ 하위 경로 기준, 로컬 개발 서버만 루트(/)에서 실행
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'serve' && !isPreview ? '/' : '/nail-lab/',
  plugins: [react()],
}));
