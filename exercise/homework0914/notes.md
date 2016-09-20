
#时间记录  

| 日期 | 用时 | 说明 |
| ---- | ---- | ---- |
| 20160914 | 30min | 搭建项目与框架 |
| 20160915 | 3.5h  |   |
| 20160915 | 2h | 完成 GET ／user 模块 |
| 20160916 | 2h15min | 完成 GET ／album 模块 |
| 20160917 | 2h | 完成 PUT /user 和 PUT /album 及 fixed bugs |
| 20160917 | 1h | fixed bugs |
| 20160920 | 30min | fixed bugs |
| 历时4天 | 11h45min+ | Done |

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

##返回信息不符合要求 (**待解决**)

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

## `req.query` 和 `req.params`
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

## 正则表达式 `RegExp` 参数的使用（原因待查）
本例中，将待搜索的字符串转换为正则表达式的验证条件，原代码：
```
re = new RegExp(typeSearch, "g");
console.log(albumModel[i].type, i);
```
输出：
```
$ node index.js
Homework0914 is running...
摇滚 0
摇滚 5
```
结果仅返回 **两条** 数据，实际应该有 **四条** 符合。

将转换代码中的参数 `"g"` 去掉后，即采用如下代码：
```
re = new RegExp(typeSearch);
console.log(albumModel[i].type, i);
```
执行后，输出结果正常：
```
$ node index.js
Homework0914 is running...
摇滚 0
摇滚 1
摇滚 5
摇滚 6
```
原因待查。而且该问题不是总能重现，当搜索“摇滚”时出现结果少的问题，而搜索“民谣”时，返回结果是正常的。

##Postman表单Body提交的值为`String`，与原类型不符
错误代码：
```
router.route
    .put(function(req, res, next) {
    var id = req.params.id,
        index = id - 1;
    if(userModel[index]) {
        //判断 age 是否为 数值型
        //console.log(typeof(userModel[index].age));
        if(typeof(userModel[index].age) === "number") {
            //获取表单中request.body.age输入的新值，并更新指定用户的年龄age
            userModel[index].age = req.body.age;
            res.status(200).send(userModel[index]);
        } else {
            res.send("the type of 'age' is not 'number'!");
        }
    } else {
        res.status(404).send('Not Found.');
    }
    console.log(typeof(userModel[index].age)); //利用postman表单body提交的age值是String
})
```
说明：
利用postman表单body提交的age值是`String`，与原数据类型`Number`不符。

修改后代码：
```
//获取表单中request.body.age输入的新值，并转为 Number 类型
//更新指定用户的年龄age
var newAge = parseInt(req.body.age);
userModel[index].age = newAge;
```
