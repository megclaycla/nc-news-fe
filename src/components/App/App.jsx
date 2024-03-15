import { useState } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import { Routes, Route } from 'react-router-dom'
import TopicsList from '../TopicsList/TopicsList'
import ArticlesList from '../ArticlesList/ArticlesList'
import UsersList from '../UsersList/UsersList'
import UserContext from '../../contexts/User'
import SingleArticle from '../SingleArticle/SingleArticle'
import "./App.css"
import NotFound from '../NotFound/NotFound'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({username: 'grumpy19', avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"})
  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  return (
    <UserContext.Provider value={{loggedInUser:loggedInUser, setLoggedInUser: setLoggedInUser}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<TopicsList topics={topics} setTopics={setTopics} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path='/articles' element={<ArticlesList articles={articles} setArticles={setArticles} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
