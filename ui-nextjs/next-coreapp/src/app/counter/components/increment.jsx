// 'use client'
import { useState } from "react"

export default function Increment() {
  const [value,setValue] = useState(0)
    return <>
        <h1>Increment Value {value}</h1>
    </>
}