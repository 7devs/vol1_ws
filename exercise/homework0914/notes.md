
#时间记录  

| 日期 | 用时 | 说明 |
| ---- | ---- | ---- |
| 20160914 | 30min | 搭建项目与框架 |
| 20160915 | 3.5h  |   |
| 20160915 | 2h | 完成 GET ／user 模块 |
| 20160916 | 2h15min | 完成 GET ／album 模块 |
| 20160917 | 10:15- | |

---

#要点记录
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

##使用 `PUT` 方法
```
PUT
The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI.
```
使用 `PUT` 方法，可以将提交的表单中的数据，更新到源数据中。注意必须引入 `body-parser` 包。使用的参数举例如下：
```
dataBase.age = req.body.age;
```

>参考文档：
* [Hypertext_Transfer_Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol);
* [Stack Overflow](http://stackoverflow.com/questions/25730777/put-route-with-node-js);
---

#Errors记录
##未开放自定义的包，导致引入时报错

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
将 `req.query.name` 改为 `req.params.name` , 测试结果正常。

## `res.sen` 返回的错误
原代码：
```
res.status(200).send(sexTotal);
//本例中，sexTotal === 5 (数值型)
```
由于返回的数据小于200（待核实），导致报错，错误信息：
```
express deprecated res.send(status): Use res.sendStatus(status) instead lib/routers/userAPI.js:24:21
RangeError: Invalid status code: 5
```
将返回的 **字符型** 数据转化为 **数值型** ，更正代码：
```
res.status(200).send(sexTotal.toString());
```
浏览器返回正常。

按照控制台的建议，采用 `res.send(status)` ，如：
```
res.sendStatus(200).send(sexTotal);
```
浏览器返回 `OK` 状态, 不再报错。 不过，不能返回数据。
