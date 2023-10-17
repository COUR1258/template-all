import {session} from "electron";
import {join} from "node:path";
import fs from "node:fs"
import {json} from "stream/consumers";


// 扩展目录

// 程序加载
export function register_crt(extendBasePath:string){
    extendBasePath && (extendBasePath=join(__dirname, '../extend/'))
    fs.readdirSync(extendBasePath).forEach(item=>{
        let pathName = extendBasePath + item
        if(fs.lstatSync(pathName).isDirectory()){
            session.defaultSession.loadExtension(pathName).then(({ id }) => {
                console.log('扩展程序', id)
            }).catch(err=>{
                console.log('加载失败', err)
            })
        }
    })
    console.log('peizhixinxi', process['apcv'])

}

