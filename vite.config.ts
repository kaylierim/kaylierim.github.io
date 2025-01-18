import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@icons": "/src/assets/icons",
      "@images": "/src/assets/images",
    },
  },
})
