
import {ipcRenderer} from "electron";
import {communicationRenderList} from "../main/conveyed-render";



/** 通讯相关---------------------------------------------------------------------------------------------*/
// 通信处理绑定
function registerCommunicationRender(communicationRenderList){
    Object.keys(communicationRenderList).forEach(key=>{
        console.log(ipcRenderer)
        ipcRenderer.on(key,communicationRenderList[key].on)
    })
}

// 注册通信
registerCommunicationRender(communicationRenderList)


let a = 10;
window['isMainFrame'] = process.isMainFrame
console.log(window['isMainFrame'])



