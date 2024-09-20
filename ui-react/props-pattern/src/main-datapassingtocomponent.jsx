import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Profile Component : Profile information.

const Profile = (id, name, gender, status) => {
    return <div>
        <h1>Profile Information</h1>
        <p>Id : {id}</p>
        <p>Name:  {name}</p>
        <p>Gender:  {gender}</p>
        <p>Status : {status ? "Available" : "Not Available"}</p>
    </div>
}
//Gallery Component : Displays many profiles

const Gallery = () => {
    //profile data
    const id = 1
    const name = "Subramanian"
    const gender = "Male"
    const status = true
    return <>
        {/* <Profile /> */}
        {Profile(id, name, gender, status)}
        {Profile(2, 'Murugan', "Male", false)}
    </>
}

const App = () => {
    return <>
        <Gallery />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
