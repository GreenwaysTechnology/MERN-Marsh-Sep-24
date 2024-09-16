
class Address {
    constructor(public street: string = "street", public city: string = "city") { }
}

class Employee {

    constructor(public id: number = 1, public name: string = "Subramanian",
        public salary: number = 1000, public address?: Address) { }
}

function main() {
    let emp = new Employee()
    console.log(emp.id, emp.name, emp.salary, emp.address)

    emp = new Employee(3, 'Karthik', 333, new Address('10th street', 'Coimbatore'))
    console.log(emp.id, emp.name, emp.salary,emp.address.city,emp.address.street)

}
main()