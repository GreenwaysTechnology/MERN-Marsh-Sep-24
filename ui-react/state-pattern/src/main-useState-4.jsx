import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import './index.css'

const DashBoard = () => {
    const [color, setColor] = useState('red')

    return <div>
        <h1>Color is {color}</h1>
        <button onClick={() => {
            setColor('blue')
        }}>Blue</button>
    </div>

}

const App = () => {
    return <DashBoard />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
