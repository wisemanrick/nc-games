import { useState } from "react"
import { postNewComment } from "../utils/api"


//props = user, all comments, review_ID
function AddNewComment ({review_ID, user, comments, setComment}) {
const [newComment, setNewComment] = useState("")
const [newCommentError, setNewCommentError] = useState(false)
function handleSubmit(event) {
    event.preventDefault()
    setNewCommentError(false)
    const buildPost = {
        username : user,
        body : newComment,
        }
    const optimisticPost = {
        author : user,
        body : newComment,
        created_at :"Just Now!!",
        comment_id: "Temp"
    }
    setComment([optimisticPost, ...comments])
    
    postNewComment(buildPost, review_ID).then((data)=>{
        
    }).catch(() => {
        setNewCommentError(true)
        setComment(comments.filter(comment => comment.comment_id !== "Temp"))
    })
    
}
    return(
        <section className="newComment">
            {newCommentError &&<p>There was an issue posting your comment, please refresh the page and try again</p>}
        <h1>New Comment here</h1>
        <form onSubmit={handleSubmit} className="newCommentForm">
            <label htmlFor="commentArea">Add you new comment below</label>
            <textarea 
            value={newComment} 
            id="commentArea" 
            placeholder="Please comment on the review"
            onChange={(event) => setNewComment(event.target.value)}

            >
            </textarea>
            <button>Submit new comment</button>
        </form>
        </section>
    )
}

export default AddNewComment