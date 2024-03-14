import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { getUsers } from "../../api";
import UserCard from "../UserCard/UserCard";
import StyledCardBox from "../StyledCardBox/StyledCardBox";

function UsersList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])
    
    return (
        <>
        <h1>A list of users:</h1>
        <ul className="users-list">
            {users.map((user) => {
                return <StyledCardBox key={user.username}> 
                <UserCard  user={user} />
                </StyledCardBox>
            })}
        </ul>
        </>
    )
}

export default UsersList;