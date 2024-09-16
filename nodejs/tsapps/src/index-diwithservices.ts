
class TodoService {
    constructor() { }
    findAll() {
        return "todos"
    }
}
class TodoController {
    constructor(private todoService: TodoService) {
        this.todoService = todoService
     }

    findAll() {
        return this.todoService.findAll()
    }
}

function main() {
    let todCtrl = new TodoController(new TodoService())
    console.log(todCtrl.findAll())
}
main()