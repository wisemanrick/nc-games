import { useEffect, useState } from "react"

import { fetchAllReviews } from "../utils/api"
import { Link } from "react-router-dom";



function ShowAllReviews () {
   const [allReviews, setAllReviews] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   
   useEffect(() =>{
      fetchAllReviews().then((data) =>{
         setAllReviews(data)
         setIsLoading(false)
         
         
      })
   }, [])

   return (
      <section className="allReviews">
         <h1>This will be all the reviews</h1>
         {isLoading? <p>Loading Reviews...</p> : 
         <ul className="reviewList">
            
            {allReviews.map((review) =>{
               return (
                  <li className="review" key={review.review_id}>
                     <img className="reviewIMG" src={review.review_img_url} alt={` ${review.title}`}/>
                     <h2>{review.title}</h2>
                     <p>{`Category: ${review.category}`}</p>
                     <Link to={`/reviews/${review.review_id}`}>Click here to read full review</Link>
                  </li>
               )
            })}

         </ul>
         }

      </section>
   
   )
}

export default ShowAllReviews