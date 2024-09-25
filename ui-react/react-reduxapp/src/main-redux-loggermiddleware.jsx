import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        //plain js function
        increment(state, action) {
            //immer js produce logic
            state.value++
        },
        decrement(state, action) {
            state.value--
        }
    }
})
//extract reducers
const CounterReducer = counterSlice.reducer
//Extract actions (actionCreator) from the slice
const { increment, decrement } = counterSlice.actions

//create store object
const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(logger))
})
///////////////////////////////////////////////////////////////////////////////////////
//React component layer
const Counter = (props) => {
    const counter = useSelector(state => {
        return state.counter
    })
    const dispatch = useDispatch()
    return <div>
        <h1>React Redux</h1>
        <h2>Counter {counter.value}</h2>
        <button onClick={() => {
            dispatch({ type: increment })
        }}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>
    </div>
}



const App = () => {
    return <Provider store={appStore}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
