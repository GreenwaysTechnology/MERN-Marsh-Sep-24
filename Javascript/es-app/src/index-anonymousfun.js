
//function declaration

function sayHello(name = 'default') {
    console.log('hello', name)
}
sayHello('admin')

//variable syntax:
let hello = sayHello;
hello('admin')

//variable and function literal in the same place

//greet is just variable
//function(){} is value
//no name for the function : anonymous function
let greet = function () {
    console.log('greet')
}
greet()

//anonymous function args and parameters
let add = function (a = 0, b = 0) {
    let c = a + b
    console.log(c)
}
add(10, 0)

//anonymoust function args,parameters,return
let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10, 10))