import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://nc-news-npka.onrender.com/api"
})

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.articles
    })
}

export const getArticles = () => {
    return newsApi.get("/articles")
    .then(({data}) => {
        return data.articles
    })
}

export const sortArticles = (sortParam) => {
        return newsApi.get(`/articles?sort_by=${sortParam}`)
        .then(({data}) =>{  
        return data.articles
    })
}

export const getCommentsById = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

export const getTopics = () => {
    return newsApi.get("/topics")
    .then(({data}) => {
        return data.topics
    })
}

export const getArticlesByTopics = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`)
    .then(({data}) => {
        return data.articles
    })
}

export const getUsers = () => {
    return newsApi.get("users")
    .then(({data}) => {
        return data.users
    })
}

export const changeVote = (article_id, body) => {
    return newsApi.patch(`/articles/${article_id}`, body)
    .then(({data}) =>{
        return data
    })
}

export const postComment = (article_id, body) => {
    return newsApi.post(`/articles/${article_id}/comments`, body)
    .then(({data}) => {
        return data
    })
}

export const deleteCommentById = (comment_id) => {
        return newsApi.delete(`/comments/${comment_id}`)
    .then(() => {
        
    })
}


