//Q2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Division by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}
console.log(calculate(10, 5, 'add'));         
console.log(calculate(10, 5, 'subtract'));
console.log(calculate(10, 5, 'multiply'));
console.log(calculate(10, 5, 'divide'));  
console.log(calculate(10, 0, 'divide'));  
console.log(calculate(10, 5, 'modulus')); 
   