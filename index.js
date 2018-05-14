// one line comment

/* 
multi
line
comment
*/

/*
var celsiusTemperature = 30 //is a global variable (more backward-compatible)

let celsiusTemperature = 30 //more like a local variable (newer)

const celsiusTemperature = 30 //immutable -- no reassignment
const PI = 3.14 //example only.
*/

// var x,y,z;
// console.log(x,y,z)

// var x = 1, y = null, z = "hello";
// console.log(x, y, z)


// const num = NaN // "Not a Number"

// const forever = Infinity
// console.log(forever * 5)

// const firstName = 'Ruegen'
// const lastName = 'Aschenbrenner'
// const fullName = `${firstName} ${lastName}` // String interpolation
// console.log(fullName)

// const num = parseInt(1.4) //int : float
// const num = parseFloat('1.4') //string : float
// console.log(num)

// const result = 5 * '5'
// console.log(result) // gives you 25 ..BOOM.. "coercion"

// const result = 5 * parseInt('55elephant');
// console.log(result);

// const fruit = ['Banana', 'Apple', 'Strawberry']
// const x = fruit[0](5 * 5) // will error out because it thinks the result of fruit[0] is a function to run on (5 * 5)
// const x = fruit[0]; (5 * 5)
// console.log(x)

// const hungry = true || false
// if(hungry) {
//     console.log('Ruegen is huungry')
// } else {
//     console.log('Satisfied, burp!')
// }

// const hungry = undefined

// if(hungry) {
//     console.log('Ruegen is hungry')
// } else if(hungry == undefined) {
//     console.log('Ruegen\'s hunger doesn\'t exist')
// } else {
//     console.log('burp')
// }

// console.log(5 == '5')

// '5' === 5 ? 
//     console.log('hello') : 
//     console.log('nah mate')

function add(x, y) {
    console.log(x + y) // if this alone without "return"; function will return "undefined" even if the addition is carried out
    // return(x + y) // returns the result
}

const result = add(7, 4)
console.log(result)