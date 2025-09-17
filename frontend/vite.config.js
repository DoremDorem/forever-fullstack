import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: '.',            // ensure root is current folder
  base: './',
   build: {
    outDir: 'dist',
    emptyOutDir: true   // clear dist before build
  },
  server: {
    port: 5173
  },
})
