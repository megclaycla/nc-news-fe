function getArticleById(article_id) {
    return fetch(`https://nc-news-npka.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.json()
        //handle an error here?
    }).then((data) => {
        return data.articles
    })
}

export default getArticleById;