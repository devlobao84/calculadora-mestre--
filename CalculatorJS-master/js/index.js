const numbers = document.querySelectorAll('.number-btn');
const displayFirstNumber = document.querySelector('#firts-number');
const displaySecondNumber = document.querySelector('#second-number');
const displayOperator = document.querySelector('#operator');
const operators = document.querySelectorAll('.operator-btn');
const equalButton = document.querySelector('#equal');
const displayResult = document.querySelector('#result');
const clearButton = document.querySelector('.clear-btn');
let operatorSelected = false;


numbers.forEach(element => {
    element.addEventListener('click', () => {
        if (displayResult.style.display == 'block') {
            reset();
        }
        if (!operatorSelected) {
            displayFirstNumber.textContent += element.textContent;
        }
        else {
            displaySecondNumber.textContent += element.textContent;
        }
    });
});

operators.forEach(element=> {
    element.addEventListener('click', () => {
        if (displayResult.style.display == 'block') {
            displayFirstNumber.textContent = result;
            displayResult.style.display = 'none';
            result = null;
        }
        displayOperator.textContent = element.textContent;
        operatorSelected = true;

    });
});

clearButton.addEventListener('click', () => {
    reset();
})

equal.addEventListener('click', () => {
    if (displayResult.style.display === 'none' || displayResult.style.display === '') {
        const number1 = displayFirstNumber.textContent;
        const number2 = displaySecondNumber.textContent;
        const operator = displayOperator.innerText;
        calc(number1, number2, operator);
    }else {
        const number1 = result.textContent;
        const number2 = displaySecondNumber.textContent;
        console.log(number2)
        const operator = displayOperator.innerText;
        console.log(number1, number2, operator)
        calc(number1, number2, operator);
    }
});

const calc = (number1, number2, operator) => {
    operator.toString;
    (result === null) ? result = null : result = result
    switch (operator) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '/':
            result = parseFloat(number1) / parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
    }
    result = parseFloat(result.toFixed(3));
    reset();
    showResult(result);
}

const reset = (() => {
    displayFirstNumber.textContent = null;
    displaySecondNumber.textContent = null;
    displayOperator.textContent = null;
    displayResult.style.display = 'none';
    operatorSelected = false;
});

const showResult = result => {
    displayResult.style.display = 'block';
    displayResult.textContent = result;
}