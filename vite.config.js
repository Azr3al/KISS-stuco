import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set base path conditionally for production
  base: process.env.NODE_ENV === 'production' ? '/ascend-election/' : '/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
  server: {
    hmr: true,
  },
  plugins: [react()],
});
