import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {changeVote, getArticleById} from "../../api";
import Loading from "../Loading/Loading";
import CommentsList from "../CommentsList/CommentsList";
import Expander from "../Expander/Expander";
import SingleArticleCard from "../SingleArticleCard/SingleArticleCard";
import CommentAdder from "../CommentAdder/CommentAdder";

function SingleArticle(){
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const [err, setErr] = useState("")

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((article) => {
            setVotes(article.votes)
            setArticle(article)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) {
        return <Loading/>
    }

    const handleUpVote = (article_id) => {
            setVotes((currCount) => currCount + 1);
            changeVote(article_id, {"inc_votes": 1})
            .catch((err) => {
                setVotes((currCount) => currCount - 1);
                setErr("Something went wrong, please try again")
            })
    }

    const handleDownVote = (article_id) => {
            setVotes((currCount) => currCount - 1);
            changeVote(article_id, {"inc_votes": - 1})
            .catch((err) => {
                setVotes((currCount) => currCount + 1);
                setErr("Something went wrong, please try again")
            })
    }

    return (
        <div id="single-article">
            <SingleArticleCard article={article}/>
            <p>Comments: {article.comment_count}</p>
            <CommentAdder article_id={article_id} comments={comments} setComments={setComments}/>
            <Expander>
                <CommentsList comments={comments} setComments={setComments} article_id={article_id}/>
            </Expander>
                <p>Votes: {votes} </p>
                <button onClick={() => handleUpVote(article.article_id)}>
                    <span aria-label="up-votes for this article">Like</span>
                </button>
                <button onClick={() => handleDownVote(article.article_id)}>
                    <span aria-label="down-votes for this article">Dislike</span>
                </button>
        </div>
    )
}

export default SingleArticle;

   //the below within a bigger function
    // setComments((currComments) => {
    //     return currComments.map((comment) => {
    //         return comment
    //     })
    // })
    //patchComment()