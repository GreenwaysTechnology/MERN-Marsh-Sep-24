

// function display(profile) {
//     //display values
//     console.log(`Id ${profile.id}`)
//     console.log(`Name ${profile.name}`)
//     console.log(`Id ${profile.address.city}`)
// }

//using object destructuring , we can simplify object property display
// function display(profile) {
//     //syntax
//     const { id, name, address } = profile
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Id ${address.city}`)
// }

// function display(profile) {
//     //syntax
//     const { id, name, address: { city } } = profile
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Id ${city}`)
// }


// function display({ id, name, address: { city } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Id ${city}`)
// }
const display = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`Id ${city}`)
}

display({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })


//return objects and destructuring

// function getStockValues() {
//     return {
//         id: 1,
//         name: 'google',
//         value: 1000,
//         qty: 100000
//     }
// }

// function getStockValues(id = 1, name = 'google', value = 0, qty = 0) {
//     return {
//         id: id,
//         name: name,
//         value: value,
//         qty: qty
//     }
// }
// function getStockValues(id = 1, name = 'google', value = 0, qty = 0) {

//     //key:variable if it is same, remove one variable and :
//     return {
//         id,
//         name,
//         value,
//         qty
//     }
// }
// const getStockValues = (id = 1, name = 'google', value = 0, qty = 0) => {
//     return {
//         id,
//         name,
//         value,
//         qty
//     }
// }
const getStockValues = (id = 1, name = 'google', value = 0, qty = 0) => ({
    id,
    name,
    value,
    qty
})
console.log(getStockValues(1, "google", 2000, 1222))
console.log(getStockValues())