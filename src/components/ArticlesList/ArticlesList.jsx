
import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticlesList.css'
import Loading from "../Loading/Loading";
import StyledCardBox from "../StyledCardBox/StyledCardBox";



function ArticlesList({articles, setArticles}) {
const [newCategory, setNewCategory] = useState("")
const [isLoading, setIsLoading] = useState(true)

    let url = "https://nc-news-npka.onrender.com/api/articles"
    useEffect(() => {
        if (newCategory){
            url += `?topic=${newCategory}`
        }
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setArticles(data.articles)
            setIsLoading(false)
        })
    }, [newCategory])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id="article-card">
        <section id="articles-categories">
            <h1>Filter by Topic:</h1>
            <select value={newCategory} onChange={(event) => {
                setNewCategory(event.target.value)}}>
                <option value="">All</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
                <option value="cooking">Cooking</option>
            </select>
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