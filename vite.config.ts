import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteCompression from 'vite-plugin-compression'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const isProduction: boolean = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: '/',
  server: { port: 3003, host: true },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: !isProduction,
    cssCodeSplit: true,
    reportCompressedSize: false,
    minify: 'terser',
    target: 'esnext',
    manifest: true,
    chunkSizeWarningLimit: 2048,
    terserOptions: { compress: { drop_console: isProduction, drop_debugger: isProduction }, format: { comments: false }, module: true },
    commonjsOptions: { ignoreDynamicRequires: true },
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
      output: {
        manualChunks(id: string) {
          // Vendor chunking
          if (id.includes('node_modules')) {
            const packageName: string = id.split('node_modules/')[1].split('/')[0]
            return `vendor/${packageName.replace('@', '')}`
          }

          // Project directory chunking
          // if (id.includes('src/') && !id.includes('service/axios') && !id.includes('api/') && !id.includes('components/Tools')) {
          //   const pathSegments: string[] = id.split('src/')[1].split('/')
          //   const isFile: boolean = pathSegments[pathSegments.length - 1].includes('.')
          //   const directories: string[] = isFile ? pathSegments.slice(0, -1) : pathSegments
          //   return directories.slice(0, 2).join('_')
          // }
        },
        entryFileNames: 'entries/[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
      },
    },
    assetsInlineLimit: 4096,
  },
  publicDir: 'public',
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    viteCompression({ verbose: true, disable: false, threshold: 10240, algorithm: 'gzip', ext: '.gz' }),
    legacy({ targets: ['defaults', 'not IE 11'], additionalLegacyPolyfills: ['regenerator-runtime/runtime'] }),
  ],
  optimizeDeps: {
    entries: ['index.html'],
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emotion/react',
      'axios',
      '@reduxjs/toolkit',
      'i18next',
      'react-hot-toast',
      'react-i18next',
      'react-redux',
      'socket.io-client',
      'tailwind-merge',
      'react-select',
      'react-select-async-paginate',
    ],
    exclude: [],
    esbuildOptions: { target: 'esnext', supported: { 'top-level-await': true } },
  },
  esbuild: { jsxInject: `import React from 'react';`, loader: 'tsx' },
  json: { stringify: true },
  define: { global: 'window', 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
})
