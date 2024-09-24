import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Review = () => {
    const [like, setLike] = useState(0)

    // const onLike = () => {
    //     //immutable object internally
    //     // setLike((prevState) => {
    //     //     return prevState + 1
    //     // })
    //     // setLike((prevState) => prevState + 1)
    //     setLike(like + 1)

    // }
    return <div>
        <h1>Review</h1>
        <h2>Like : {like}</h2>
        <button onClick={() => setLike(like + 1)}>like</button>
    </div>
}

const App = () => {
    return <Review />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
