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

// function add(x, y) {
//     console.log(x + y) // if this alone without "return"; function will return "undefined" even if the addition is carried out
//     // return(x + y) // returns the result
// }

// const result = add(7, 4)
// console.log(result)

// function add(x, y) {
//     return x + y
// }
// const z = add
// console.log(z())

// function something() {
//     return "hello"
// }
// const hello = something() // "hello"
// console.log(hello)
// const hello2 = something // [Function: something]
// console.log(hello2)

// const person = person()
// console.log(person)
// function person() {
//     return "hello"
// }
// const z = function add(x, y) {
//     return x + y
// }

// person = {
//     name: 'John',
//     age: 55,
//     adding: z
// }

// console.log(person.adding(1,1))

const movies = [
    {
        "year" : 2013,
        "title" : "Turn It Down, Or Else!",
        "info" : {
            "directors" : [
                "Alice Smith",
                "Bob Jones"
            ],
            "release_date" : "2013-01-18T00:00:00Z",
            "rating" : 6.2,
            "genres" : [
                "Comedy",
                "Drama"
            ],
            "image_url" : "http://ia.media-imdb.com/images/N/O9ERWAU7FS797AJ7LU8HN09AMUP908RLlo5JF90EWR7LJKQ7@@._V1_SX400_.jpg",
            "plot" : "A rock band plays their music at high volumes, annoying the neighbors.",
            "rank" : 11,
            "running_time_secs" : 5215,
            "actors" : [
                "David Matthewman",
                "Ann Thomas",
                "Jonathan G. Neff"
            ]
        }
    },
    {
        "year": 2015,
        "title": "The Big New Movie",
        "info": {
            "plot": "Nothing happens at all.",
            "rating": 0
        }
    }
]

function print_relevant_details(movie_array) {
    movie_array.forEach(function(movie) {
        console.log(movie.title);
        console.log(movie.info.directors);
        console.log(movie.year);
    });
}

print_relevant_details()
const movie_titles = [
    {
        title1: movies[0].title,
        director1: movies[0].info.directors[0],
        director2: movies[0].info.directors[1]
    },
    {
        title2: movies[1].title
    }
]
// console.log(movie_titles[0].title1)
// console.log(movie_titles[0].director1)
// console.log(movie_titles[0].director2)
// console.log(movie_titles[1].title2)