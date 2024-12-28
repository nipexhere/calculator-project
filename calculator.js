
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));
let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/','rp2'].includes(value)) {
            setOperator(value);
        } else {
            appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function setOperator(op) {
    const display = document.getElementById('display');
    if (op === 'rp2') {
        display.value = Math.pow(parseFloat(display.value), 2);
    } else if (op === 'sqrt') {
        display.value = Math.sqrt(parseFloat(display.value));
    } else {
        display.value += op;
    }
}


function calculate() {
    if (firstOperand === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
            case "rp2":
                result = firstOperand **2 ;
                break;
        default:
            return;
    }

    currentInput = result.toString();
    display.innerText = currentInput;
    firstOperand = null;
    operator = '';
}