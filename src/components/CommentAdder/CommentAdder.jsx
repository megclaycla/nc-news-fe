import { useState } from "react";
import { postComment } from "../../api";

function CommentAdder({setComments}){
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(newComment)
        .then((newCommentFromApi)=>{
            console.log(newCommentFromApi, "<<<<newCommentFromApi")
            setNewComment("")

            setComments((currComments) => {
                return [newCommentFromApi,...currComments]
            })
        })
    }

    return (
        <form className="Comment-adder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Have your say</label>
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