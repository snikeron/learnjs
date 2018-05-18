# Javascript Events
### Basic setup showing JS event
```html
<label for="email">Email: </label>
<input type="email" onclick="myFunc(this)" name="email">
```
```js
function myFunc(blue) {
  alert(blue.value)
}
```

### Typing event
```html
<h3 id="title-email"></h3>
<label for="email">Email: </label>
<input type="email" id="input-email" name="email">
```
```js
// generic selector
const input = document.querySelector('#input-email')
// specific id selector
const title = document.getElementById('title-email')

// 'onchange'
// 'keydown'
input.addEventListener('keyup', function(e){
  title.textContent = e.target.value;
})
```