
let employee = {
    id: 1,
    name: 'Subramanian',
    status: true
}
console.log(employee.id, employee.name, employee.status)
console.log(employee)

//has-a
let inventory = {
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A'
}
console.log(inventory)