
export const Profile = ({ profile: { id = 0, name = 'name', email = 'email' } }) => {
    return <div>
        <h1>Id {id} </h1>
        <h2>Name {name}</h2>
        <h2>Email {email}</h2>
    </div>
}