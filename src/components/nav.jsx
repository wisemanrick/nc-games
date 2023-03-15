import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchAllCategories } from "../utils/api"


function NavBar () {
    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        fetchAllCategories().then((data)=>{
            setAllCategories(data)
        })

    },[]) 

    return (
    <nav>
    
    <section>
        {allCategories.map((category)=>{
         return   <Link className="link" to="page??">{category.slug}</Link>
         
        })}
    </section>


    </nav>
    )
}

export default NavBar