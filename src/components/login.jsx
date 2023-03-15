import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers } from "../utils/api";

function UserLogin ({user, setUser}) {
const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        fetchAllUsers().then((data)=> {
            setAllUsers(data)
            console.log(allUsers)
        })
        

    },[])

    return (
      
        <section className="login">
        <h1>User login page</h1>

        <select>
        {allUsers.map((user)=>{
          return  <option>{user.username}</option>
        })}
        </select>

        <section className="noAuth">
        <Link to="/reviews">Click to see reviews without loggin in</Link>
        </section>
        </section>
        

    )
}

export default UserLogin