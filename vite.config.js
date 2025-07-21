import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  // Базовый путь для GitHub Pages
  base: '/portfolio',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/variables" as *;
          @use "@styles/mixins" as *;
        `,
        includePaths: [path.resolve(__dirname, 'src/styles')]
      }
    },
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      // Для поддержки Node.js модулей
      {
        find: /^~/,
        replacement: ''
      }
    ]
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: false,
    strictPort: true,
    // Доступ с других устройств в локальной сети
    host: true,
    hmr: {
      // Отключаем overlay для HMR
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-icons'],
    exclude: ['js-big-decimal']
  },
  // Полифиллы для старых браузеров
  esbuild: {
    target: 'es2020',
    supported: {
      'top-level-await': true
    }
  }
})
