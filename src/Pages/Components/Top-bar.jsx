import React from "react";
import "../SCSS/Topbar.scss";
import { Link } from "react-router-dom";
import logo from '../Assets/tmg-removebg-preview.png'
function Topbar(props) {
  return (
    <div className="Topbar">
      <button
        type="button"
        className="hamburger"
        onClick={() => props.setOpenMenu(true)}
      >
        ≡
      </button>
      <Link to="/" className="h-btn">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="menu">
        <Link
          to="/"
          className={`btn ${props.active === "Home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/skills"
          className={`btn ${props.active === "Skills" ? "active" : ""}`}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={`btn ${props.active === "Projects" ? "active" : ""}`}
        >
          My Projects
        </Link>
      </div>
    </div>
  );
}
export default Topbar;
