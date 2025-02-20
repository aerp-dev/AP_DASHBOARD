import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteCompression from 'vite-plugin-compression'

const isProduction: boolean = process?.env?.NODE_ENV === 'production'

export default defineConfig({
  server: { port: 3003, host: true },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: !isProduction,
    cssCodeSplit: true,
    reportCompressedSize: false,
    minify: 'terser',
    target: 'esnext',
    chunkSizeWarningLimit: 1024,
    terserOptions: { compress: { drop_console: isProduction, drop_debugger: isProduction }, format: { comments: false }, module: true },
    commonjsOptions: { ignoreDynamicRequires: true },
    rollupOptions: {
      input: { main: './index.html' },
      output: {
        manualChunks(id: any) {
          if (id?.includes('node_modules')) return 'vendor'
          if (id?.includes('react-dom')) return 'framework'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }: { name: string }) => {
          if (name && /\.(css)$/.test(name)) return 'assets/css/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  publicDir: 'public',
  define: { global: 'window' },
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression({ verbose: true, disable: false, threshold: 10240, algorithm: 'gzip', ext: '.gz' }),
    legacy({ targets: ['defaults', 'not IE 11'], additionalLegacyPolyfills: ['regenerator-runtime/runtime'] }),
  ],
  optimizeDeps: { entries: ['index.html'], include: ['react', 'react-dom'], exclude: ['some-large-lib'], esbuildOptions: { target: 'esnext', supported: { 'top-level-await': true } } },
  esbuild: { jsxInject: `import React from 'react';` },
  json: { stringify: true },
})