import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    //form handler
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //collect data from the state and submit to back end
        console.log(firstName,lastName)
    }
    return <div>
        <form onSubmit={handleSubmit}  >
            <div>
                <label>First Name :</label>
                <input type="text" value={firstName} onChange={(evt) => {
                    setFirstName(evt.target.value)
                }} />
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" value={lastName} onChange={(evt) => {
                    setLastName(evt.target.value)
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
