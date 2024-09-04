function calculate(num1, num2, operation) {
    if (num1 == null || num2 == null) {
        return "wrong numbers"
    }
    
    if (operation == 'add') {
        return num1 + num2
    } else if (operation == 'subtract') {
        return num1 - num2
    } else if (operation == 'multiply') {
        return num1 * num2
    } else if (operation == 'divide') {
        if (num2 == 0) {
            return "Cannot divided with zero"
        }
        return num1 / num2
    } else {
        return "wrong operation"
    }
}

console.log(calculate(5, 3, 'add'))
console.log(calculate(10, 2, 'divide'))
console.log(calculate(7, 0, 'divide'))
console.log(calculate(8, 3, 'multiply'))
console.log(calculate(9, 4, 'subtract'))
