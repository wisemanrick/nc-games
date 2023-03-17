import { Link } from "react-router-dom"

function SortReviews () {
    return (
        <section className="sortReview">
            <h1>Your can also sort the reviews by clicking the below links</h1>
            <Link className="sortLink" to="/reviews?sort_by=votes">Votes</Link>
            <Link className="sortLink" to="/reviews?sort_by=title">title</Link>
            <Link className="sortLink" to="/reviews?sort_by=category">category</Link>
            <Link className="sortLink" to="/reviews?sort_by=designer">designer</Link>
            <Link className="sortLink" to="/reviews?sort_by=owner">owner</Link>
            <Link className="sortLink" to="/reviews?sort_by=created_at">Created Date</Link>

        </section>
    )
}

export default SortReviews