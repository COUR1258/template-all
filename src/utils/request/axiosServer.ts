import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, MiddlewareContext, MiddlewareNext } from "axios-miniprogram";
const { cancel, token } = axios.CancelToken.source();
import config from '../config'
import { ResPonseData } from "./types";

let server:AxiosInstance = axios.create({
  baseURL: config.netConfig.BASEURL,
  timeout: 10000,
  cancelToken: token,
  // 监听上传进度
  onUploadProgress({ progress }) {
    console.log(progress);
  },
});


// 正确的请求
const requestInterceptorS = (requestContent:AxiosRequestConfig) => {
  requestContent.headers = {
    Authorization: uni.getStorageSync('token') || ""
  }
  return requestContent;
};
// 错误的请求
const requestInterceptorE = (error:unknown) => {
  cancel('错误的请求');
  
  return Promise.reject(error);
};
// 正确的响应
const responseInterceptorS = (ResponseMonitor:AxiosResponse) => {
  let data:ResPonseData = <ResPonseData>ResponseMonitor.data;
  const code = data.code || 200;
  var msg = data.msg;
  if (msg == null)
    msg = "";
  uni.hideLoading()
  
  if (code == 200) {
    return data
  } else {
    if (data.msg == "登录状态已过期"||data.msg == "令牌不能为空") {
      // 清楚本地token
      uni.setStorageSync('token', "");
      uni.redirectTo({
        url: '/pages/index/index',
      })
      uni.showToast({
        title: '登陆失效',
        icon: 'error',
        duration: 1000
      })
      return
    } else {
      uni.showToast({
        title: msg,
        icon: 'error',
        duration: 3000
      })
    }
  }
  return <AxiosResponse>ResponseMonitor.data as any;
};

// 错误的响应
const responseInterceptorE = (error:unknown) => {
  
  return Promise.reject(error);
};

// 请求拦截器配置
server.interceptors.request.use(requestInterceptorS, requestInterceptorE);

// 响应拦截器配置
server.interceptors.response.use(responseInterceptorS, responseInterceptorE);


// 配置中间件，进行展示并加锁
server.use(async (ctx:MiddlewareContext, next:MiddlewareNext) => {
  // 请求发送前
  const { req, res } = ctx;

  // 调用 next 继续执行后续逻辑，最终发送请求
  await next();
});

export default server;
