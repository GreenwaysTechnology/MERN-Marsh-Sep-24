import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Form = () => {
    const [name, setName] = useState('')

    //form handler
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //collect data from the state and submit to back end
        console.log(name)
    }
    return <div>
        <form onSubmit={handleSubmit}  >
            <div>
                <label>Name :</label>
                <input type="text" value={name} onChange={(evt) => {
                    setName(evt.target.value)
                }} />
            </div>
            <div>
                <input type="submit" value="save" />
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
