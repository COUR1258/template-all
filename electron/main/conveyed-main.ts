import {IpcRendererEvent} from 'electron'

// 主线程通信
interface MainIF{
    [propname:string]:{
        on:(event:IpcRendererEvent,...args:Array<any>)=>any
        handle:()=>any
    }
}

// 主进程调用



// 主进程接收


export const communicationMainList:MainIF = {
    'name':{
        on:(event,...args)=>{},
        handle:()=>{},
    }
}