
class Address {
    city
    state
    constructor(state = "state", city = "city") {
        this.state = state
        this.city = city
    }
}
class Employee {
    id
    name
    address
    constructor(id = 0, name = 'name', address = new Address()) {
        this.id = id
        this.name = name
        this.address = address
    }
}
//
let employee = new Employee()
console.log(employee)

employee = new Employee(1, 'Subramanian', new Address('TN', 'Coimbatore'))
console.log(employee)