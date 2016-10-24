

分工：
1. 数据模型的文件和路由器一般是对应的，和模版对应。
1. 数据
1. 逻辑

协作方式：
1. 前端 和 后端；
1. 按模块分；
1. 写页面、写数据、写逻辑结构


# 项目开发流程：
- GitHub 创建项目仓库
- 获取git目录
- 进入工作目录
- 执行 git clone git_project_url
- **初始化项目**
  - npm init
- 安装需要的 npm 包
  - express
  - body-parser
  - ejs _(模版引擎)_
  - mongoose
  - xml
  - express-xml-bodyparser _(微信消息解析)

- 创建入口文件
- 创建文件结构
  - lib
    - parsers/ _(微信消息解析)_
      - text-parser.js
      - voice-parser.js
      - event-parser.js
      - index.js
    - routers/
      - wxapi.js
      - xxx.js _(逻辑相关页面)_
    - models/
      - user.js
      - xxx.js
    - views/
      - xxx.js(逻辑页面模版)
    - config.js
    - wechat.js(微笑API封装, copy 之前项目中的文件)
  - package.jason
  - index.js(入口文件)
- 工作（代码维护）流程
  1. git pull
  1. 编辑代码
  1. git status
  1. git add <file> <file2>
  1. git commit -m '备注'（建议没修改一个文件提交一次）
  1. 重复2～6.
  1. git push
