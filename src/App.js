import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import ShowAllReviews from "./components/allReviews";
import Header from "./components/header";
import UserLogin from "./components/login";
import NavBar from "./components/nav";
import SingleReview from "./components/singleReview";


function App() {
  const [user, setUser] = useState("tickle122")
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<UserLogin user={user} setUser={setUser} />} />
        <Route path="/reviews" element={<ShowAllReviews />} />
        <Route path="/reviews/:review_ID" element={<SingleReview user={user} />}  />
        <Route path="/reviews/categories/:category" element={<ShowAllReviews />} />
      </Routes>
    </div>
  );
}

export default App;
