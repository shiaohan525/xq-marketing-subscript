// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 將 @assets 指向 resources/assets
      '@assets': path.resolve(__dirname, 'resources/assets'),
      // 將 @scss 指向 resources/assets/scss
      '@scss': path.resolve(__dirname, 'resources/assets/scss'),
      // 如果你有 Vue 組件存放在 resources/vue，可以這樣設定：
      '@custom': path.resolve(__dirname, 'resources/vue'),
      // 將 @src 指向 resources/src（如果你想把某些程式碼放在那邊）
      '@src': path.resolve(__dirname, 'resources/src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自動引入自訂 SCSS (不要重複引入 bootstrap，這裡可以僅放置變數、混入)
        additionalData: `@import "@assets/scss/_variables.scss";`
      }
    }
  },
  base: './',  // 根據部署環境調整 base 路徑
  build: {
    outDir: 'dist' // 打包後的靜態文件會放在 dist 資料夾
  }
})
