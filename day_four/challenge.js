function greeting(greet) {
    return function(name) {
        return function(surname) {
            return console.log(`${greet} ${name} ${surname}`)
        }
    }
}

greeting('hello')('Ruegen')('Aschenbrenner')

// Make this return "hello Ruegen Aschenbrenner"