const result = require('./greeter')
const TodoService = require('./services/todo.service')

function main() {
    console.log(result)
    console.log(result())
    console.log(TodoService)
    let todoService = new TodoService()
    console.log(todoService.findAll())
}
main()

