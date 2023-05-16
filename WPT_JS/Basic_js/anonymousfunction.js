// Example of anonymous function
let add = function() {
    return 10+10
}

// Example of anonymous function with param
let minus = function(n1, n2) {
    return n1-n2
}

// Example of anonymous function with default param
let multiple = function(n1=10,n2=10) {
    return n1*n2
}

console.log(add());
console.log(minus(30,22,10));
console.log(multiple())