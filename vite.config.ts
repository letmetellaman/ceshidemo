import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({

  alias: {
    "@": path.resolve(__dirname, "src"),
    coms: path.resolve(__dirname, "src/components"),
  },
  plugins: [vue(),
    // viteMockServe({
    //   supportTs: false    // 关闭ts
    // })
  ],


})

