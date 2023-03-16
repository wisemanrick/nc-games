import { useState, useEffect } from "react"
import {fetchReviewComment} from "../utils/api"


function ListReviewComments ({review_ID}) {
    const [comments, setComment] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(() =>{
        fetchReviewComment(review_ID)
        .then((data) =>{
           setComment(data)
           setIsLoading(false)                   
        }).catch(() =>{
         setError(true)
         setIsLoading(false)
        })
     }, [review_ID])

    return (
    <section>
    <h1>Comments</h1>
    {error && <p>No comments yets, be the first</p>}
    {isLoading? <p>Loading...</p> : 
    
        <section>

            
            <ul className="reviewList">
            
            {comments.map((comment) =>{
               return (
                  <li className="CommentItem" key={comment.comment_id}>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                    <p className="comment">{comment.body}</p>
                  
                  </li>
               )
            })}

         </ul>

        </section>
    }
    </section>
    
    )
}

export default ListReviewComments