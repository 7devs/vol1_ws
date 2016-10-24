var app = require('express')(),
    bodyParser = require('body-parser'),
    //配置文件
    conf = require('./lib/config'),
    //wechat API 功能包
    wechat = require('./lib/wechat');

app.use(bodyParser.urlencoded({
    extended: false
}));

//初始化wechat API
wechat(conf.wechat);

//创建自定义菜单，lib/menu.json 为菜单结构描述文件
//相关文档： https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013&token=&lang=zh_CN
wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8013, function(err) {
    console.log('listening at 8013...');
})
