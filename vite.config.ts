import { defineConfig,normalizePath } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const variablePath=normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      generateScopedName:"[name]__[local]__[hash:base64:5]"
    },
    preprocessorOptions:{
      scss:{
        additionalData:`@import "${variablePath}";`
      }
    }
  }
})
