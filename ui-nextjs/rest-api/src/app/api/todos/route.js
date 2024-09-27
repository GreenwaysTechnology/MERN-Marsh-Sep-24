//api

import { NextResponse } from "next/server";

//findAll
export async function GET(request) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    return NextResponse.json(todos)
}
//save