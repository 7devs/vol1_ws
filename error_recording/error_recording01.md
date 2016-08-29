# No.001
```
var nameString = function (name) {
	return "Hi, I am" + " " + name;
};
console.log(nameString(sen));
```
**ERROR**:`sen is not defined`  
**CORRECT**:`sen` should be `"sen"`.
```
var nameString = function (name) {
	return "Hi, I am" + " " + name;
};
console.log(nameString("sen"));
```

# No.002
```
var sleepCheck = function(numHours){
    if numHours >= 8 {
        return "You're getting plenty of sleep! Maybe even too much";
    };
    else {
        return "Get some more shut eye!";
    };

sleepCheck(10);
sleepCheck(5);
sleepCheck(8);
```
**ERROR**: `SyntaxError: Unexpected identifier`  
**CORRECT**:  
1. `condition` after `if` should be in the (). just like `(numHours >= 8)`.  
2. there is no `;` after `if(...){...}` or `else {...}`.  
3. put a `};` at the end of the function.  
```
var sleepCheck = function(numHours){
    if (numHours >= 8) {
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else {
        return "Get some more shut eye!";
    }
};   
sleepCheck(10);
sleepCheck(5);
sleepCheck(8);
```   
