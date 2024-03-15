import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";


function TopicCard(props){
    const {topic, isLoading} = props

    if (isLoading) {
        return <Loading/>
    }

    return (
        <section className="topic-card">
            <Link to={`/articles?topic=${topic.slug}` }><h3>{topic.slug}</h3></Link>
            <p>Description: {topic.description}</p>   
        </section>
    )
}

export default TopicCard;
