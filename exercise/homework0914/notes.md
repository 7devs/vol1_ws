
##时间记录  

| 日期 | 用时 |
| ---- | ---- |
| 20160914 | 30min |
| 20160915 | 3.5h  |
| 20160915 | 2h |

##`req.query`

[参考文档](http://expressjs.com/zh-cn/api.html#app.route)

This property is an object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.

```
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
```
在路由参数中， url 地址写成：
```
router.route('/search')
    .get(function(req, res, next) {
        var comSearch = req.query.company;
    }
```

##使用 `RegExp` 正则表达式

**问题：如何将 `String` 转化为 `RegExp`**

方法一：`var re = new RegExp("a|b", "i");`

方法二：`var re = /a|b/i;`

>参考：
* [w3school](http://www.w3schools.com/js/js_regexp.asp)
* [stack overflow](http://stackoverflow.com/questions/874709/converting-user-input-string-to-regular-expression)


##Errors
###未开放自定义的包，导致引入时报错

错误信息：
```
TypeError: Router.use() requires middleware function but got a Object
    at Object.<anonymous> (/homework0914/index.js:12:5)
```

更正：在 userAPI.js 中加入：
```
//对外开放 router 对象
module.exports = router;
```
