import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        headers: { 'Access-Control-Allow-Origin': '*' },
        target: 'https://eshop-gilt-chi.vercel.app', 
      },
    },
  },
});
