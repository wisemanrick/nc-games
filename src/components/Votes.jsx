import { useState } from "react"
import { voteForReview } from "../utils/api"




function ShowVotes ({vote, review_ID}) {
    const [currentVote, setCurrentVote] = useState(vote)
    const [hasUpVoted, setHasUpVoted] = useState(false)
    const [hasDownVoted, setHasDownVoted] = useState(false)
    const [votingError, setVotingError] = useState(false)

    function upVote () {
        setVotingError(false)
        setCurrentVote(currentVote +1)
        setHasUpVoted(true)
        voteForReview(1,review_ID)
        .catch(() =>{
            setVotingError(true)
            setHasUpVoted(false)
            setCurrentVote(vote)
        })
        
    }

    function downVote () {
        setVotingError(false)
        setHasDownVoted(true)
        setCurrentVote(currentVote -1)
        
        voteForReview(-1,review_ID)
        .catch(() =>{
            
            setVotingError(true)
            setHasDownVoted(false)
            setCurrentVote(vote)
        })
        
    }

    return (
    <section className="votes">
        <h2>Votes</h2>
        <section className="voting">
        <button onClick={downVote} disabled={hasDownVoted === true}>-</button>

        <p className="voteCount">{currentVote}</p>

        <button onClick={upVote} disabled={hasUpVoted === true}>+</button>
        </section>
        <section className="error">
        {votingError && <p>There has been an issue with your vote, please refresh the page</p>}
        </section>
    </section>

    )

}

export default ShowVotes