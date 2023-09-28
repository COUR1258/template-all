// 注册表操作
import child_process from 'node:child_process'


/**
 * @description:注册表获取值
 * @param path {string}
 * @param key {string}
 * @param callback {function} 函数回调
 */
export function getRegeditData(path:string, key:string,  callback: (error: child_process.ExecException, stdout: string, stderr: string) => void){
    child_process.exec(`REG QUERY ${path} /v ${key}`,callback);
}

// 注册表修改值
export function setRegeditData(path:string, key:string, value:string){
}
/**
 * @description:注册表添加值
 * @param path {string}
 * @param key {string}
 * @param value {string}
 */
export function addRegeditData(path:string, key:string, value:string){
    return new Promise((resolve, reject) => {
        try {
            const result = child_process.exec(`reg add ${path} /v ${key} /t REG_SZ /d ${value} /f`);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * @description:注册表删除值
 * @param path {string}
 * @param key {string}
 */
export function delRegeditData(path:string, key:string){
    return new Promise((resolve, reject) => {
        try {
            const result = child_process.exec(`reg delete ${path} /v ${key} /f`);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

