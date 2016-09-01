# 对象
2016-09-01
## 对象的概念
* 类、子类
* 继承
## 对象的定义
* 属性（Properties）
* 方法（function）
```
var obj = {
  name: 'seven',
  walk: function(x) {
    console.log('walk', x, 'minutes.');
  }
}

console.log(obj.name);
obj.walk(5);
```
## 内建对象
* Array
```
var obj = {
    name: 'seven',
    xxx: [
    1,
    'str',
    {x:1},
    [1,2,3]
    ],
    walk: function(x) {
        console.log('walk', x, 'minutes.');
}

var arr = [1,2,3];
console.log(arr[0]);
console.log(obj.xxx[2]);
console.log(obj.walk(10));

```
- 数组的方法
**.splice()方法**
注意：arr.splice(index,howmany)返回值是删除部分的元素。


* Date
`getDate()` 返回1～31；
`getDay()` 返回0~6;
`getMonth()` 返回0～11；
example:
```
var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Junly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']   

date = new Date()
Thu Sep 01 2016 20:30:23 GMT+0800 (CST)

date.getMonth()
8

console.log('This month is ' + m[date.getMonth()])
This month is Sep
```

* RegExp
与字符串相关的字符串类型的方法 `.replace()` `.search()` `.match()`

* Math

# 待练习
* 字符串的方法
例：用户登录时对大小写的处理
* 数组的方法
* Number对象方法
常量：在ES5版本里面，常量是不能改变的
变量：
NaN：数值型的，非数字值；在非数字类型的值 转化 为数值型时，如“abc"转化为"NaN"
```
parseInt('1');
```
返回值：`1`
```
parseInt('a');
```
返回值：`NaN`
