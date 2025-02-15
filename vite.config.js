import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  test: {
    globals: true, // ✅ Enables global test functions (describe, it, test)
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.js', // Ensure Jest DOM is set up properly
  },
  
})
