class Employee {
    //instance variables
    id: number = 1
    name: string = "Subramanian"
    salary: number = 100
    //instance methods
    calculateSalary(value: number = 0): number {
        return value * this.salary
    }

}

function main() {
    //let emp: Employee = new Employee()
    let emp = new Employee()
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))
    //new values
    emp.id = 100
    emp.name = 'Murugan'
    emp.salary = 1000
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))

}
main()