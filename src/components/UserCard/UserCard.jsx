import { useContext } from "react"
import UserContext from "../../contexts/User"


function UserCard({user}) {
    const {setLoggedInUser}= useContext(UserContext)
    return (
        <div className="user-card">
            <img className="user-img" src={user.avatar_url}></img>
            <p>{user.username}</p>
            <button onClick={() => { setLoggedInUser(user)}}>Sign in!</button>
        </div>
    )
}

export default UserCard