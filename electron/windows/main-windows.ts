// 主窗口创建
import {BrowserWindow, Tray} from "electron";
import {resolve} from "node:path";
import {windowsManager, urlLoadSync, urlLoadFileSync} from "./windows-manager";
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;


const iconPath = resolve(__dirname, '../dist/assets/ele.png')
console.log(iconPath)
// const appIcon = new Tray(iconPath)

// 窗口创建
export function mainWindowsInit(url:string,indexHtml:string,preload:string) {
    const options: BrowserWindowConstructorOptions = {
        title: '装窗口',
        show: false,
        frame:false,
        icon:iconPath,
        webPreferences: {
            //关闭web权限检查，允许跨域
            webSecurity: false,
            preload
        }
    };
    let win:BrowserWindow = windowsManager(options)
    process.env.VITE_DEV_SERVER_URL && win.webContents.openDevTools()
    process.env.VITE_DEV_SERVER_URL ? urlLoadSync(win, url) : urlLoadFileSync(win, indexHtml)
    win.on('ready-to-show', () => {
        win.show()
    })
    return win;
}







