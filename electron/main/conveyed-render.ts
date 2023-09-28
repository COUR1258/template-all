// 线程通信
interface RenderIF{
    [propname:string]:{
        on:()=>any
        send:()=>any
    }
}

// 渲染进程调用



// 渲染进程接收


export const communicationRenderList:RenderIF = {
    'name':{
        on:()=>{},
        send:()=>{},
    }
}