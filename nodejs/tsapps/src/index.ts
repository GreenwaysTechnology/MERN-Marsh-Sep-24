
//declare decorator
function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype, "subject", { value: 'Nest Js' })
}

//attach decorator
@Course
class Student {
    constructor(public name: string = "") { }
}

//use decorator

function main() {
    let student = new Student("Subramaian") as any
    console.log(`${student.name} is learning ${student.subject}`)
}
main()