import { rmSync } from 'node:fs'
import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import { notBundle } from 'vite-plugin-electron/plugin'
import pkg from './package.json'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path";



export default defineConfig(({ command ,mode}) => {
  //删除构建目录,不删除的话HMR会有问题
  rmSync('dist-electron', { recursive: true, force: true })
  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, "src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 两种方式都可以
          additionalData: '@import "@/assets/scss/global.scss";'
          // additionalData: '@use "@/assets/scss/global.scss" as *;'
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      electron([
        {
          entry: 'electron/index.ts',
          onstart({ startup }) {
              startup()
          },
          vite: {
            build: {
              sourcemap:command === 'serve',
              minify: command === 'build',
              outDir: 'dist-electron',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
            plugins: [
              command === 'serve' && notBundle(),
            ],
          },
        },
        {
          entry: 'electron/preload/index.ts',
          onstart({ reload }) {
            reload()
          },
          vite: {
            build: {
              sourcemap: command === 'serve' ? 'inline' : undefined, // #332
              minify: command === 'build',
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
            plugins: [
              command === 'serve' && notBundle(),
            ],
          },
        }
      ]),
      // Use Node.js API in the Renderer process
      renderer(),
    ],
    server: (() => {
      const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
      return {
        host: url.hostname,
        port: +url.port,
      }
    })(),
    clearScreen: false,
  }
})
