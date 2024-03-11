import {Link} from "react-router-dom"
import './Home.css'

function Home() {
    return (
        <>
        <h2>Our Most Recent Articles:</h2>
        <Link to='/items/articles/2'><h4>Most Recent Article (update path)</h4></Link>
        </>
    )
}

export default Home;