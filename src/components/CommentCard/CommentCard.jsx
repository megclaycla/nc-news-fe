import SimpleDateTime from "react-simple-timestamp-to-date";
import { useEffect, useState, useContext } from "react";
import { deleteCommentById } from "../../api";
import UserContext from "../../contexts/User";

function CommentCard(props){
    const {comment, comment_id, comments, setComments, index} = props
    const { loggedInUser } = useContext(UserContext)

    const handleDeleteComment = (event) => {
        event.preventDefault()
        deleteCommentById(comment_id)
        .then(() => {
            setComments((currComments) => {
                const copiedComments = [...currComments]
                copiedComments.splice(index, 1)
                return copiedComments
            });
        })
    }

    return (
        <section className="comment-card">
            <p>Author: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created at:</p>
            <SimpleDateTime dateSeparator="/" format='DMY' timeSeparator=":" meridians="0">{comment.created_at}</SimpleDateTime>
            {comment.author === loggedInUser.username ? <button onClick={handleDeleteComment}>Delete your comment</button> : null}
        
        </section>
    )
}

export default CommentCard;