// 文件处理
import {dialog} from "electron";

let fileProperties = ['openFile']
let fileAllProperties = ['openFile', 'multiSelections']
let folderProperties = ['openDirectory']
let folderAllProperties = ['openDirectory', 'multiSelections']

/**
 * @description:异步加载单个文件
 */
export function openFileOne(): Promise<object> {
    return dialog.showOpenDialog({
        title: '选择文件',
        properties: fileProperties
    })
}

/**
 * @description:异步加载多个文件
 */
export function openFileAll(): Promise<object> {
    return dialog.showOpenDialog({
        title: '选择多文件',
        properties: fileAllProperties
    })
}

/**
 * @description:加载多个文件
 */
export function openFileOneSync(): string[] | undefined {
    return dialog.showOpenDialogSync({
        title: '选择多文件',
        properties: fileProperties
    })
}

/**
 * @description:异步加载多个文件
 */
export function openFileAllSync(): string[] | undefined {
    return dialog.showOpenDialogSync({
        title: '选择多文件',
        properties: fileAllProperties
    })
}


/**
 * @description:异步获取单个文件夹
 */
export function openFolderOne(): Promise<object> {
    return dialog.showOpenDialog({
        title: '选择文件夹',
        properties: folderProperties
    })
}

/**
 * @description:异步获取多个文件夹
 */
export function openFolderAll(): Promise<object> {
    return dialog.showOpenDialog({
        title: '选择文件夹',
        properties: folderAllProperties
    })
}

/**
 * @description:同步获取单个文件夹
 */
export function openFolderOneSync(): string[] | undefined {
    return dialog.showOpenDialogSync({
        title: '选择文件夹',
        properties: folderProperties
    })
}

/**
 * @description:同步获取多个文件夹
 */
export function openFolderAllSync(): string[] | undefined {
    return dialog.showOpenDialogSync({
        title: '选择文件夹',
        properties: folderAllProperties
    })
}


/**
 * @description:异步保存
 */
export function saveFile(): Promise<object> {
    return dialog.showSaveDialog({
        title: '保存',
    })
}

/**
 * @description:同步保存
 */
export function saveFileSync(): Promise<object> {
    return dialog.showSaveDialogSync({
        title: '保存',
    })
}


