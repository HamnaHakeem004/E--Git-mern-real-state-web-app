import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  define: {
    'process.env': process.env, // Pass process.env to the client
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:3000', // Fallback to localhost for local dev
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
