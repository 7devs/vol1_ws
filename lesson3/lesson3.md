#lesson03
时间：2016-08-29 19:00~21:00  

## 条件语句
* `if`statement
* `if/else`
* `if/else if`
* 条件嵌套

```
var cat = 'mimi';
if(cat === 'mimi'){
    console.log('wang wang');
} else if(cat === 'xxx') {
    console.log('i am xxx')
} else if(cat === 'cc') {
    console.log('666');
} else {
    console.log('it is not a cat');
};
```   
## DEMO演示

## 编码规范
* 缩进   
`Tab`还是`whiteSpace`?  
* 换行

## 循环语句
* `for`statement   

```
for(var i = 0; i < 10; i++) {
    //break;
    if(i === 7) {
        break;
    }
    //continue
    if(i === 3) {
        continue;
    }
    // do something
    console.log('i = ' + i);
};
```
输出：  
```
i =  0
i =  1
i =  2
i =  4
i =  5
i =  6
```
* `while`statememt
```
var i = 10;
while(i >0){
    i--;
    //break;
    if(i ===2){
        break;
    }
    if(i === 3){
       continue;
    }
    // do something
    console.log('i =' + i);
}
```
输出为：   
```
i =9
i =8
i =7
i =6
i =5
i =4
```

* `switch`statement流程控制
相比，优点：一次定位到符合条件的值，效率更高
注意：
- `case...break`，漏写`break`容易带来bug.
- `default`写在最后
```
var animal = 'cat';
switch(animal){
  case 'cat':
      console.log('I am a cat');
      break;
  case 'dog':
      console.log('dog woof~~');
      break;
  case 'person':
  default:
      console.log('it is not a animal');
      break;
}
```
也可以不同条件满足，输入同一个结果。

## 函数`function`的定义与调用
函数本身就是变量的一种

定义方法1：  
```
//function
function fun1() {
    console.log('...')
}
```
定义方法2：  
```
function func2(str) {
    console.log('str is ', str);
}
```
定义方法3：  
```
var func3 = function(...args) {
  console.log(args, func5());
  console.log('args.length = ', args.length);
}
```
定义方法4：  
```
var func4 = new Function(`return 3:`);
```
定义方法5：  
```
function func5() {
    return 4;
}

```
//class
function Cat(name){
    this.name = name;

    this.getMyname = function(){
        return this.name;
    }

    this.say = function() {
        return 'Miao~~';
    }
}
```
