import {release} from 'node:os'
import { join } from 'node:path'
import {app} from "electron";

// 获取electron所在目录
process.env.DIST_ELECTRON = join(__dirname, '../..')
// 获取vue生成文件目录
process.env.DIST = join(process.env.DIST_ELECTRON, '../../dist')
// VITE_DEV_SERVER_URL vue项目的启动地址
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
    ? join(process.env.DIST_ELECTRON, '../../public')
    : process.env.DIST

// 初始化程序
// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// 设置Windows 10+通知的应用程序名称
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

// 检查应用程式是否已经启动
if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
}

// 主窗口的初始化
(async () => {
    await import('./windows/main-windows')
    await import('./core/core')
})()


