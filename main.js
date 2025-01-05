let firstOperand = null;
let operator = null;
let secondOperand = null;
let resetDisplay = false;
let dotBtnClicked = 0;
let operatorCount = 0;

let btn = document.querySelectorAll('button');
let display = document.querySelector('.display');
let dotBtn = document.querySelector('#dot');

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function percentage(a, b){
    return b * a / 100;
}


function operate(num1, operation, num2){
    if(operation == '+'){
        return add(num1, num2);
    } else if(operation == '-'){
        return subtract(num1, num2);
    } else if(operation == '*'){
        return multiply(num1, num2);
    }else if(operation == '%'){
        return percentage(num1, num2)
    } else if(operation == '/'){
        if(num2 == 0){
            display.textContent = 'ERROR';
        }
        return divide(num1, num2)
    } 
};

btn.forEach(button =>{
    button.addEventListener('click', () => {
        let value = button.textContent;
        if(!isNaN(value) || value === '.'){
            if (display.textContent == '0' || resetDisplay){
                display.textContent = value;
                resetDisplay = false;
            } else {
                display.textContent += value;
            } 
        } else if(value === '+' || value === '-' || value === '/' || value === '*' || value === '%'){
            operatorCount ++;
            if (firstOperand === null){
                firstOperand = parseFloat(display.textContent);
            } else if(firstOperand !== null && operatorCount > 1){
                operator = value;
            } else if(operator){
                calculate();
            }

            dotBtn.disabled = false;
            operator = value;
            resetDisplay = true;

        } else if(value === '='){
            equals();
        } else if(value === 'AC'){
            allClear();
        } else if(value === 'C'){
            clear();
        } 
    });
               
});

function equals(){
    if(firstOperand !== null && operator !== null){
        secondOperand = parseFloat(display.textContent);
        let result = operate(firstOperand, operator, secondOperand);
        display.textContent = result;
        firstOperand = result;
        operator = null;
        firstOperand = null;
        secondOperand = null;
        resetDisplay = true;       
    } 
};  

function allClear(){
    display.textContent = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    resetDisplay = false;
    dotBtn.disabled = false;
};

function clear(){
    if(!firstOperand){
        display.textContent = '0';
    } else{
        secondOperand = null;
        operator = null;
        display.textContent = firstOperand;
    } 
    dotBtn.disabled = false;
}

dotBtn.addEventListener('click', () => {
    if(!firstOperand && dotBtn){
        dotBtn.disabled = true;
    };

    dotBtnClicked++;

    if (dotBtnClicked >= 2){
        dotBtn.disabled = true;
    };
});

const calculate = () =>{
    secondOperand= parseFloat(display.textContent);
    firstOperand = operate(firstOperand, operator, secondOperand);
    display.textContent = firstOperand;
    operator = null;
}

