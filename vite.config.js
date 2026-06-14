import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true,
    port: 5173
  },
  build: {
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react';
          if (id.includes('node_modules/framer-motion')) return 'motion';
          if (id.includes('node_modules/react-icons')) return 'icons';
          return undefined;
        }
      }
    }
  }
});
