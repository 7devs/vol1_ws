#LESSON8
date:2016/09/23

##预习
* wechat测试号：
```
http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index
```
测试服务器：`https://wechatdev.yokeneng.com/index.html`
更新测试服务器：`https://wechatdev.yokeneng.com/`

URL：
`https://wechatdev.yokeneng.com/8013/wxapi`

##新建项目
* 端口号：13
1. 建立服务和基本路由
`index.js`
`lib/routers/wxapi.js`
进入地址 `localhost:8013/wxapi` 测试服务可用。

在服务器上创建服务，成功后显示：
```
# /home/dofy/wechatdev.yokeneng.com > mkdir 8013
# /home/dofy/wechatdev.yokeneng.com > git clone https://github.com/7devs/vol1_ws.git 8013
Cloning into '8013'...
```
启动服务：
```
# /home/dofy/wechatdev.yokeneng.com/8013 > npm install
demo6-lesson7@1.0.0 /home/dofy/wechatdev.yokeneng.com/8013
├─┬ body-parser@1.15.2
│ ├── bytes@2.4.0
│ ├── content-type@1.0.2
│ ├─┬ debug@2.2.0
│ │ └── ms@0.7.1
│ ├── depd@1.1.0
│ ├─┬ http-errors@1.5.0
│ │ ├── inherits@2.0.1
│ │ ├── setprototypeof@1.0.1
│ │ └── statuses@1.3.0
│ ├── iconv-lite@0.4.13
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── qs@6.2.0
│ ├─┬ raw-body@2.1.7
│ │ └── unpipe@1.0.0
│ └─┬ type-is@1.6.13
│   ├── media-typer@0.3.0
│   └─┬ mime-types@2.1.12
│     └── mime-db@1.24.0
├─┬ express@4.14.0
│ ├─┬ accepts@1.3.3
│ │ └── negotiator@0.6.1
│ ├── array-flatten@1.1.1
│ ├── content-disposition@0.5.1
│ ├── cookie@0.3.1
│ ├── cookie-signature@1.0.6
│ ├── encodeurl@1.0.1
│ ├── escape-html@1.0.3
│ ├── etag@1.7.0
│ ├── finalhandler@0.5.0
│ ├── fresh@0.3.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── parseurl@1.3.1
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@1.1.2
│ │ ├── forwarded@0.1.0
│ │ └── ipaddr.js@1.1.1
│ ├── range-parser@1.2.0
│ ├─┬ send@0.14.1
│ │ ├── destroy@1.0.4
│ │ └── mime@1.3.4
│ ├── serve-static@1.11.1
│ ├── utils-merge@1.0.0
│ └── vary@1.1.0
├─┬ express-xml-bodyparser@0.3.0
│ └─┬ xml2js@0.4.17
│   ├── sax@1.2.1
│   └─┬ xmlbuilder@4.2.1
│     └── lodash@4.16.1
└── xml@1.0.1

npm WARN demo6-lesson7@1.0.0 No description
npm WARN demo6-lesson7@1.0.0 No repository field.
# /home/dofy/wechatdev.yokeneng.com/8013 > pm2 start index.js --name "we8013"
[PM2] Starting /home/dofy/wechatdev.yokeneng.com/8013/index.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼──────────┤
│ we8001   │ 10 │ fork │ 19879 │ online │ 0       │ 19m    │ 0%  │ 25.3 MB   │ disabled │
│ we8002   │ 6  │ fork │ 19675 │ online │ 0       │ 20m    │ 0%  │ 25.7 MB   │ disabled │
│ we8003   │ 4  │ fork │ 19668 │ online │ 0       │ 20m    │ 0%  │ 25.0 MB   │ disabled │
│ we8004   │ 9  │ fork │ 19835 │ online │ 0       │ 19m    │ 0%  │ 26.3 MB   │ disabled │
│ we8006   │ 5  │ fork │ 29199 │ online │ 1       │ 7m     │ 0%  │ 24.9 MB   │ disabled │
│ we8007   │ 8  │ fork │ 19699 │ online │ 0       │ 20m    │ 0%  │ 25.1 MB   │ disabled │
│ we8008   │ 2  │ fork │ 27471 │ online │ 91      │ 10m    │ 0%  │ 25.2 MB   │ disabled │
│ we8009   │ 3  │ fork │ 27478 │ online │ 30      │ 10m    │ 0%  │ 25.1 MB   │ disabled │
│ we8010   │ 11 │ fork │ 20406 │ online │ 0       │ 19m    │ 0%  │ 24.9 MB   │ disabled │
│ we8011   │ 13 │ fork │ 26097 │ online │ 0       │ 12m    │ 0%  │ 24.8 MB   │ disabled │
│ we8013   │ 14 │ fork │ 818   │ online │ 0       │ 0s     │ 0%  │ 12.2 MB   │ disabled │
│ we8014   │ 7  │ fork │ 19691 │ online │ 0       │ 20m    │ 0%  │ 25.3 MB   │ disabled │
│ we8017   │ 0  │ fork │ 17625 │ online │ 0       │ 24m    │ 0%  │ 21.6 MB   │ disabled │
│ we8018   │ 1  │ fork │ 747   │ online │ 1       │ 13s    │ 0%  │ 30.4 MB   │ disabled │
│ we8019   │ 12 │ fork │ 21141 │ online │ 0       │ 18m    │ 0%  │ 26.6 MB   │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴──────────┘
 Use `pm2 show ` to get more details about an app
```

1. 验证wechat服务
原理：验证字符串 `echostr`
提交新的代码 `req.query.echostr`

1. 更新kenengba服务器上代码

1. 配置wechat服务
在`http://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index`上填入

`https://wechatdev.yokeneng.com/8013/wxapi` 和 token(随意)

1. 处理消息-发送消息－回复消息

```
当普通微信用户向公众账号发消息时，微信服务器将POST消息的XML数据包到开发者填写的URL上。
```
POST方法：
`.post(xmlBodyParser()`  
解析xml为object：
```
.route('/')
    .post(xmlBodyParser( {
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;//将xml解析成object(data)
    })
```

CDATA是特殊格式


回复消息-xml（wechat）：
```
<xml>
<ToUserName><![CDATA[toUser]]></ToUserName>
<FromUserName><![CDATA[fromUser]]></FromUserName>
<CreateTime>12345678</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[你好]]></Content>
</xml>
```

测试postman：
http://localhost:8013/wxapi

选择POST，  body－raw－XML(test/xml)


**作业**：
发送1～9，返回不同内容。

**下节课**：
整理代码，更优雅；
学习处理语音、文本等消息。
