// 页面弹窗
import { dialog } from 'electron'

// 信息弹窗
export function showSuccessPop(msg:string){
    return dialog.showMessageBox({
        title:'信息',
        message:msg,
        type:'question',
    })
}


// 警告弹窗
export function showWarningPop(msg:string){
    return dialog.showMessageBox({
        title:'信息',
        message:msg,
        type:'warning',
    })
}


// 错误弹窗
export function showErrorPop(msg:string){
    return dialog.showMessageBox({
        title:'信息',
        message:msg,
        type:'error',
    })
}