
//function args and parameters
//name is arg
//es 6 default arg 
function sayHello(name = 'defaultName') {
    console.log(`Hello ${name}`)
}
//Subramanian is parameter
sayHello('Subramanian')

//what if , i dont pass parameter
sayHello()

function multiply(a = 0, b = 0) {
    let c = a * b
    console.log(`C ${c}`)
}
multiply(10, 4)
multiply()