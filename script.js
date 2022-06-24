let question = prompt('Enter the mathematical operation to perform: \n1. +\n2. -\n3. *\n4. /', '');
options = ['+', '-', '*', '/', '1', '2', '3', '4']

if (options.includes(question)) {
    let num1 = prompt('Enter first number: ', '');
    let num2 = prompt('Enter second number: ', '');
    if (question == '+' || question == '1') {
        result = Number(num1) + Number(num2);
        alert(`The result is ${result}`);
    }
    else if (question == '-' || question == '2') {
        result = Number(num1) - Number(num2);
        alert(`The result is ${result}`);
    } 
    else if (question == '*' || question == '3') {
        result = Number(num1) * Number(num2);
        alert(`The result is ${result}`);
    } 
    else if (question == '/' || question == '4') {
        result = Number(num1) / Number(num2);
        alert(`The result is ${result}`);
    }}
else {
    alert('Invalid input');
}