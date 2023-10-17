import appConfig from "../conf/app.config";
import {keyList} from "../main/shortcuts-key";
import {app, globalShortcut, ipcMain} from "electron";
import {register_crt} from "../main/extension-register";
import {communicationMainList} from "../main/conveyed-main";


// 加载配置
let appConfigAll = appConfig()

// 等待程序加载完成
app.whenReady().then(() => {
    // 读取快捷键配置
    Object.keys(keyList).forEach(key => {
        globalShortcut.register(key, keyList[key])
    })
    // 读取主进程通信配置
    Object.keys(communicationMainList).forEach(key => {
        ipcMain.on(key, communicationMainList[key].on)
    })
    // 添加扩展程序
    register_crt(appConfigAll.extendPath)
})







