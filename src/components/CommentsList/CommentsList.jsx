import CommentCard from "../CommentCard/CommentCard";
import { useEffect } from "react";
import { getCommentsById } from "../../api";
import StyledCardBox from "../StyledCardBox/StyledCardBox";
import './CommentsList.css'

function CommentsList({comments, setComments, article_id}){
    
    useEffect(()=> {
        getCommentsById(article_id)
        .then((data)=>
        setComments(data)
        )
    }, [article_id])


    return (
        <section id="article-comments">
            <p>Displaying comments about article {article_id}:</p>
            <ul className="comments_list">
            {comments.map((comment, index) => {
                return <StyledCardBox key={comment.comment_id}>
                            <CommentCard comment_id={comment.comment_id} comment={ comment } comments={comments} setComments={setComments}/>
                        </StyledCardBox>
            })}
            </ul>
        </section>

    )
}

export default CommentsList;