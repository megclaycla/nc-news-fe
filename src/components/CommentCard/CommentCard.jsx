import SimpleDateTime from "react-simple-timestamp-to-date";

function CommentCard(props){
    const {comment} = props

    return (
        <section className="comment-card">
            <p>Author: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created at:</p>
            <SimpleDateTime dateSeparator="/" format='DMY' timeSeparator=":" meridians="0">{comment.created_at}</SimpleDateTime>
        </section>
    )
}

export default CommentCard;