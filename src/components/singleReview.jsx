import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleReview } from "../utils/api"
import ListReviewComments from "./comment"
import ShowVotes from "./Votes"


function SingleReview () {
const [review, setReview] = useState([{}])
const {review_ID} = useParams()


const [isLoading, setIsLoading] = useState(true)
const vote = review[0].votes

useEffect(() =>{
    fetchSingleReview(review_ID).then((data) =>{
       setReview(data)
       setIsLoading(false)   
       
       
       
    })
    
 }, [review_ID])
//console.log(vote)

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
        <section>
            <ShowVotes vote={vote} review_ID={review_ID}/>
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