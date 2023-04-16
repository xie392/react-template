import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import AutoImport from 'unplugin-auto-import/vite'

export default ({ mode }: { mode: string }) => {
  const http = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      AutoImport({
        eslintrc: {
          enabled: true
        },
        imports: ['react', 'react-router-dom'],
        dirs: ['src/api/', 'src/components/', 'src/hooks/', '@douyinfe/semi-ui','src/utils/'],
        // 生成 `auto-import.d.ts` 全局声明
        dts: 'src/auto-import.d.ts'
      })
    ],
    // 这里更具自己实际需求去配置
    server: {
      open: false,
      https: false,
      strictPort: true,
      proxy: {
        '/api': {
          target: http.VITE_BASR_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/types')
      }
    }
  })
}
