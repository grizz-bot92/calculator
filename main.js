let firstOperand = null;
let operator = null;
let secondOperand = null;
let resetDisplay = false;

let btn = document.querySelectorAll('button');
let display = document.querySelector('#display');
let allClearButton = document.querySelector('#allClear');
let clearBtn = document.querySelector('#clear');
let equalBtn = document.querySelector('#equals');
let percentBtn = document.querySelector('#percent');

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

function operate(num1, operation, num2){
    if(operator == '+'){
        return add(num1, num2);
    } else if(operation == '-'){
        return subtract(num1, num2);
    } else if(operation == '*'){
        return multiply(num1, num2);
    } else if(operation == '/'){
        if(num2 == 0){
            display.textContent = 'ERROR';
        }
        return divide(num1, num2)
    }
};

// let result = operate(firstOperand, operator, secondOperand);

btn.forEach(button =>{
    button.addEventListener('click', () => {
        const value = button.textContent;
        if(!isNaN(value) || value === '.'){
            if (display.textContent == '0' || resetDisplay){
                display.textContent = value;
                resetDisplay = false;
            } else {
                display.textContent += value;
            }    
        } else if(value === '+' || value === '-' || value === '/' || value === '*'){
            if (firstOperand === null){
                firstOperand = parseFloat(display.textContent);
            } 
            operator = value;
            resetDisplay = true;
        } 
    });
        
        
        
});

function calculate(){
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

equalBtn.addEventListener('click', calculate);

allClearButton.addEventListener('click', () =>{
    display.textContent = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    resetDisplay = false;
});


clearBtn.addEventListener('click', () =>{
    if(!firstOperand){
        display.textContent = '0';
    }else{
        secondOperand = null;
        operator = null;
        display.textContent = firstOperand;
    }  
})

percentBtn.addEventListener('click', () =>{
    secondOperand * firstOperand/100;
})

