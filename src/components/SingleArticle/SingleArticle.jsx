import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getArticleById from "../../api";
import Loading from "../Loading/Loading";

function SingleArticle(){
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id="single-article">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <img id="article-img-url" src={article.article_img_url} />
            <p>{article.body}</p>
            <p>Comments: {article.comment_count}</p>
            <button>Add a comment</button>
            <button>View comments</button>
            <button>Vote</button>
        </div>
    )
}

export default SingleArticle;