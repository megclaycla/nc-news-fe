import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getArticleById, getCommentsById} from "../../api";
import Loading from "../Loading/Loading";
import CommentsList from "../CommentsList/CommentsList";
import Expander from "../Expander/Expander";
import SimpleDateTime from "react-simple-timestamp-to-date";

function SingleArticle(){
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        setIsLoading(true)
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
            <p>Created at:</p>
            <SimpleDateTime dateSeparator="/" format='DMY' timeSeparator=":" meridians="0">{article.created_at}</SimpleDateTime>
            <p>Comments: {article.comment_count}</p>
            <button>Add a comment</button>
            <Expander>
                <CommentsList comments={comments} setComments={setComments} article_id={article_id}/>
            </Expander>
            <button>Vote</button>
        </div>
    )
}

export default SingleArticle;