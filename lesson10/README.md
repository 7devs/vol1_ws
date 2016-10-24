# Lesson10
date:2016-09-29

## RESTful 风格 接口 地址规范要求

微信接口地址一般符合RESTful规范

操作方法用 POST GET等，操作url地址：
`{{api}}/v1/mylist?token={{token}}`

参考：
* 阮一峰的blog
* 微信wiki中各个部分


## 微信验证

request包相当于服务端的 `postman`
默认方法是 GET

获取用户信息： GET
创建菜单： POST

对象`qs:{}` 连接到地址

参考文档： [request文档](http://www.npmjs.com/package/request)

## wechat包

## 模版消息自定义
* 在微信平台上增加模版和内容，得到 id ，`config.js`中填入id
* 在发送模版消息的发送接口 POST 来发送
* 在`wechat.js` 中 `sendByTemplate()``
* 测试：在`event-parser.js` 中加入 ``
参考文档：[发送模版消息wiki](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433751277&token=&lang=zh_CN)

## 各类型消息的模版
```
<xml>
 <ToUserName><![CDATA[toUser]]></ToUserName>
 <FromUserName><![CDATA[oxBgYvzCfG1GtDh7Yn2ZggqFyGZk]]></FromUserName>
 <CreateTime>1348831860</CreateTime>
 <MsgType><![CDATA[event]]></MsgType>
 <Content><![CDATA[订餐查询]]></Content>
 <Event><![CDATA[CLICK]]></Event>
 <EventKey><![CDATA[menu2]]></EventKey>
 <MsgId>1234567890123456</MsgId>
 <recognition><![CDATA[语音内容]]></recognition>
 </xml>
```


## 错误信息与处理
```
SyntaxError: Unexpected token ;
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:373:25)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at module.exports (/Users/fantasy/works/ws_wx/lib/parsers/index.js:11:21)
    at /Users/fantasy/works/ws_wx/lib/routers/wxapi.js:17:27
    at Layer.handle [as handle_request] (/Users/fantasy/works/ws_wx/node_modules/express/lib/router/layer.js:95:5)
```
在输入为以下内容：
```
<MsgType><![CDATA[text]]></MsgType>
```
错误：
```
case '4'; //错误：应为冒号 :
          reContent = '444';
          break;
```


------作业部分，更新代码-----
* wechat：标注“新增1017”
* text-parser.js: 标注“新增1017”
