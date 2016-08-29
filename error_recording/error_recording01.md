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

# No.003
```
//Rock paper scissors game
//Rock paper scissors game
var R = "rock";
var S = "scissor";
var P = "paper";
var whoWin = function(user, computer) {

    if (user === R) {
        if (computer === R) {
            return "No winner.";
        } else if (computer === S) {
            return "Winner is user."
        }
        else if (computer === P) {
           return "Winner is computer."
        }
    } else if (user === S) {
        if (computer === R) {
            return "Winner is computerNo winner.";
        }
        else if (computer === S) {
            return "No winner."
        } else if (computer === P) {
           return "Winner is user."
        }
    } else (user === P) {
        if (computer === R) {
            return "Winner is user.";
        } else if (computer === S) {
            return "Winner is computer."
        } else if (computer === P) {
           return "No winner."
        }
    }
};
```
**ERROR**: `SyntaxError: Unexpected token {`  
**CORRECT**: `} else (user === P) {` can be `} else if (user === P) {`.  
	or it can be `} else {`
