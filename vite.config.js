import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';

// If you need __dirname or __filename equivalents in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
