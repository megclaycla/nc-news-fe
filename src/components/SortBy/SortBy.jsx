import { useEffect, useState } from "react"
import { getArticles, sortArticles } from "../../api"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function SortBy({sortBy, setSortBy, articles, setArticles}){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const sortParam = searchParams.get("sort_by")

    useEffect(()=>{
        if (sortParam === null) {
            getArticles(articles)
        .then((data) => {
            setArticles(data)
        })} else {
            sortArticles(sortParam)
            .then((articles) => {
                setArticles(articles)
            })
        }
    }, [sortParam])

    //similar logic  for order. searchparams, value of select
    return(
        <div>
            <section id="sort-by">
                <label>
                    Sort by:
                    <select value={sortParam} onChange={(event) => {
                        navigate(`/articles?sort_by=${event.target.value}`)
                        }}>
                        <option value="created_at" >Date</option>
                        <option value="comment_count" >Comments</option>
                        <option value="votes" >Votes</option>
                    </select>
                </label>
            </section>
            <section id="order-by">
                <label>
                    Order by: 
                    <select >
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </label>
            </section>
        </div>
    )
}

export default SortBy

