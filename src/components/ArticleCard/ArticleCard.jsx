import { Link } from "react-router-dom";
import './ArticleCard.css'

function ArticleCard(props) {
    const { article } = props
    return (
        <section className="article-card">
            <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
            <p>Author: {article.author}</p>
            <img id="article-img-url" src={article.article_img_url} />
        </section>
    )
}

export default ArticleCard;