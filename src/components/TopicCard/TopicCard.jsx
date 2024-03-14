import { Link } from "react-router-dom";

function TopicCard(props){
    const {topic} = props

    return (
        <section className="topic-card">
            <Link to={`/articles?topic=${topic.slug}`}><h3>{topic.slug}</h3></Link>
            <p>Description: {topic.description}</p>   
        </section>
    )
}

export default TopicCard;

//the url updates with line 8 but it doesn't take you to a page of those articles
//how can i line this up with the articles list that does respond
