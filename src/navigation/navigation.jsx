// disini buat navbar
import { Link, Route, Routes } from "react-router-dom";
import "./navigation.css";
// import semua page dulu
import Filmfavorite from "../page/film";
import Gallery from "../page/gallery";
import Home from "../page/home";
import Music from "../page/music";
import Profile from "../page/profilebayu";

function Navigation() {
  return (
    <>
      {/* buat link nya dulu */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Music">Music</Link>
        </li>
        <li>
          <Link to="/Film">Film Favorite</Link>
        </li>
      </ul>
      {/* disini buat route nya */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/film" element={<Filmfavorite />} />
      </Routes>
    </>
  );
};

export default Navigation;