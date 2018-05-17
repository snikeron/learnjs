var html = '';
var red;
var green;
var blue;
var rgbColor;

for ( var i = 1; i <= 100; i += 1 ) {
    red = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    rgbColor = `rgb(${red},${blue},${green})`;
    html += `<div style="background-color:${rgbColor}"></div>`
    console.log(html)
}

document.write(html);