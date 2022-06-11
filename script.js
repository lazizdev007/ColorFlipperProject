//Arrays
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// DOM
let color = document.querySelector('.color__hex');
let btn = document.querySelector('.btn');

//Listener
btn.addEventListener('click', function () {
    let hexColor = '#';
    for(let i =0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

//function
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}