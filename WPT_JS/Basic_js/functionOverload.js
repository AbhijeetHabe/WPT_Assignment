// Named function
function addition() {
    let num1 = 10
    let num2 = 10
    return num1 + num2
}

// Overloaded named function
function addition(num1, num2) {
    return num1 + num2
} 

// Named function with default value
function addition1(num1=10, num2=20) {
    return num1 + num2
}

console.log(addition())
console.log(addition(40,100))
console.log(addition1())