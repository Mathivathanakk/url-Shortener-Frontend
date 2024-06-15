import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    {/* navbar */}
      <nav className="navbar navbar-expand-lg py-2 ">
        <div className="container">
          <h1 className="navbar-brand fw-bold">URL SHORTENER</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3 text-center">
                <Link to="/DASHBOARD">DASHBOARD</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3 login text-center">
                <Link to="/signin">LOGIN</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3 signup text-center">
                <Link to="/">SIGNUP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
