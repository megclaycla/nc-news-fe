import { useState } from "react";
import { postComment } from "../../api";

function CommentAdder({article_id, comments, setComments}){
    const [newComment, setNewComment] = useState("")
    const [postError, setPostError] = useState(false)
    const user = "grumpy19"

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article_id, {author: user, body: newComment})
        .then((newCommentFromApi)=>{
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
            setNewComment("")
        })
        .catch((err) => {
            console.log(err, "<<<<<error");
            setPostError(true)
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
            onChange={(e) => setNewComment(e.target.value)}>
            </textarea>
            <br></br>
            <button onClick={handleSubmit} type="submit">Add a comment</button>
        </form>
    )
}

export default CommentAdder;