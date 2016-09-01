# No.005
```
var date = Date()
date
"Thu Sep 01 2016 20:12:55 GMT+0800 (CST)"
date.getMonth()
```
**ERROR**:`Uncaught TypeError: date.getMonth is not a function(…)`
check the type of `date`:`typeof(date)`      
output:"string"

**CORRECT**:'var date = new Date()`
check the type of `date`:`typeof(date)`   
output:"object"

```
date.getMonth()
8
```
