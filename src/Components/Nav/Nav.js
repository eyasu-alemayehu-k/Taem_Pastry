import React, { useState } from "react";
import "./Nav.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav min-w-full bg-gray-800 fixed top-0 flex justify-between items-center text-white">
      <div className="nav__logo">
        <h1 className="font-bold text-3xl text-orange-400">ጣእም</h1>
      </div>
      <div className="nav__list flex justify-around font-mono text-lg ">
        <a
          href="#home"
          className={`"nav__link " ${activeNav === "#" ? "active" : ""}`}
          onClick={() => setActiveNav("#")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`"nav__link " ${activeNav === "#about" ? "active" : ""}`}
          onClick={() => setActiveNav("#about")}
        >
          About
        </a>
        <a
          href="#menu"
          className={`"nav__link " ${activeNav === "#menu" ? "active" : ""}`}
          onClick={() => setActiveNav("#menu")}
        >
          Menu
        </a>
        <a
          href="#service"
          className={`"nav__link " ${activeNav === "#service" ? "active" : ""}`}
          onClick={() => setActiveNav("#service")}
        >
          Service
        </a>
        <a
          href="#review"
          className={`"nav__link " ${activeNav === "#review" ? "active" : ""}`}
          onClick={() => setActiveNav("#review")}
        >
          Review
        </a>
      </div>
      <div className="nav__icons flex justify-between items-center">
        <a href="/search" className="nav__iconLink bg-orange-400 rounded-full w-8 h-8  flex justify-center items-center">
          <SearchIcon />
        </a>
        <a href="/favorite" className="nav__iconLink bg-orange-400 rounded-full w-8 h-8 flex justify-center items-center">
          <FavoriteIcon />
        </a>
        <a href="/cart" className="nav__iconLink bg-orange-400 rounded-full w-8 h-8  flex justify-center items-center">
          <ShoppingCartIcon />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
