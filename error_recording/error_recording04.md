#NO.006
```
var contacts = new array("Bob", "Mary");
```

**ERROR**:  
`Uncaught ReferenceError: array is not defined`

**CORRECT**:  
check the `array ` should be `Array`  
```
var contacts = new Array("Bob", "Mary");
```
OR, using an array literal is the easiest way to create a JavaScript array.
```
var contacts = ["Bob", "Mary"];
```

**BESIDES**:  
Can arrays be compared in JavaScript?
```
[1, 2] === [1, 2];
```
Output:
```
false
```

it refer to here:
[http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript]
