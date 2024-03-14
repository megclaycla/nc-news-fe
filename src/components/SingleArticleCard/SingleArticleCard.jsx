import SimpleDateTime from "react-simple-timestamp-to-date";

function SingleArticleCard(props){
    const {article} = props

    return (
        <section className="single-article-card">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <img id="article-img-url" src={article.article_img_url} />
            <p>{article.body}</p>
            <p>Created at:</p>
            <SimpleDateTime dateSeparator="/" format='DMY' timeSeparator=":" meridians="0">{article.created_at}</SimpleDateTime>
        </section>
    )
}

export default SingleArticleCard;