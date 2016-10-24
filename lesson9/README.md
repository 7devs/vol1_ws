#Lesson9
date:2016-09-26(缺席)

##需要引入的包
* express
* bodyParser
* request


##疑问
###问1:初始化 wechat API
如果没有初始化，会如何？
```
//初始化wechat API
wechat(conf.wechat);
```

###配置文件`config.js`中的值从哪取得
```
{
    wechat: {
        appid: '*******************',
        secret: '*****************',
        // wechat API 地址，地址后需要连接相关功能地址，例如：https://api.weixin.qq.com/cgi-bin/user/get
        apiurl: 'https://api.weixin.qq.com/cgi-bin/',
        reurl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        snsurl: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        template: {
            alert: '********************'
        }
    }
}
```

###`next && next();`是起什么作用，原理是什么？
`wechat.js`中，
```
function(err, res, body) {
            next && next();
        }
    )
```
相当于
```
if(next) {
  next();
}
```

###如何判断token是否过期？原理是什么？
`expires = +new Date() + body.expires_in * 1000;`

###不同的消息类型有不同的数据结构

###几种属性或方法待查
* `str = req.query.echostr`
* `var reContent = parser(data);`
