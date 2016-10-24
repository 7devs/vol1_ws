#记录开发过程
| 日期 | 用时 | 说明 |
| ---- | ---- | ---- |
| 20161024 | 15:00- | 搭建项目与框架 |
| 20161024 |


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
  - express-xml-bodyparser _(微信消息解析)_

- 创建入口文件`index.js`
1. 引入`express`和`body-parser`库
1. 建立`service`，监听`8103`端口

- 创建`/lib/config.js` 和 `/lib/wechat.js`,连接 `wechat API`
1. 填写`appid`, `secret`, and `template`id. **注意项目合并是需要更换为项目的id**

- 创建 routers, 解析微信消息
1. 创建`/lib/routers/wxapi.js`

- 创建 parsers, 用于解析微信消息
1. 创建 wechat 入口文件， `/lib/parsers/index.js`
1. 创建 `event`, `text` 等消息类型入口
1.

- 创建 menu，制作菜单
1. 创建`/lib/menu.js`, 作为查询入口

- 






- 在入口文件中引入`wechat.js`和`config.js`

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
