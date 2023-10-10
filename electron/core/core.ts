import {app, globalShortcut, ipcMain, ipcRenderer} from "electron";
import {keyList} from "../main/shortcuts-key";
import {communicationMainList} from "../main/conveyed-main";



// 读取快捷键配置
function registerKey(keyList){
    Object.keys(keyList).forEach(key=>{
        globalShortcut.register(key, keyList[key])
    })
}

// 读取主进程通信配置
function registerCommunicationMain(communicationMainList){
    Object.keys(communicationMainList).forEach(key=>{
        ipcMain.on(key,communicationMainList[key].on)
    })
}


export function coreStart() {
    // 快捷键注册
    registerKey(keyList)
    // 通信绑定
    registerCommunicationMain(communicationMainList)
}





