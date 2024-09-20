import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// const Profile = props => <div>
//     {/* Here we pass every prop manually, this is complex */}
//     <ProfileDashboard id={props.id} name={props.name} status={props.status} />
// </div>

//Property Rethrow is a concept through which we can simplify property passing
const Profile = props => <div>
    {/* passing entire props via es6 spread noation */}
    <ProfileDashboard {...props} title="Your Profile" />
</div>

const ProfileDashboard = ({ id = 1, title = "", name = 'Subramaian', gender = 'Male', status = true }) => {
    return <>
        <h3 style={{ color: 'red' }}>{title}</h3>
        <p style={styles.title}>Id : {id}</p>
        <p>Name:  {name}</p>
        <p>Gender:  {gender}</p>
        <p>Status : {status ? "Available" : "Not Available"}</p>
    </>
}
//
const styles = {
    title: {
        color: 'blue'
    }
}

const Gallery = () => {
    const id = 1
    const name = "Subramanian"
    const gender = "Male"
    const status = true
    return <>
        <h1 className="heading">Profile Information</h1>
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
