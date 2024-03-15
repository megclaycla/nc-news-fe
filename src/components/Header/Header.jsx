import { Link } from "react-router-dom"
import UserContext from "../../contexts/User"
import { useContext } from "react"
import './Header.css'

function Header(){
    const {loggedInUser} = useContext(UserContext)
    return (
        <header id="header">
            <h1>NC News</h1>
            <img src={loggedInUser.avatar_url} className="logged-in-img" />
            <p>{loggedInUser.username} is logged in</p>

            <nav id="nav">
                <Link to='/' className="link">Home</Link>
                <Link to='/topics' className="link">Topics</Link>
                <Link to='/articles' className="link">Articles</Link>
                <Link to='/users' className="link">Users</Link>
            </nav>
        </header>
    )
}

export default Header