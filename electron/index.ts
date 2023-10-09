import { app, BrowserWindow, shell, ipcMain } from 'electron'
import {mainWindowsInit} from "./windows/main-windows";
import {coreStart} from "./core/core";
import { join } from 'node:path'
import { release } from 'node:os'



// 获取electron所在目录
process.env.DIST_ELECTRON = join(__dirname, '../..')
// 获取vue生成文件目录
process.env.DIST = join(process.env.DIST_ELECTRON, '../../dist')
// VITE_DEV_SERVER_URL vue项目的启动地址
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? join(process.env.DIST_ELECTRON, '../../public')
    : process.env.DIST

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// 设置Windows 10+通知的应用程序名称
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

// 检查应用程式是否已经启动
if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// 主窗口全局变量
let win: BrowserWindow | null = null



// 预加载处理
const preload = join(__dirname, './preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

// 默认操作
app.whenReady().then(()=>{
  console.log('窗口加载')
  win = mainWindowsInit(url,indexHtml,preload)
  console.log('窗口加载完成')
  coreStart()
})


// 默认钩子触发


// 快捷键注入


// 通讯挂载


// 自定义注入触发





// 当全部窗口都被关闭时
app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

// 当用户打开第二个窗口时
app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

// 应用被激活 macos独有
app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    mainWindowsInit(url,indexHtml,preload)
  }
})


// 测试

