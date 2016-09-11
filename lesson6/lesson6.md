#Lesson6
##私有包
* NPM包管理平台 (NPM)[https://docs.npmjs.com/]
* npm命令行
在项目文件夹下，`npm update` 更新项目下的modules包文件，加上 `--save` 会将新的版本号更新到 `package.json` 配置文件中。

## 目录树
- demo
  - lib(个人私有的包)
    - modules（描述数据）
      - user.js(针对用户的处理逻辑)
    - routers(解析的地址，处理逻辑／)
      - api.js

  - tools()
- index.js
- package.json

##DEMO代码讲解
* `use`方法 中间件
```
app.use(`/api`, require('.lib/routers/api'));
app.use(`/*`, function(req, res, next)){ }
# 除/api 外的，用function处理
```

##引用私有的方法
* 对外开放方法或接口，使用 `module.exports` ，由 `require` 方法对应。
```
module.exports.function = function;
```
其中，`function` （名称自定义）。

##git命令，恢复修改前之前的状态
`git checkout -- [filename]`

##安装 `PM2`
