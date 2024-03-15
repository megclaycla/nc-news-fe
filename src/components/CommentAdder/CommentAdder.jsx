import { useContext, useState } from "react";
import { postComment } from "../../api";
import UserContext from "../../contexts/User";

function CommentAdder({article_id, comments, setComments}){
    const { loggedInUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const user = loggedInUser

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article_id, {author: user, body: newComment})
        .then((newCommentFromApi)=>{
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
            setNewComment("")
        })
    }

    return (
        <form className="Comment-adder" onSubmit={handleSubmit}>
            <br></br>
            <textarea
            id="newComment" 
            multiline="true" 
            placeholder="Have your say"
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)}
            required>
            </textarea>
            <br></br>
            <button type="submit">Add a comment</button>
        </form>
    )
}

export default CommentAdder;