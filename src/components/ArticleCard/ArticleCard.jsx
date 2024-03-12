import { Link } from "react-router-dom";
import './ArticleCard.css'
import SimpleDateTime from "react-simple-timestamp-to-date";

function ArticleCard(props) {
    const {article} = props
    return (
        <section className="article-card">
            <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
            <p>Author: {article.author}</p>
            <img id="article-img-url" src={article.article_img_url} />
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <p>Created at:</p>
            <SimpleDateTime dateSeparator="/" format="DMY" timeSeparator=":" meridians="0">{article.created_at}</SimpleDateTime>
        </section>
    )
}

export default ArticleCard;