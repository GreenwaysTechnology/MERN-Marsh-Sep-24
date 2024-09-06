
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

let employee = new Employee();

//initalize the variable
employee.id = 1000
employee.name = 'Ram'

//how to access variables and methods
console.log(employee.id, employee.name)
console.log(employee.calculate())
console.log(employee.calculateSalary())