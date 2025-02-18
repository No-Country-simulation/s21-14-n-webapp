import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from 'react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
