// 主窗口创建
import {app, BrowserWindow, Tray} from "electron";
import {join, resolve} from "node:path";
import {windowsManager, urlLoadSync, urlLoadFileSync} from "./windows-manager";
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;

const iconPath = resolve(__dirname, '../dist/assets/ele.png')

// 预加载处理
const preload = join(__dirname, './preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

const options: BrowserWindowConstructorOptions = {
    title: '主窗口',
    show: false,
    frame:false,
    icon:iconPath,
    webPreferences: {
        //关闭web权限检查，允许跨域
        webSecurity: false,
        preload
    }
};

// 主窗口全局变量
let win: BrowserWindow | null = null


app.whenReady().then(()=>{
    win = windowsManager(options)
    process.env.VITE_DEV_SERVER_URL && win.webContents.openDevTools()
    process.env.VITE_DEV_SERVER_URL ? urlLoadSync(win, url) : urlLoadFileSync(win, indexHtml)
    win.on('ready-to-show', () => {
        win.show()
    })
})
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
        win = windowsManager(options)
    }
})






