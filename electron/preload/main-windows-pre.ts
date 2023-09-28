import {getRegeditData} from "../utils/edit-regedit";


let chromeVerionPath = `HKEY_CURRENT_USER\\SOFTWARE\\Google\\Chrome\\BLBeacon`

function ochromea(error,stdout,stderr){
    console.log('读取数据:'+stdout.split(' ').reverse()[0])
    error != null && console.log('读取错误:'+error);
    stderr != null && console.log('正常错误:'+stderr);
}

// 获取chrome版本号
getRegeditData(chromeVerionPath, 'version',ochromea)
