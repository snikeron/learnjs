function randomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while ( counter < 1000 ) {
    var randNum = randomNumber(50);
    document.write(randNum + ' ');
    counter += 1;
}