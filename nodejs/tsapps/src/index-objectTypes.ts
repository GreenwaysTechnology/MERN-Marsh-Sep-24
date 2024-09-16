//class as data type

class Employee {
    id: number
    name: string
    status?: boolean
    city?: string
    gender?: "Male" | "Female" | "Third"
}

let employee: Employee = {
    id: 1,
    name: 'Subramaian',
    status: true,
    gender: "Male"
}
//
interface MyLocation {
    lat?: number
    lng?: number
}

let map: MyLocation = {
    lat: 22,
    lng: 33
}

//type keyword

type Person = {
    id: number
    name: string
    status?: boolean
}
let guest: Person = {
    id: 2,
    name: 'a',
    status: true
}