class Employee {
    constructor(public id: number = 1, public name: string = "Subramanian", public salary: number = 1000) { }
    //instance methods
    public calculateSalary(value: number = 0): number {
        return value * this.salary
    }
}

function main() {
    let emp = new Employee()
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))

    emp = new Employee(3, 'Karthik', 333)
    console.log(emp.id, emp.name, emp.salary, emp.calculateSalary(22))

}
main()