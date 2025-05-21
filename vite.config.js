import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/react/", // <<< bu MUHIM! repo noming bilan bir xil bo‘lishi kerak
  plugins: [react()],
})
