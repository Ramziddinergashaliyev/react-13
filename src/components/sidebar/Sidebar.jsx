import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import img1 from "../../assets/icons/Logo.svg";
import img2 from "../../assets/icons/img-1.svg";
import img3 from "../../assets/icons/img-2.svg";
import img4 from "../../assets/icons/img-3.svg";
import img5 from "../../assets/icons/img-4.svg";
import img6 from "../../assets/icons/img-5.svg";
import img7 from "../../assets/icons/Vector.svg";
import out from "../../assets/icons/out.svg";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <section className="sidebar">
      <div className="sidebar__top">
        <img src={img1} alt="" />
        <h1>Dashboard</h1>
      </div>
      <ul className="sidebar__item">
        <li className="sidebar__list">
          <NavLink to={"createProducts"} className={"sidebar__left__text"}>
            <img src={img2} alt="" />
            create products
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to={"manageProducts"} className={"sidebar__left__text"}>
            <img src={img3} alt="" />
            manage products
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to={"createUsers"} className={"sidebar__left__text"}>
            <img src={img4} alt="" />
            create users
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to={"manageUsers"} className={"sidebar__left__text"}>
            <img src={img5} alt="" />
            manage users
          </NavLink>
        </li>
        <div className="sidebar__btns">
          <div className="sidebar__btns__title">
            <img src={img7} alt="" />
            <p>Change mode</p>
          </div>
          <div className="sidebar__btns__title" onClick={handleLogout}>
            <img src={out} alt="" />
            <p>Login out</p>
          </div>
        </div>
      </ul>
    </section>
  );
}

export default Sidebar;
