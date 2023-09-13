import netConfig from './config';
// 网络配置
interface NetConfig{
    /*
        服务器基地址
    */
    BASEURL:string,
    /*
        开发服务器基地址
    */
    DEVURL:string,
    /*
        登录url
    */
    AUTHURL:string,
    /*
        系统url
    */
    SYSURL:string,
    /*
        未知url
    */
    DGKHURL?:string,
    /*
        图片上传地址
    */
    IMGURL:string

}

interface MyConfig {
    netConfig:NetConfig
}



export {NetConfig,MyConfig}