# 介绍
> flask + docker 模板

# 项目基本配置
## 手动部署
### 安装uwsgi
#### pip方式安装
```shell
sudo apt-get install libpcre3 libpcre3-dev
pip install uwsgi --no-cache-dir
```
#### nginx配置
```
server {
    listen         81;
    server_name    localhost;
    charset UTF-8;
    access_log      /root/weixinBack/wxpx_chuli/log/nginx/wxpx_access.log;
    error_log       /root/weixinBack/wxpx_chuli/log/nginx/wxpx_error.log;
    client_max_body_size 75M;
    location / { 
        include uwsgi_params;
        uwsgi_pass 127.0.0.1:8008;
        uwsgi_read_timeout 60;
    }   
    location /static {
        alias /root/weixinBack/wxpx_chuli/static;
     }
 }

```

## docker部署
。。。

# 操作
## 手动部署操作
### 启动项目
```shell
make start
```
### 停止项目
```shell
make stop
```