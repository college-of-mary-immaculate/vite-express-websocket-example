/* eslint no-restricted-globals: ["error", "event"] */
/* global process */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      port: parseInt(process.env.PORT) + 2000,
    }
  }
})
