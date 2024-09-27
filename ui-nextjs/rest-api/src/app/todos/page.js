
export async function getTodos() {
    const response = await fetch('http://localhost:3000/api/todos')
    return await response.json()
}
export default async function Todos() {
    const todos = await getTodos()
    console.log(todos)
    return <>
        <ul>
            {todos.map(todo => {
                return <li>{todo.title}</li>
            })}
        </ul>
    </>
}