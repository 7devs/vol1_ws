# Objects

## Properties   
**property:** Each piece of information we include in an object is known as a property. Think of a property like a category label that belongs to some object. When creating an object, each property has a name, followed by : and then the value of that property.

When we have more than one property, they are separated by commas. The last property does not end with a comma.  

## two Ways to Create  
* object literal notation
creating a new object with { } and defining properties within the brackets.   
literal notation is the one where we fill in `{ }` with separate properties and values with colons.   
remember to use `:` instead of `=` when defining properties and that commas separate properties in an object.   
 example：
```
 var snoopy = {
    species: "beagle"，
    age: 10
}
```

* use the keyword new   
create an object using a constructor  notation
```
var buddy = new Object();
buddy.age = 5 ;
buddy.species = "golden retriever" ;
```

## methods
* Methods are similar to functions.    
We can think of properties as variables associated with an object. Similarly, a method is just like a function associated with an object.   
we are using a built-in constructor called `Object`. This constructor is already defined by the JavaScript language and just makes an object with no properties or methods.   
We call a method like a function, but we use `ObjectName.methodName()`.  
example:
```
var bob = new Object();
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
```
* Why Are Methods Important?   
Methods serve several important purposes when it comes to objects.

- They can be used to change object property values.   
- They can be used to make calculations based on object properties. Functions can only use parameters as an input, but methods can make calculations with object properties.   

* The "this" Keyword   
 we can make a method work for many objects using a new keyword, `this`.   
The keyword this acts as a placeholder(`占位符`), and will **refer to whichever object called that method** when the method is actually used.
example:
```
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);
```
we can reuse the same method for different objects! This allows us to avoid typing out a custom method each time. All because we used the placeholder `this`.  

## Custom Constructors  
adding in properties one at a time for every object is tedious.   
Now we can use `custom constructor` to make our `bob and susan` in only one line each!    we can include their `name and age` as arguments to their respective constructors.   ```
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);
```
It means if we have many cats and wanted to create an object for each cat, we could just use this constructor with the properties already defined.

This is much better than using the Object constructor which just gives us an empty object and needs us to define every property and value for each cat object we would create.   

## Constructors With Methods   
In addition to setting properties, constructors can also define methods. This way, as soon as the object is created it will have its own methods as well.  

# Review

## What Are Objects For?  
Objects provide us with a way to represent real-world or virtual things. We can do this by storing information inside the object's properties.   
There are two basic ways to make objects:  
* Literal Notation, where we use:
`var Name = { };`  
* Constructor Notation, where we use the keyword `new`.

## properties   
Properties are like variables that belong to an object, and are used to hold pieces of information. Properties can be accessed in two ways:  
* Dot notation, with`ObjectName.PropertyName`  
* Bracket notation, with 'ObjectName["PropertyName"]'

## Customizing Constructors  
These are helpful for two reasons:  
1. We can assign our objects properties through parameters we pass in when the object is created.
2. We can give our objects methods automatically.  
These both work to save us time and lines of code when we make objects.

## Methods
**Methods** are like functions that are associated with a particular object.  
They are especially helpful when you want to either:
1. Update the object properties  
2. Calculate something based on an object's properties.

every object in JavaScript comes with some baggage (stay tuned for more on this!). Part of this baggage includes a method called `hasOwnProperty`. This lets us know if an object has a particular property.
