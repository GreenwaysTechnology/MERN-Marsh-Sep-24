
let gender: "Male" | "Female" | "Third"

gender = "Male"

gender = "Female"

gender = "Third"

// gender="hello"

function process(id: number | string = "", age?: number, gender?: "Male" | "Female" | "Thrid") {
    console.log(id,age,gender)
}

process("133",8,"Male")
process(34,44,"Thrid")