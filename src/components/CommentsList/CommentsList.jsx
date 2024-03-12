import CommentCard from "../CommentCard/CommentCard";
import { useState, useEffect } from "react";
import { getCommentsById } from "../../api";
import StyledCardBox from "../StyledCardBox/StyledCardBox";
import './CommentsList.css'

function CommentsList({comments, setComments, article_id}){
    const [viewComments, setViewComments] = useState([])
    
    useEffect(()=> {
        getCommentsById(article_id)
        .then((data)=>
        setViewComments(data)
        )
    }, [article_id])


    return (
        <section id="article-comments">
            <p>Displaying comments about article {article_id}:</p>
            <ul>
            {viewComments.map((comment) => {
                return <StyledCardBox key={comment.comment_id}>
                            <CommentCard  comment={ comment }/>
                        </StyledCardBox>
            })}
            </ul>
        </section>

    )
}

export default CommentsList;