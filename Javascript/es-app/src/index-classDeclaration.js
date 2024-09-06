
//es 6 class 

class Employee {
    //instance variable
    id = 10
    name = 'Subramanian'

    //methods
    calculate() {
        return 100
    }
    calculateSalary = () => {
        return 1000
    }

}

//create instance

//let is keyword
//employee is just reference variable
//new is operator 
//Employee() is constructor call
let employee = new Employee();

//how to access variables and methods
console.log(employee.id , employee.name)
console.log(employee.calculate())
console.log(employee.calculateSalary())