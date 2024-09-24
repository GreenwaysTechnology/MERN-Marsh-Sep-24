import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Review = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    return <div>
        <h1>Review</h1>
        <h2>Like : {like}  Dislike : {dislike}</h2>
        <button onClick={() => setLike(like + 1)}>like</button>
        <button onClick={() => setDislike(dislike + 1)}>Dislike</button>
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
