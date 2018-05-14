# Introduction: Javascript

### Just a quick example
1. In index.html
```html
<script defer src="/index.js"></script>
```
note: [Refer to "defer"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

2. In index.js
```javascript
alert("You have Javascript loaded into the page")
```
Go ahead and try it out on Live Reload on the browser.

## var, let or const ?
Credit to: [Var, let and const- what's the difference?](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e)
### VAR
**Scope** essentially means where these variables are available for use. *var* declarations are globally scoped or function/locally scoped. It is globally scoped when a *var* variable is declared outside a function. This means that any variable that is declared with *var* outside a function block is available for use in the whole window. *var* is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

In the example below, *tester* is **globally scoped** (exists outside of function) while *hello* is **function scoped** (exists only within function).
```js
var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
```
***var* variables can be re-declared and updated**
```js
var greeter = "hey hi";
    greeter = "say Hello instead";
```
#### Hoisting of *var*
```js
console.log (greeter);
    var greeter = "say hello"
```
Interpreted in JS as:
```js
var greeter;
    console.log(greeter); //greeter is undefined
    greeter = "say hello"
```
#### Downside of *var*

If you have declared *var* outside of a function, its scope is defined and cannot be redefined.
Example:
```js
var greeter = "hey hi"; // globally scoped
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }

    console.log(greeter) //"say Hello instead"
```

### LET
#### *let* is **block scoped**
In Javascript, a block is a chunk of code bounded by { }.
    
    Anything within { curly braces } is a block.

```js
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defined
```
#### *let* can be *updated* but NOT *re-declared*
```js
let greeting = "say Hi";
    greeting = "say Hello instead";
```
Is OK.
```js
let greeting = "say Hi";
    let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared
```
Not OK.

*However*, if the same variable is **defined in different scopes**, there will be no error. They essentially exist as different variables because of their different scopes.
```js
let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting);//"say Hi"
```
Therefore when using *let* you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not occur.
#### Hoisting of *let*
Similarly with *var*, *let* declarations are **hoisted** to the top, but they are not **initialized**. Trying to use a *let* variable before it is declared results in:

    Reference Error

### CONST
#### *const* declarations are also **block scoped**

#### *const* CANNOT be updated OR re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
```js
const greeting = "say Hi";
greeting = "say Hello instead";//error : Assignment to constant variable.
```
nor this:
```js
const greeting = "say Hi";
const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared
```
Every const declaration therefore, must be initialized at the time of declaration.
#### *const* objects
While *const* objects cannot be updated, the properties of a *const* object can be updated.
```js
const flow = {
        message : "say Hi",
        times : 4
    }

// cannot do this:
const greeting = {
    words : "Hello",
    number : "five"
}//error :  Assignment to constant variable.

// but we can do this:
greeting.message = "say Hello instead";
```

#### Hoisting of *const*
Just like *let* -- declarations are hoisted to the top but are **NOT** initialized.

### Summary of *var*, *let*, *const*
1. *var* declarations are globally scoped or function scoped while *let* and *const* are block scoped.

2. *var* variables can be updated and re-declared within its scope; *let* variables can be updated but not re-declared; *const* variables can neither be updated nor re-declared.

3. They are all hoisted to the top of their scope but while varvariables are initialized with undefined, *let* and *const* variables are not initialized.

4. While *var* and *let* can be declared without being initialized, *const* must be initialized during declaration.

## Some Code Examples
```javascript
const firstName = 'Ruegen'
const lastName = 'Aschenbrenner'

// String interpolation
// Note the use of "back-ticks"--> `
const fullName = `${firstName} ${lastName}` 

// Multi-line String interpolation
const fullName = `

    ${firstName} ${lastName}

`
console.log(fullName)
```

### Javascript Coercion -- String into Integer
```js
const result = 5 * '5'
console.log(result) // gives you 25 ..BOOM.. "coercion"
```

```js
const result_string = 5 * '5elephant'
console.log(result_string) // gets you NaN ...5e4...

const result_string = 5 * parseInt'5monkey' // 25
const result_string = 5 * parseInt'5monkey5' // 25
const result_string = 5 * parseInt'55monkey5' // 275
console.log(result_string)
```

```js
const fruit = ['Banana', 'Apple', 'Strawberry']
const x = fruit[0](5 * 5)
```

