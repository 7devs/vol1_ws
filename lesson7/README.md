#LESSON7
date:2016/09/20

##预习
* 预习代码： https://github.com/dofy/parker

1. web服务
1. router
1. 内容解析器
1. 内容返回（自动回复）
1. 定时任务（模版消息）

---

## **/parker** 项目说明：

流程：拿到消息 -> 解析消息parese －> 根据消息类型，由routers路由分发 -> 分发至不同消息类型进行处理

**/lib/parsers 解析器和分发** 文本类型为`XML`，解析代码见`/lib/routers/wxapi.js`
* Event 类型
* Text 类型
* Voice 类型（与Text类型的处理基本一样，仅是消息类型不同）

/lib/Robots－消息的处理，业务逻辑：
* alert
* address
* admin
* ...

/lib/routers 路由

/jobs 定时任务（模版消息的处理）

/Views：公众号的页面模版(网页)

/static 静态文件：图片、css

**菜单创建**
菜单是全局的；
菜单有一段时间的缓存；
如果想让不同用户显示不同的菜单，则不适合用这个功能。（需要重新订阅？）
因此，尽量做成全局的。


* 开放文档：自动回复

https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140453&token=&lang=zh_CN

* 开发文档：模版消息
https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433751277&token=&lang=zh_CN

作业：
* 预习文档

##`wechat`接受消息

### 接受普通消息
文本消息：
```
<xml>
 <ToUserName><![CDATA[toUser]]></ToUserName>
 <FromUserName><![CDATA[fromUser]]></FromUserName>
 <CreateTime>1348831860</CreateTime>
 <MsgType><![CDATA[text]]></MsgType>
 <Content><![CDATA[this is a test]]></Content>
 <MsgId>1234567890123456</MsgId>
 </xml>
 ```
### 自定义菜单事件推送
推送XML数据包示例：点击菜单拉取消息时的事件推送
[wiki](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141016&token=&lang=zh_CN)
```
<xml>
<ToUserName><![CDATA[toUser]]></ToUserName>
<FromUserName><![CDATA[FromUser]]></FromUserName>
<CreateTime>123456789</CreateTime>
<MsgType><![CDATA[event]]></MsgType>
<Event><![CDATA[CLICK]]></Event>
<EventKey><![CDATA[EVENTKEY]]></EventKey>
</xml>
```

### 发生模版消息
