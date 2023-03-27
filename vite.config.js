import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // devServer: {
  //   proxy: {
  //     // /feiyun/ -> http://8.140.124.245:8129/
  //     '/feiyun/': {
  //       target: 'http://8.140.124.245:8129/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/feiyun/, ''),
  //     },
  //   },
  // },
});
