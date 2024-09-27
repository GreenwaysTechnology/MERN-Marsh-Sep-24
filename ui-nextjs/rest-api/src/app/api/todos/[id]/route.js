
import { NextResponse } from "next/server";

//findById
export async function GET(request, { params: { id } }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    if (!todo) {
        return NextResponse.json({ message: 'No Todo Found' })
    }
    return NextResponse.json(todo)
}
//update

//delete
