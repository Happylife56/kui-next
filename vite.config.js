// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000, // 配置启用的端口号
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'packages/main.js'),
      name: 'kui-next',
      fileName: (format) => `k.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: '@import "./styles/common.scss";',
      },
    },
  },
});
