
import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticlesList.css'
import Loading from "../Loading/Loading";
import StyledCardBox from "../StyledCardBox/StyledCardBox";
import { useSearchParams } from "react-router-dom";
import { getArticles, getArticlesByTopics } from "../../api";

function ArticlesList({articles, setArticles}) {
    const [newCategory, setNewCategory] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const topic = searchParams.get("topic")


    useEffect(() => {
        setIsLoading(true)
        if(topic === null){
            getArticles(articles).then((data)=>{
                setArticles(data)
                setIsLoading(false)
            })
        } else {
            getArticlesByTopics(topic)
            .then((data) => {
                setArticles(data)
                setIsLoading(false)
            })
        }
    }, [newCategory])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id="article-card">
        <section id="articles-available">
            <h1>Articles:</h1>
            <ul>
                {articles.map((article) => {
                    return <StyledCardBox key={article.article_id}>
                        <ArticleCard   article={article} />
                    </StyledCardBox>
                })}
            </ul>
        </section>
        </div>
    )
}

export default ArticlesList;


