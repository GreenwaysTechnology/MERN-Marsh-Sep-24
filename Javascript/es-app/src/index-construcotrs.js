
//es 6 class 

class Employee {
    //instance variable
    id
    name
    //constructor 
    constructor(id = 0, name = 'name') {
        this.id = id
        this.name = name
    }
    //methods
    calculate() {
        return 100
    }
    calculateSalary = () => {
        return 1000
    }

}

let employee = new Employee(1, 'Subramanian');
console.log(employee.id, employee.name)
console.log(employee.calculate())
console.log(employee.calculateSalary())

employee = new Employee();
console.log(employee.id, employee.name)
console.log(employee.calculate())
console.log(employee.calculateSalary())