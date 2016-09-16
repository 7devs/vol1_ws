
##时间记录  

| 日期 | 用时 | 说明 |
| ---- | ---- | ---- |
| 20160914 | 30min | 搭建项目与框架 |
| 20160915 | 3.5h  |   ｜
| 20160915 | 2h | 完成 GET ／user 模块 ｜
| 20160916 | 2h15min | 完成 GET ／album 模块 ｜

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

##向 `Array` 中添加数据

用 `push` 方法，举例：

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
```
其他 `Array` 的方法[参考文档](http://www.w3schools.com/js/js_array_methods.asp) 。

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

###返回信息不符合要求 (**待解决**)

代码如下：   
```
//得到指定 id 的 唱片数据 ，并返回
router.route('/:id')
    .get(function(req, res, next) {
        var id = req.params.id,
            index = id - 1;
        console.log(albumModel[index]);
        if(albumModel[index]) {
            res.status(200).send('your search is: ' + albumModel[index]);
        } else {
            res.status(404).send('Not Found.');
        }
    })
```
浏览器返回结果(**不符合**)：
```
your search is: [object Object]
```
而通过 `console.log(albumModel[index])` 控制台输出的信息为(**正常**)：
```
{ title: '私奔', type: '摇滚', length: 203, singer: '郑钧' }
```

### `req.query` 和 `req.params`
代码如下：
```
//返回指定歌手的全部歌曲
router.route('/:name')
    .get(function(req, res, next) {
        var singerSearch = req.query.name;
        console.log(singerSearch);
    }
```
控制台输出：  
```
undefined
```
将 `req.query.name` 改为 `req.params.name` , 测试结果。
