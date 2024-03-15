
import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import TopicCard from "../TopicCard/TopicCard";
import Loading from "../Loading/Loading";
import StyledCardBox from "../StyledCardBox/StyledCardBox";
import NotFound from "../NotFound/NotFound";

function TopicsList({isLoading, setIsLoading, topics, setTopics}) {
    const [topicsError, setTopicsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getTopics(topics)
        .then((data) =>{
            setTopics(data)
            setIsLoading(false)}
        )
        .catch((error) => {
        setTopicsError(true)
        })
    }, [])

    if (topicsError) {
        return <NotFound/>
    }

    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
        <h1>Find articles on the following topics:</h1>
        <ul>
            {topics.map((topic)=> {
                return <StyledCardBox key={topic.slug}>
                    <TopicCard  topic={topic} isLoading={isLoading} />
                </StyledCardBox>
            })}
        </ul>
        </>
    )
}

export default TopicsList;