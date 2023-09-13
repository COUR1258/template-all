import {MyConfig, NetConfig} from './types'


let netConfig:NetConfig =  {
    BASEURL: 'https://jzdc.geochance.cn/prod-api',
    DEVURL: 'https://jzdc.geochance.cn/prod-api',
    AUTHURL: '/auth',
    SYSURL: '/system',
    IMGURL: '/gkhserver'
}


let myConfig:MyConfig = {
    netConfig:netConfig
}

export default myConfig
