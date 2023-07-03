const numberButtons = document.querySelectorAll('.number-button');

const screenTop = document.querySelector('.top-line');
const screenBottom = document.querySelector('.bottom-line');

let num1 = '';
let num2;
let operation;

numberButtons.forEach(button => {
    button.addEventListener('click', e => {
        num1 = num1 + e.target.innerHTML;
        screenTop.innerHTML = num1;
        console.log(typeof parseFloat(e.target.innerHTML))
    })
})