# No.003
```
var cat = 'mimi';
if(cat === 'mimi'){
    console.log('wang wang');
} else if(cat === 'xxx') {
    console.log(i am xxx')
} else if(cat === 'cc') {
    console.log(666);
} else {
    console.log('it is not a cat');
};
```
**ERROR**:`SyntaxError: missing ) after argument list`  
**CORRECT**:`console.log('i am xxx')`   
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

# No.004
```
var snoopy = {
    species: "beagle"；
    age: 10
};
```
**ERROR**: use comma `,`, not semi-colon`;`    
**CORRECT**:`species: "beagle",`   
