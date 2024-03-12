function getArticleById(article_id) {
    return fetch(`https://nc-news-npka.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.json()
    }).then((data) => {
        return data.articles
    })
}

function getCommentsById(article_id) {
    return fetch(`https://nc-news-npka.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.json()
    }).then((data) => {
        
        return data.comments
    })
}

export {getArticleById, getCommentsById};