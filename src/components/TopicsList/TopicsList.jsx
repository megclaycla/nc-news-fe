
import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import TopicCard from "../TopicCard/TopicCard";
import Loading from "../Loading/Loading";
import StyledCardBox from "../StyledCardBox/StyledCardBox";

function TopicsList({isLoading, setIsLoading}) {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
        .then((data) =>
        setTopics(data))
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
        <h1>Find articles on the following topics:</h1>
        <ul>
            {topics.map((topic)=> {
                return <StyledCardBox key={topic.slug}>
                    <TopicCard  topic={topic}/>
                </StyledCardBox>
            })}
        </ul>
        </>
    )
}

export default TopicsList;