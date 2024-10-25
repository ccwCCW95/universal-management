/*
 * @Author: Changwei Cao
 * @Date: 2024-10-23 20:17:15
 * @LastEditors: Changwei Cao
 * @LastEditTime: 2024-10-25 20:10:43
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
