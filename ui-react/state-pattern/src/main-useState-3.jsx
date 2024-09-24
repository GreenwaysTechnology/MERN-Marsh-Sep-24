import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import './index.css'

const Review = () => {
    const [review, setReview] = useState({ like: 0, dislike: 0 })

    const onLike = () => {
        // setReview(prevState => {
        //     return {
        //         ...prevState, like: prevState.like + 1
        //     }
        // })
        setReview(prevState => produce(prevState, (draft) => {
            draft.like += 1
        }))
    }
    return <div>
        <h1>Review</h1>
        <h2>Like : {review.like}  Dislike : {review.dislike}</h2>
        <button onClick={onLike}>like</button>
        <button onClick={() => setReview(prevState => produce(prevState, (draft) => {
            draft.dislike += 1
        }))}>Dislike</button>
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
