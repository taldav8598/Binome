import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    ssrManifest: true,
    assetsDir: 'static',
    outDir: '../server/public',
    emptyOutDir: false
  }
})
