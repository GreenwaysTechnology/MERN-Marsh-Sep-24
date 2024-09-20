import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// const Profile = (props) => {
//     return <div>
//         <p>Id : {props.id}</p>
//         <p>Name:  {props.name}</p>
//         <p>Gender:  {props.gender}</p>
//         <p>Status : {props.status ? "Available" : "Not Available"}</p>
//     </div>
// }
// const Profile = (props) => {
//     const { id, name, gender, status } = props
//     return <div>
//         <p>Id : {id}</p>
//         <p>Name:  {name}</p>
//         <p>Gender:  {gender}</p>
//         <p>Status : {status ? "Available" : "Not Available"}</p>
//     </div>
// }
const Profile = ({ id = 1, name = 'Subramaian', gender = 'Male', status = true }) => <div>
    <p>Id : {id}</p>
    <p>Name:  {name}</p>
    <p>Gender:  {gender}</p>
    <p>Status : {status ? "Available" : "Not Available"}</p>
</div>

const Gallery = () => {
    const id = 1
    const name = "Subramanian"
    const gender = "Male"
    const status = true
    return <>
        <h1>Profile Information</h1>

        {/* {Profile(id, name, gender, status)}
        {Profile(2, 'Murugan', "Male", false)} */}
        <Profile id={id} name={name} gender={gender} status={status} />
        <Profile id={2} name="Murugan" gender="Male" status={true} />
        <Profile id={3} name="Karthik" gender="Male" status={true} />
        <Profile id={4} name="Arun" gender="Male" status={true} />
        <Profile id={5} name="John" gender="Male" status={true} />
        <Profile id={5} name="Ahmed" gender="Male" status={true} />
        <Profile />
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
