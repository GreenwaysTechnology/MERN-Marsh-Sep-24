import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Parent = () => {
    const [message, setMessage] = useState('hello')

    return <>
        <h1>Parent : {message}</h1>
        <ChildOne message={message} />
    </>
}
const ChildOne = (props) => {
    return <>
        <h1>ChildOne : {props.message}</h1>
        <ChildTwo message={props.message}/>
    </>
}

const ChildTwo = (props) => {
    return <>
        <h1>ChildOne : {props.message}</h1>
        <ChildThree message={props.message}/>

    </>
}
const ChildThree = (props) => {
    return <>
        <h1>ChildOne : {props.message}</h1>
        <ChildFour message={props.message}/>

    </>
}
const ChildFour = (props) => {
    return <>
        <h1>ChildFour : {props.message}</h1>
        <ChildFive message={props.message}/>

    </>
}
const ChildFive = (props) => {
    return <>
        <h1>ChildFive : {props.message}</h1>
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
