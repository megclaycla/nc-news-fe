
import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticlesList.css'
import Loading from "../Loading/Loading";
import StyledCardBox from "../StyledCardBox/StyledCardBox";
import { useSearchParams } from "react-router-dom";
import { getArticles, getArticlesByTopics } from "../../api";
import SortBy from "../SortBy/SortBy";

function ArticlesList({articles, setArticles}) {
    const [sortBy, setSortBy] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const topic = searchParams.get("topic")

    useEffect(() => {
        setIsLoading(true)
        if(topic === null){
            console.log("hiyaaa");
            getArticles(articles)
            .then((data)=>{
                setArticles(data)
                setIsLoading(false)
            })
        } else {
            console.log("hello");
            getArticlesByTopics(topic)
            .then((data) => {
                console.log(data);
                setArticles(data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [sortBy])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id="article-card">
            <section id="sort-by">
                <SortBy sortBy={sortBy} setSortBy={setSortBy} setArticles={setArticles} articles={articles} />
            </section>
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


