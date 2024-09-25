import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constants are just variables
export const counterIncrement = 'counter/increment'
export const counterDecrement = 'counter/decrement'
export const counterIncrementBy = 'counter/incrementBy'
export const reviewLike = 'review/like'
export const reviewDislike = 'review/dislike'


export const CounterReducer = (counter = { value: 0 }, action) => {
    switch (action.type) {
        case counterIncrement:
            return { ...counter, value: counter.value + 1 }
        case counterDecrement:
            return { ...counter, value: counter.value + 1 }
        case counterIncrementBy:
            return { ...counter, value: counter.value + action.payload }
        default:
            return counter;
    }
}

export const ReivewReducer = (review = { like: 0, dislike: 0 }, action) => {
    switch (action.type) {
        case reviewLike:
            return { ...review, like: review.like + 1 }
        case reviewDislike:
            return { ...review, dislike: review.dislike + 1 }
        default:
            return review;
    }
}

export const appStore = configureStore({
    reducer: {
        counter: CounterReducer,
        review: ReivewReducer
    }
})
///////////////////////////////////////////////////////////////////////////////////////
export const Counter = (props) => {
    const result = useSelector(state => {
        return state.counter
    })

    const dispatch = useDispatch()

    const onIncrement = () => {
        const incrementAction = {
            type: counterIncrement
        }
        dispatch(incrementAction)
    }
    return <div>
        <h1>React Redux-Counter</h1>
        <h2>Counter {result.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterDecrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: counterIncrementBy, payload: 2 })
        }}>IncrementBy</button>

    </div>
}

const Review = (props) => {
    const result = useSelector(state => {
        return state.review
    })

    const dispatch = useDispatch()
    return <div>
        <h1>React Redux - Review</h1>
        <h2>Like {result.like} Dislike : {result.dislike}</h2>
        <button onClick={() => {
            dispatch({ type: reviewLike })
        }}>Like</button>
        <button onClick={() => {
            dispatch({ type: reviewDislike })
        }}>dislike</button>
    </div>
}


const App = () => {
    return <Provider store={appStore}>
        <Counter />
        <hr />
        <Review />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
