// 窗口最大化
import {ipcRenderer} from "electron";
import {send} from "vite";

export function windowMax(){
    ipcRenderer.send('window-max')
}


// 窗口最小化
export function windowMin(){
    ipcRenderer.send('window-min')
}


// 窗口关闭
export function windowClose(){
    ipcRenderer.send('window-close')
}