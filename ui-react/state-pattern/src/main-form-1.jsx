import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'
import './index.css'

const Form = () => {

    return <div>
        <form>
            <div>
                <label>Name :</label>
                <input />
            </div>
        </form>
    </div>

}

const App = () => {
    return <Form />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
