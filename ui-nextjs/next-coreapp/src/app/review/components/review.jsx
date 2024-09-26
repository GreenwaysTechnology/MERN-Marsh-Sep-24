"use client"

import { useState } from "react"

export const Review = () => {
    const [like, setLike] = useState(0)
    return <>
        <h1>Like : {like}</h1>
        <button onClick={() => {
            setLike(like + 1)
        }}>+</button>
    </>
}