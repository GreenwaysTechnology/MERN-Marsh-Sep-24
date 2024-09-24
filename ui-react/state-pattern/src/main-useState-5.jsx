import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import './index.css'

const DashBoard = () => {
    const [colors, setColors] = useState(['yellow'])

    return <div>
        <button onClick={() => {
            setColors((prevState) => {
                return produce(prevState, draft => {
                    draft.push('red')
                })
                //return prevState.concat('red')
            })

        }}>Add Colors</button>
        <ul>
            {colors.map(color => {
                return <li>{color}</li>
            })}
        </ul>
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
