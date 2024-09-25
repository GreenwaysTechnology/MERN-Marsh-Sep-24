import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux : reducer (initalState,actionObject)
const CounterReducer = (counter = { value: 0 }, action) => {
    //methods
    switch (action.type) {
        case 'counter/increment':
            return { ...counter, value: counter.value + 1 }
        case 'counter/decrement':
            return { ...counter, value: counter.value + 1 }
        case 'counter/incrementBy':
            return { ...counter, value: counter.value + action.payload }

        default:
            //default state
            return counter;
    }
}

//create store object
const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    }
})
///////////////////////////////////////////////////////////////////////////////////////
//React component layer
const Counter = (props) => {
    const result = useSelector(state => {
        //appState.reducerName
        return state.counter
    })

    const dispatch = useDispatch()

    const onIncrement = () => {
        //action object
        const incrementAction = {
            type: 'counter/increment'
        }
        //dispatch an action to reducer
        dispatch(incrementAction)
    }
    return <div>
        <h1>React Redux</h1>
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



///
//connecting react with redux: That should be top level component.

//react-redux lib provides a context object through which we can pass store object into
//react components
const App = () => {
    return <Provider store={appStore}>
        {/* Your components */}
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
