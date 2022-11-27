import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SongPlay from "./components/SongPlay/SongPlay";
import Trending from "./components/Trending/Trending";
import Latest from "./components/Latest/Latest";
import Favourites from "./components/Favourites/Favourites";
import Login from "./components/Login-SignUp/Login";
import Register from "./components/Login-SignUp/Register";
import Account from "./components/Account/Account";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:name" element={<SongPlay />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/me" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
