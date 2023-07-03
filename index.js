let num1 = '';
let solution = '';
let operation = '';
let displayValue = '';
let lastPress = '';

const numberButtons = document.querySelectorAll('.number-button');

const operations = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

const screenTop = document.querySelector('.top-line');
const screenBottom = document.querySelector('.bottom-line');

const allClearButton = document.querySelector('.AC');

allClearButton.addEventListener('click', e => {
    // Reset Everything
    displayValue = '';
    num1 = '';
    num2 = '';
    solution = '';
    operation = '';
    screenBottom.innerHTML = '';
    screenTop.innerHTML = '';
});

numberButtons.forEach(button => {
    button.addEventListener('click', e => {
        populateDisplay(e, screenTop);
        lastPress = e.target.innerHTML;
    });
});

operations.forEach(button => {
    button.addEventListener('click', e => {
        populateDisplay(e, screenTop);
        if (
            lastPress == 'x' | 
            lastPress == '/' |
            lastPress == '-' |
            lastPress == '+'
         ) {
            console.log(displayValue)
            displayValue = displayValue.replace(e.target.innerHTML, "").replace(lastPress, e.target.innerHTML);
            console.log(displayValue);
            screenTop.innerHTML = displayValue;
            operation = e.target.innerHTML;
        } else if (typeof parseFloat(lastPress) == Number) {
            console.log(lastPress)
            num2 = parseFloat(displayValue.replace(num1.toString() + operation, "").replace(e.target.innerHTML, ""));
            solution = operate(operation, num1, num2);
            screenBottom.innerHTML = solution;
            num1 = parseFloat(solution);
            operation = e.target.innerHTML;
            displayValue = solution + operation;
            screenTop.innerHTML = displayValue;
        } else {
            num1 = parseFloat(displayValue.slice(0, displayValue.length - 1));
            operation = e.target.innerHTML
        }
        lastPress = e.target.innerHTML;
    });
});

equals.addEventListener('click', e => {
    num2 = parseFloat(displayValue.replace(num1.toString() + operation, "").replace(e.target.innerHTML, ""));
    solution = operate(operation, num1, num2);
    screenTop.innerHTML = solution;
    screenBottom.innerHTML = solution;
});

decimal.addEventListener('click', e => {
    populateDisplay(e, screenTop);
});

function populateDisplay(e, node) {
    displayValue += e.target.innerHTML
    node.innerHTML = displayValue
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '/':
            return divide(num1, num2);

        case 'x':
            return multiply(num1, num2);

        case '+':
            return add(num1, num2);
        
        case '-':
            return subtract(num1, num2);
    
        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}