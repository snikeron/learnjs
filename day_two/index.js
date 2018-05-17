// Loops, case statements, this, prototypes/objects/classes

const fruit = [{
    name: 'banana',
    price: 200,
    organic: false
},
{
    name: 'apple',
    price: 100,
    organic: true
},
{
    name: 'orange',
    price: 300,
    organic: false
}]

// LENGTH method
const fruitLength = fruit.length

// classic FOR LOOP method
for(let i = 0; i < fruitLength; i++) {
    console.log(fruit[i]);
    if(fruit[i].organic) {
        console.log(`${fruit[i].name} is organic so I will buy it`);
}
}

// modern FOR LOOP method (same as ruby's .each method)
fruits.forEach(function(fruit, i) {
    console.log(fruit.name) 
})

const printFruit = function(fruit, i) {
    console.log(fruit.name);
}

for(let fruit of fruits) {
    if(fruit.organic) {
        console.log(
            fruit.name + ' is organic so I will buy it'
        )
    }
}

// The for...in statement iterates over the enumerable properties of an object. For each distinct property, statements can be executed.

for(let property in fruits[0]) {
    console.log(property)
}

for(let property in fruits[0]) {
    for(let fruit of fruits) {
        console.log(fruit[property])
    }
}

const choice = 'true'

switch (choice ? 'yes' : 'no' ) {
    case 'yes':
        console.log('break time!')
        break
    case 'no':
        console.log('no break for you')
        break
    default:
        console.log('no break for you')
}

//================================================ 

// const fruit = {
//     name: 'apple',
//     price: 200,
//     organic: true,
//     color: 'red',
//     printName: function() {
//         console.log(this.name)
//     }

// fruit.printName()

//     //this belongs to object. similar to 'self' in ruby.
// }

// const greenApple = fruit
// greenApple.name = 'green apple'

// greenApple.printName()

// function fruitMachine() {
//     return {
//         name: null,
//         price: null, 
//         organic: null,
//         color: null,
//         printName: function() {
//             console.log(this.name)
//         },
//         init: function(name, price) {
//             this.name = name;
//             this.price = price
//         // can put "return this" then remove apple.init('red apple', 200)
//         }

//     }
// }

// const apple = fruitMachine()
// apple.init('red apple', 200)

// console.log(apple)
// // init = initialize
// // const greenApple = fruitMachine()

// ----

// const apple = fruitMachine().init('red apple', 200)
// console.log(apple)

// -----

// function Fruit(name, price, color) {
//     this.name = name
//     // same as @name = name in ruby
//     this.price = price
//     this.color = color
//     this.printName = function() {
//         console.log(this.name)
//     }
// }

// const redApple = new Fruit('red apple', 300, 'red')
// redApple.price = 400
// redApple.printName()
// // console.log(
// //     redApple.name,
// //     redApple.price,
// //     redApple.color 
// // )
// // function is an object...

// const hello = new String ("Hello")

// console.log(hello[0] = 'f')
// // factory function

class Fruit {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    sayHello() {
        console.log(this.name);
}
}

const redApple = new Fruit('red apple', 300)
console.log(redApple)