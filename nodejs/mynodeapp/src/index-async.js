
//async keyword:
/**
 * 1.async keyword is used infront of function declaration
 * 2.by default async function return Promise with success data
 * 3.await keyword is used infront of function call which must return promise
 * 4.where ever we use await keyword that function must be marked async
 */

async function getValue() {
    //return 10 //Promise.resolve(10)
    return Promise.resolve(10)
}

async function main() {
    //console.log(getValue())
   // getValue().then(value => console.log(value))
   const value = await getValue()
   console.log(value)
}
main()
