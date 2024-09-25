import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const increment = 'counter/increment'
const decrement = 'counter/decrement'

const initialState = { value: 0 }
const CounterReducer = createReducer(initialState, (builder) => {
    //reducer logic
    builder
        .addCase(increment, (state, action) => {
            //immerjs produce function logic
            state.value++
        })
        .addCase(decrement, (state, action) => {
            state.value--
        })
        .addDefaultCase((state, action) => { })

})

//create store object
const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    }
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
