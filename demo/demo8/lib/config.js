// 项目配置文件
module.exports = {
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
