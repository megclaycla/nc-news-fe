
import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticlesList.css'

function ArticlesList({articles, setArticles}) {
const [newCategory, setNewCategory] = useState("")

    let url = "https://nc-news-npka.onrender.com/api/articles"
    useEffect(() => {
        if (newCategory){
            url += `?topic=${newCategory}`
        }
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setArticles(data.articles)
        })
    }, [newCategory])

    return (
        <>
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
                    return <ArticleCard key={article.article_id} article={ article } />
                })}
            </ul>
        </section>
        </>
    )
}

export default ArticlesList;