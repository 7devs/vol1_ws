#Lesson6
##Q001:
本课中，对应DEMO4， `api.js` 中下列语句：
```
router.route('/user/:key')
    .get(function(req, res, next) {
        var key = req.params.key;
        if(userModel[key]) {
            res.status(200).send(userModel[key]);            
        } else {
            res.status(404).send('data is not exiting.');
        }
```
其中，
`req.params.key`是指什么？


##A001:
参考：[Node Express获取参数的几种方式] (http://xuyuan923.github.io/2014/10/10/node-tutorial-req/)
总结出以下4点：
1. 对于path中的变量，均可以使用req.params.xxxxx方法
2. 对于get请求的?xxxx=,使用req.query.xxxxx方法
3. 对于post请求中的变量，使用req.body.xxxxx方法
4. 以上三种情形，均可以使用req.param()方法，所以说req.param()是req.query、req.body、以及req.params获取参数的三种方式的封装。

注意：
在测试 `req.param()是req.query、req.body、以及req.params获取参数的三种方式的封装` 时，发现程序可以通过，并返回正确，但控制台给出如下的提示：
```
express deprecated req.param(name): Use req.params, req.body, or req.query instead
```
所以，尽量不要使用 `req.param()` 方法。
