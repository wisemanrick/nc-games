import axios from "axios"


const ncGamesBe = axios.create({
    baseURL: "https://nc-games-backend-68d2.onrender.com/api"
})

export const fetchAllReviews = (category, sort,orderBy) => {
    console.log(category)
    let path =`/reviews`
    return ncGamesBe
        .get(path,{params:{category:category,
                            sort_by: sort,
                            order: orderBy}})
        .then(({data}) => {
            return data.reviews
        }) 

}

export const fetchSingleReview = (review_ID) => {
    let path =`/reviews/${review_ID}`
    return ncGamesBe
        .get(path,)
        .then(({data}) => {
            return data.review
        }) 

}

export const fetchReviewComment = (review_ID) => {
   let commentPath =`/reviews/${review_ID}/comments`
    //14
    return ncGamesBe
        .get(commentPath)
        .then(({data}) => {
            return data.comments
        }) 

}

export const voteForReview = (voted,review_ID ) => {
    let votePath = `/reviews/${review_ID}`
    console.log(review_ID)
    return ncGamesBe
        .patch(votePath, {inc_votes : voted})
        .then(({data}) => {
            return data.review.votes
        })
    
}


export const fetchAllCategories = () => {
    let AllCategoriesPath = "/categories"
    return ncGamesBe
    .get(AllCategoriesPath).then(({data}) =>{
        return data.categories
    })

}

export const fetchAllUsers = () => {
let userPath = "/users"
return ncGamesBe
    .get(userPath).then(({data}) =>{
        return data.users
    })
}

export const postNewComment = (postNewComment, review_ID) => {
 let newCommentPath = `/reviews/${review_ID}/comments`

 return ncGamesBe
    .post(newCommentPath,postNewComment).then(({data}) =>{
        return data.comment
    })
}