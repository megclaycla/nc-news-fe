import { useState } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import { Routes, Route } from 'react-router-dom'
import TopicsList from '../TopicsList/TopicsList'
import ArticlesList from '../ArticlesList/ArticlesList'
import UsersList from '../UsersList/UsersList'
import UserContext from '../../contexts/User'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({username: 'Nala', avatar_url: 'https://images.unsplash.com/photo-1611752554510-94b98a0e64ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})
  const [articles, setArticles] = useState([])


  return (
    <UserContext.Provider value={{loggedInUser:loggedInUser}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<TopicsList articles={articles} setArticles={setArticles} />} />
        <Route path='/articles' element={<ArticlesList articles={articles} setArticles={setArticles} />} />
        <Route path='/users' element={<UsersList />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App