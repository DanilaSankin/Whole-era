let firstName

if (localStorage.getItem('my-name')) {
    firstName = localStorage.getItem('my-name')
} else {
     firstName = prompt('Как вас зовут?')
     localStorage.setItem('my-name', firstName)
}


document.querySelector('h3').textContent = 'Hello, ' + firstName
document.querySelector('h1').textContent = 'Now ' + new Date().toLocaleTimeString()

setInterval(function() {
    document.querySelector('h1').textContent = 'Now ' + new Date().toLocaleTimeString()
}, 1000)

const myColors = ['lightcyan', 'lightpink', 'mintcream', 'orchid', 'salmon', 'sandybrown', 'gold', 'darkkhaki', 'azure', 'aquamarine']
let index = 0

document.querySelector('button').onclick = function() {
    document.body.style.background = myColors[index]
    index++
    if (index >= myColors.length) index = 0
}