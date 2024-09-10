import { name, age, address, skills, status, getInfo } from './util.mjs'

// import TodoService from './services/todo.service.mjs'
//export and export default together


import TodoService, { config } from './services/todo.service.mjs'


function main() {
    console.log(name)
    console.log(age)
    console.log(address)
    console.log(skills)
    console.log(status)
    console.log(getInfo())

    let todoService = new TodoService()
    console.log(todoService.findAll())

    console.log(config)

}
main()