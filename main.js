const firstOperand = 0;
const operator = null;
const secondOperand = 0;

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

function operate(num1, operator, num2){
    if(operator == '+'){
        return add(num1, num2);
    } else if(operator == '-'){
        return subtract(num1, num2);
    } else if(operator == '*'){
        return multiply(num1, num2);
    } else if(operator == '/'){
        return divide(num1, num2)
    }
};

console.log(operate(1, '/', 2))
