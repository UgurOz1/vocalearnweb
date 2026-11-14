import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: '/',
  plugins: [
    react(),
    // Prerender (SSR) build'inde service worker üretme
    !isSsrBuild && VitePWA({
      registerType: 'autoUpdate',
      // Sayfalar önceden üretildiği için gezinmede her adres kendi HTML'ini sunucudan alsın
      workbox: { navigateFallback: null },
      includeAssets: ['favicon.png', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'VocaLearn',
        short_name: 'VocaLearn',
        description: 'VocaLearn ile İngilizce kelime hazineni oyunlarla ve akıllı tekrar sistemiyle geliştir.',
        theme_color: '#4f46e5',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
}))
