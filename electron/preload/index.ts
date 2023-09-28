
import {ipcRenderer} from "electron";
import {communicationRenderList} from "../main/conveyed-render";


// 读取渲染进程通信配置
function registerCommunicationRender(communicationRenderList){
    Object.keys(communicationRenderList).forEach(key=>{
        console.log(ipcRenderer)
        ipcRenderer.on(key,communicationRenderList[key].on)
        // ipcRenderer.send(key,communicationRenderList[key].send)
    })
}

// 注册通信
registerCommunicationRender(communicationRenderList)