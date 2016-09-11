#Lesson5

##如何用Node.js搭建基础Web服务
* 与其他后段语言的区别
* 与Nginx的关系（暂时不讲）
Nginx可配置域名、端口等，可以运行多个服务
* web服务基础逻辑
- request/response
- DNS/ftp/http
- 本机localhost／127.0.0.1
* 如何实现
- http
- router


**第一个web服务:**   
代码 `index.js`:
```
var http = require('http');
//creat a server
//req:request; res:response
var server = http.createServer(function(req, res) {
  res.write('hello world');
  res.end();
});

server.listen(3000);
```
启动服务：
```
$node index.js
```
在浏览器打开: `localhost:3000`

##Node.js的一些基础概念
* 目录结构
- \*.js (入口)
- lib  (自己创建的包)
- node_modules （安装时自动创建的包）

* npm
* express
- 利用postman模拟
-
- DELETE一般通过返回状态码如403、200，来判断操作是否成功，利用postman可以模拟验证

**初始化新项目**
```
# 项目初始化
npm init
# 安装 Express 包，`--save`参数的作用，自动将安装的依赖写入 package.json，放入dependencies字段。
npm install express --save
# 安装 bodyParser 包
npm install body-parser --save
# 查看 package.json 内容
cat package.json
# 编写项目代码
# 运行项目
node index.js
```

安装项目依赖
```
# 安装依赖
npm install  
# 运行项目
node index.js
```
安装body-parser
```
npm install body-parser
```

##作业：
* 创建一个新的项目
* 仿照demo2，利用postman写一些新的地址，用POST/PUT传递一些数据

##复习：
练习时，出现的一些错误，记录在下面。
###注意：
* 录入代码时，注意输入url时,开始的`/`不要忘记敲进去，如：`'/user/:name'` 或 `/test`。
