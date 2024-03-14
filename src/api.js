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

export const changeVote = (article_id, body) => {
    return newsApi.patch(`/articles/${article_id}`, body)
    .then(({data}) =>{
        return data
    })
}


export const postComment = (newCommentText) => {
    const postBody = {
        text: newCommentText,
    };
    return newsApi.post(`/articles/${article_id}/comments`, postBody)
    .then(({data}) => {
        return data.comment
    })
}


export const patchComment = (article_id, comment_id) => {
    const patchBody = {
        increase: 1,
    }
    return newsApi.patch(`/articles/${article_id}/comments/`)
}
