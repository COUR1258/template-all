import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import axios from "axios";

// 创建axios实例对象
const services:AxiosInstance = axios.create({
    baseURL: '',
    timeout:5*1000
})

// 请求拦截器
services.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const token = sessionStorage.getItem('token');
    token && (config.headers.Authorization = ("Bearer" + token));
    return config;
}, (error:AxiosError) =>{
    return Promise.reject(error)
})


// 响应拦截器
services.interceptors.response.use((response:AxiosResponse)=>{
    const {code, data, msg} = response.data
    if(code==200){
        return data;
    }
    // 提示消息

    return Promise.reject(new Error(msg))
}, (error:AxiosError) => {
    const {msg = "系统繁忙"} = (error?.response!.data) as any

    // 错误展示
    console.log(msg)

    return Promise.reject(error)
})


function geoGet(url: string, params:object, config?: AxiosRequestConfig) {
    // 自己拼装params
    console.log(params)
    return services.get(url, config);
}

function geoPost(url: string, data?: object, config?: AxiosRequestConfig) {
    return services.post(url, data, config);
}

function geoPut(url: string, data?: object, config?: AxiosRequestConfig){
    return services.put(url, data, config)
}


function geoDelete (url: string, config?: AxiosRequestConfig){
    return services.delete(url, config)
}

export {geoPut, geoPost, geoGet, geoDelete}













