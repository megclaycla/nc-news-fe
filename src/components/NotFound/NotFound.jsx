import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Click here to get home:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NotFound


// for a non-existent topic.        catch errs and redirect
