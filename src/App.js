import { Routes, Route, useParams } from "react-router-dom";
import './App.css';
import ShowAllReviews from "./components/allReviews";
import Header from "./components/header";
import UserLogin from "./components/login";
import NavBar from "./components/nav";
import SingleReview from "./components/singleReview";




function App() {
  
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/reviews" element={<ShowAllReviews />} />
        <Route path="/reviews/:review_ID" element={<SingleReview />} />



      </Routes>
    </div>
  );
}

export default App;
