import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//old way
// const Profile = (props) => {
//     return <div>
//         <p>Id : {props.id}</p>
//         <p>Name:  {props.name}</p>
//         <p>Gender:  {props.gender}</p>
//         <p>Status : {props.status ? "Available" : "Not Available"}</p>
//     </div>
// }
// //default Profile Props
// Profile.defaultProps = {
//     id: 0,
//     name: 'name',
//     gender: 'Male',
//     status: false
// }

//new way
const Profile = ({ id = 0, name = "name", gender = "Male", status = true }) => {
    return <div>
        <p>Id : {id}</p>
        <p>Name:  {name}</p>
        <p>Gender:  {gender}</p>
        <p>Status : {status ? "Available" : "Not Available"}</p>
    </div>
}


const Gallery = () => {
    const id = 1
    const name = "Subramanian"
    const gender = "Male"
    const status = true
    return <>
        <h1>Profile Information</h1>

        <Profile id={id} name={name} gender={gender} status={status} />
        <Profile id={2} name="Murugan" gender="Male" status={true} />
        <Profile id={3} name="Karthik" gender="Male" status={true} />
        <Profile id={4} name="Arun" gender="Male" status={true} />
        <Profile id={5} name="John" gender="Male" status={true} />
        <Profile id={5} name="Ahmed" gender="Male" status={true} />
        <Profile name="Marsh" />
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
