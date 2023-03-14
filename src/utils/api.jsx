import axios from "axios"


const ncGamesBe = axios.create({
    baseURL: "https://nc-games-backend-68d2.onrender.com/api"
})

export const fetchAllReviews = () => {
    let path =`/reviews`
    return ncGamesBe
        .get(path,)
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

export const fetchAllCategories = () => {

}

export const fetchAllUsers = () => {

}