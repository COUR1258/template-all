// 主窗口创建
import {BrowserWindow} from "electron";
import {windowsManager, urlLoadSync, urlLoadFileSync} from "./windows-manager";
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;

// 窗口创建
export function mainWindowsInit(url:string,indexHtml:string,preload:string) {
    const options: BrowserWindowConstructorOptions = {
        title: '装窗口',
        show: false,
        webPreferences: {
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

// 窗口最小化


// 窗口最大化


// 窗口关闭





