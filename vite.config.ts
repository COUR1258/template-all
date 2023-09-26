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
        '@': path.join(__dirname,"src")
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      electron([
        {
          // Main process entry file of the Electron App.
          entry: 'electron/main/index.ts',
          onstart({ startup }) {
            if (process.env.VSCODE_DEBUG) {
              console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
            } else {
              startup()
            }
          },
          vite: {
            build: {
              sourcemap:command === 'serve',
              minify: command === 'build',
              outDir: 'dist-electron/main',
              rollupOptions: {
                // Some third-party Node.js libraries may not be built correctly by Vite, especially `C/C++` addons, 
                // we can use `external` to exclude them to ensure they work correctly.
                // Others need to put them in `dependencies` to ensure they are collected into `app.asar` after the app is built.
                // Of course, this is not absolute, just this way is relatively simple. :)
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
            plugins: [
              // This is just an option to improve build performance, it's non-deterministic!
              // e.g. `import log from 'electron-log'` -> `const log = require('electron-log')` 
              command === 'serve' && notBundle(),
            ],
          },
        },
        {
          entry: 'electron/preload/index.ts',
          onstart({ reload }) {
            // Notify the Renderer process to reload the page when the Preload scripts build is complete, 
            // instead of restarting the entire Electron App.
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
