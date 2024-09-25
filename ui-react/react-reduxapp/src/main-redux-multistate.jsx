import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux : reducer (initalState,actionObject)
const CounterReducer = (counter = 10, action) => {
    //methods
    switch (action.type) {
        case 'counter/increment':
            return counter + 1
        case 'counter/decrement':
            return counter - 1
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
    const counter = useSelector(state => {
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
        <h2>Counter {counter}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>

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
