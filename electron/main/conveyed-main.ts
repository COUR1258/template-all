import {app, BrowserWindow, IpcRendererEvent} from 'electron'

// 主线程通信
interface MainIF {
    [propname: string]: {
        on: (...args: any) => any
    }
}

// 主进程调用
/** 窗口相关操作------------------------------------------------------------------------------------------------------- */
// 窗口关闭
function windowClose(win:BrowserWindow,isMainFrame:Boolean) {
    // 判断当前窗口是不是主窗口
    if(isMainFrame){
        app.exit(0)
    }else {
        win.close()
    }

}

function windowMax(win:BrowserWindow) {
    // 判断当前是不是最大化
    if(win.isMaximized()){
        win.unmaximize()
    }else {
        win.maximize()
    }
}

function windowMin(win:BrowserWindow) {
    win.minimize()
}

// 主进程接收


export const communicationMainList: MainIF = {
    'name': {
        on: (event, ...args) => {
        },
    },
    'window-close': {
        on: windowClose
    },
    'window-max': {
        on: windowMax
    },
    'window-min': {
        on: windowMin
    }
}