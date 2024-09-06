

//es 5 anonymous function

let hello = function () {
    console.log('hello')
}
hello()
//es 6 arrow anonymous function 
let hai = () => {
    console.log('hai')
}
hai()

//arrow function code refactoring 

//1. if function has single line of code,you can remove {}
hai = () => console.log('hai')
hai()

//1.arrow functions and parameters

let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 2))

//only return statement: we can remove {} and return statement
add = (a = 0, b = 0) => a + b

console.log(add(1, 2))

//if function has single arg, no default value,return the same .
let stock = (value) => {
    return value
}
//you can remove {},return,()
stock = value => value

console.log(stock(10))