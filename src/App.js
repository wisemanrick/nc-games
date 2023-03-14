import { Routes, Route } from "react-router-dom";
import './App.css';
import ShowAllReviews from "./components/allReviews";
import Header from "./components/header";
import UserLogin from "./components/login";
import NavBar from "./components/nav";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/reviews" element={<ShowAllReviews />} />


      </Routes>
    </div>
  );
}

export default App;
