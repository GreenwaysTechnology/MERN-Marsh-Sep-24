import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        //componentWillUnMount
        return () => {
            //clean up code
            clearTimeout(timer)
        }

    }, [])

    return <h1>{count} times rendered</h1>

}

const App = () => {
    return <Timer />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
