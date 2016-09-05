#语法（Grammar）
##数字（Numbers）
JavaScript只有一个数字类型，为64位的浮点数。它没有分离出整数类型，所以1和1.0的值相同。这完全避免了短整型的溢出问题。
`NaN`是一个数值，它表示一个不能产生正常结果的运算结果。
```
typeof(NaN)
"number"
```
`NaN`不等于任何值，包括它自己。可以用函数`isNaN(number)`检测`NaN`。  
`Infinity`表示所有大于`1.79769313486231570e+308`的值。
```
2e+309
Infinity
(1.79769313486231570e+308)+(1e+300)
Infinity
(1.79769313486231570e+308)+(1e+30)
1.7976931348623157e+308
(1.79769313486231570e+308)+(1e+3)
1.7976931348623157e+308
```

##字符串(Strings)
字符串字面量可以被包在一对单引`''`号或双引号`""`中。JavaScript中的所有字符都是16位的。
JavaScript没有字符类型，要表示一个字符，只需创建仅包含一个字符的字符串即可。
反斜杠`\`是转义符。`\u`约定用来制定数字字符编码。
字符串是不可变的，一旦字符串被创建，就永远无法改变它。可以通过`＋`运算符连接其他字符串来创建一个新字符串。
`cat' +  'a' +'t' === 'cat'`,结果是`true`。

**All string methods return a new value. They do not change the original variable.**

* string.charAt(pos)
如果`pos<0`或者`pos>=string.length`，返回空字符串。

* string.charCodeAt(pos)
与charAt(pos)方法类似，只是返回`pos`位置字符的字符码位。
