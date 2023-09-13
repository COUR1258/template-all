import server from "./axiosServer";

// get请求
export function geoGet(url:string, params = {}) {
  return server({
    url: url,
    method: "get",
    params: params,
  });
}

// post请求
export function geoPost(url:string, data = {}) {
  return server({
    url: url,
    method: "post",
    data: data,
  });
}

// data.name: 后端获取路径
// data.filePath: 你的本地路径
// 文件上传
export function geoUpFile(url:string, data = {}) {
  return server({
    url: url,
    method: "POST",
    upload: true,
    data: data,
  });
}
