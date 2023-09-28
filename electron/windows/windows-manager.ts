import {join} from "node:path";
// import {BrowserWindow} from "electron";
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
import {BrowserWindow, shell} from "electron";

// 默认窗口创建参数
const defaultOptions:BrowserWindowConstructorOptions = {
    // icon: join(process.env.VITE_PUBLIC, 'favicon.ico'),
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    },
}
//窗口创建

/**
 * @descriptione: url窗口创建
 * @param:options {BrowserWindowConstructorOptions}
 */
export function windowsManager(options:BrowserWindowConstructorOptions){
    return new BrowserWindow({
        ...defaultOptions,
        ...options,
        webPreferences:{
            ...options.webPreferences,
            ...defaultOptions.webPreferences,
        }
    });
}

/**
 * @descriptione: url异步注入窗口
 * @param:win {BrowserWindow} 窗口对象
 * @param:url {string}
 */
export function urlLoad(win:BrowserWindow,url:string):void{
    win.loadURL(url).then(res => {
        console.log(`窗口使用url加载`)
    })
}

/**
 * @descriptione: url同步注入窗口
 * @param:win {BrowserWindow} 窗口对象
 * @param:url {string}
 */
export async function urlLoadSync(win:BrowserWindow,url:string){
    await win.loadURL(url)
    console.log(`窗口使用url加载`)
}


/**
 * @descriptione: 窗口同步加载文件
 * @param:win {BrowserWindow} 窗口对象
 * @param:file {string}
 */
export async function urlLoadFileSync(win:BrowserWindow,file:string){
    await win.loadFile(file)
    console.log(`窗口加载${file}`)
}

/**
 * @descriptione: 窗口加载文件
 * @param:win {BrowserWindow} 窗口对象
 * @param:file {string}
 */
export function urlLoadFile(win:BrowserWindow,file:string){
    win.loadFile(file).then(r => {
        console.log(`窗口加载${file}`);
    })
}



// 测试主动推送消息到电子渲染器
// win.webContents.on('did-finish-load', () => {
//     win?.webContents.send('main-process-message', new Date().toLocaleString())
// })
//
// // Make all links open with the browser, not with the application
// win.webContents.setWindowOpenHandler(({ url }) => {
//     if (url.startsWith('https:')) shell.openExternal(url)
//     return { action: 'deny' }
// })
// win.webContents.on('will-navigate', (event, url) => { }) #344





