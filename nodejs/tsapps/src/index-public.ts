class Employee {
    //instance variables
    //by default all memebers are public
    public id: number
    public name: string
    salary: number
    constructor(id: number = 1, name: string = "Subramanian", salary: number = 1000) {
        this.id = id
        this.name = name
        this.salary = salary

    }
    //instance methods
    public calculateSalary(value: number = 0): number {
        return value * this.salary
    }

}

function main() {
    let emp = new Employee()
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))
    //new values
    emp.id = 100
    emp.name = 'Murugan'
    emp.salary = 1000
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))


    emp = new Employee(2, 'Karthik', 333)
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))

}
main()