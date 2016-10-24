var apiurl, appid, secret,
accessToken, expires = 0,
    //用于在服务端发送请求的包
    request = require('request');

// 初始化，保存 wechat API 相关配置
function init(options) {
    appid = options.appid;
    apiurl = options.apiurl;
    secret = options.secret;
}

/*




*/

/**
获取 API 访问权限
@see https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183&token=&lang=zh_CN
*/

function getAccessToken(next) {
    // 利用 request 包向 wechat  服务器发起请求
    request.get(
        //接口地址
        apiurl + 'token',
        //接口参数
        {
             // query string 数据
             qs: {
                 grant_type: 'client_credential',
                 appid: appid,
                 secret: secret
             }
        },
        // 请求回调（请求成功后的处理过程）
        function(err, res, body) {
            var body = JSON.parse(body);
            // 保存 access token
            accessToken = body.access_token;
            // 保存 token 过期时间
            expires = +new Date() + body.expires_in * 1000;
            next && next();
        }
    );
}


//检测保存的 token 是否已经过期，如过期则需要请求心的 token
function checkAccessToken(next) {
    if(+new Date() >= expires) {
        getAccessToken(next);
    } else {
        next();
    }
}

//public functions
/*


*/


/**
利用 wechat API 创建自定义菜单
@see https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013&token=&lang=zh_CN
*/
function createMenu(menuConfig) {
    checkAccessToken(function() {
        // 用 request 包向 wechat 服务器发起 POST 请求（按文档要求）
        request.post(apiurl + 'menu/creat', {
            qs: {
                access_token: accessToken
            },
            json: true,
            // body 参数中是菜单结构 json 格式描述
            body: menuConfig
        });
    });
}

// 公开默认方法
module.exports = init;
// module.exports.getUser = getUser;
// 公开创建菜单方法
module.exports.createMenu = createMenu;
// module.exports.getUserInfo = getUserInfo;
// module.exports.sendByTemplate = sendByTemplate;
// module.exports.getOpenidBycode = getOpenidBycode;
