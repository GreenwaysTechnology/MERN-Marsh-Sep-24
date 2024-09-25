import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const CounterReducer = (counter = { value: 0 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...counter, value: counter.value + 1 }
        case 'counter/decrement':
            return { ...counter, value: counter.value + 1 }
        case 'counter/incrementBy':
            return { ...counter, value: counter.value + action.payload }

        default:
            return counter;
    }
}

const ReivewReducer = (review = { like: 0, dislike: 0 }, action) => {
    switch (action.type) {
        case 'review/like':
            return { ...review, like: review.like + 1 }
        case 'review/dislike':
            return { ...review, dislike: review.dislike + 1 }
        default:
            return review;
    }
}

const appStore = configureStore({
    reducer: {
        counter: CounterReducer,
        review: ReivewReducer
    }
})
///////////////////////////////////////////////////////////////////////////////////////
const Counter = (props) => {
    const result = useSelector(state => {
        return state.counter
    })

    const dispatch = useDispatch()

    const onIncrement = () => {
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }
    return <div>
        <h1>React Redux-Counter</h1>
        <h2>Counter {result.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
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
            dispatch({ type: 'review/like' })
        }}>Like</button>
        <button onClick={() => {
            dispatch({ type: 'review/dislike' })
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
