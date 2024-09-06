let inventory = [
    { item: 'journal', qty: 25, status: 'A' },
    { item: 'notebook', qty: 50, status: 'A' },
    { item: 'paper', qty: 100, status: 'D' }
]

//json- object to string 
const jsonString = JSON.stringify(inventory)

console.log(jsonString)

const jsonObject = JSON.parse(jsonString)

console.log(jsonObject)
