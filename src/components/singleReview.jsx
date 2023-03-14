import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleReview } from "../utils/api"
import ListReviewComments from "./comment"

function SingleReview () {
const [review, setReview] = useState([{}])
const {review_ID} = useParams()

const [isLoading, setIsLoading] = useState(true)

useEffect(() =>{
    fetchSingleReview(review_ID).then((data) =>{
       setReview(data)
       setIsLoading(false)    
       
    })
 }, [review_ID])

 
    return (
        <section>
        {isLoading? <p>Loading Reviews...</p> : 
        <section>
            
        <img className="reviewIMG" src={review[0].review_img_url } alt={review[0].title} />
        <h1>{review[0].title}</h1>
        <p>Category : {review[0].category}</p>
        <p>Designer : {review[0].designer}</p>
        <p>Owner : {review[0].owner}</p>
        <p>Created : {review[0].created_at}</p>
        <p className="reviewBody">{review[0].review_body}</p>

        <section className="votes">
            <h2>Votes</h2>
            <section className="voting">
            <button>-</button>
            <p className="voteCount">{review[0].votes}</p>
            <button>+</button>
            </section>
        </section>

        </section>
        
        }
         <section>
         <ListReviewComments review_ID={review_ID}/>
         </section>
        </section>
        
    )
    
    
   
}

export default SingleReview