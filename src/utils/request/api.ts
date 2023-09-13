import { geoGet,geoPost,geoUpFile } from "./httpRequest";
import config from '../config'

// 登录
export function toLoginAuth(codeLogin:string, codePhone:string) { return geoGet(`${config.netConfig.AUTHURL}/toMinwxLoginAuth/${codeLogin}/${codePhone}`) }

// 获取字典数据方法封装
// export function comRoot(obj){return geoGet(`${SYSTURL}/dict/data/type/${obj}`)}

//  获取验证信息
export function getWXConfig() { return geoGet(`${config.netConfig.AUTHURL}/rcc/getSignature`) }

//  短信登录接口

//  更换手机号接口

//  经纬度获取列表

