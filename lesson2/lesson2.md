#lesson02:javascriptj基础

开发者工具：F12或command＋option＋I（mac）

alert(“Hello world”);

变量

运算符：a++（a--） 与 ++a(—a) 的返回值不同；
     a = 3
     a++ (此时，a=4，返回值为3)
     而：
     a = 3
     ++a (此时，a=4，返回值为4)

运算符：==（仅判断“值”）与===（还判断“类型”）
num = 2
2
str = "2"
"2"
num == str
true
num === str
false
尽量使用 == 做判断；

typeof() 查看数据类型
隐形

逻辑运算：
  and（&&）
  OR（||)
  NOT(!)
 三元运算：
  boolean ? ifture:iffalse
 a = 1, b = 2, c = 3, d = 4;

“if(a>b){
1
} else {
2
}”
2
a > b ? 1 : 2;
2    
