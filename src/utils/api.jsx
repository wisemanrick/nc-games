import axios from "axios"

const ncGamesBe = axios.create({
    baseURL: "https://nc-games-backend-68d2.onrender.com/api"
})

export const fetchAllReviews = () => {
    return ncGamesBe
        .get("/reviews")
        .then(({data}) => {
            return data.reviews
        }) 

}

export const fetchAllCategories = () => {

}

export const fetchAllUsers = () => {

}