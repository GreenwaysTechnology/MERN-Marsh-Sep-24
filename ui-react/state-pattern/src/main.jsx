import React, { createContext, StrictMode, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//create context object
const MessageContext = createContext()

const Parent = () => {
    const [message, setMessage] = useState('hai')

    return <>
        <MessageContext.Provider value={message}>
            <h1>Parent : {message}</h1>
            <ChildOne />
        </MessageContext.Provider>
    </>
}
const ChildOne = (props) => {
    return <>
        <ChildTwo />
    </>
}

const ChildTwo = (props) => {
    return <>
        <ChildThree />

    </>
}
const ChildThree = (props) => {
    const message = useContext(MessageContext)
    return <>
        <h1>ChildThree Message : {message}</h1>
        <ChildFour />
    </>

}
const ChildFour = (props) => {
    return <>
        <ChildFive />

    </>
}
const ChildFive = (props) => {
    const message = useContext(MessageContext)
    return <>
        <h1>ChildFive Message : {message}</h1>
    </>
}
const App = () => {
    return <Parent />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
