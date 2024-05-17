import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import img from "../../assets/icons/bars.svg";

function Header() {
  const [showlist, setShowlist] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <a href="#">Logo</a>
        </div>
        <ul className={`header__nav__item ${showlist ? "header__show" : ""}`}>
          <li className="header__nav__list">
            <NavLink to={"/"} className={"header__nav__link"}>
              Products
            </NavLink>
          </li>
          <li className="header__nav__list">
            <NavLink to={"/users"} className={"header__nav__link"}>
              Users
            </NavLink>
          </li>
          <li className="header__nav__list">
            <NavLink to={"/login"} className={"header__nav__link"}>
              Login
            </NavLink>
          </li>
          <li onClick={() => setShowlist(false)} className="header__nav__close">
            X
          </li>
        </ul>
        <div className="header__nav__btns">
          <button className="header__nav__btn">Contact</button>
          <button className="header__nav__bars">
            <img onClick={() => setShowlist(true)} src={img} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
