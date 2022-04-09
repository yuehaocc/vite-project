import { defineConfig,normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import autoprefixer from 'autoprefixer'

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
    },
    postcss:{
      plugins:[
        autoprefixer({
          overrideBrowsersList:['Chrome > 40','ff > 31','ie 11']
        })
      ]
    }
  }
})
