NO.001
```
vvar nameString = function (name) {
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
