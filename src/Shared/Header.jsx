import React, { Fragment } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaBurger } from "react-icons/fa6";
const Header = () => {
  return (
    <Fragment>
      <div className="container-fluid d-flex justify-content-between">
        <div className="container">
        <div className="d-flex justify-md-content-center  align-items-center justify-content-sm-between header col-md-12 col-sm-12 w-100">
          <div className=" logo">
            <Link to="/">
            <img
              src="/assets/logo.png"
              alt="logo"
            /></Link>
           
          </div>
          <nav className="navbar w-100">
            <ul className="nav-list d-flex w-100 justify-content-center gap-5 mb-0 p-0">
              <li className="nav-item">
                <Link to="/companies" className="nav-link">
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recruitment" className="nav-link">
                  Recruitment Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobseeker" className="nav-link">
                  Job seeker
                </Link>
              </li>
            </ul>
          </nav>
        
          <div className=" d-flex justify-content-end btn-grp ">
          <nav className="mob-nav ">
            <button
              type="button"
              className="btn fs-4 border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaBars/>
            </button>
            <ul className=" dropdown-menu ">
              <li className="nav-item">
                <Link to="/companies" className="nav-link dropdown-item">
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recruitment" className="nav-link dropdown-item">
                  Recruitment Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobseeker" className="nav-link dropdown-item">
                  Job seeker
                </Link>
              </li>
            </ul>
          </nav>
            <button className="sign-in-button btnn">Sign In</button>
          </div>
        </div>

        </div>
      
      </div>
    </Fragment>
  );
};

export default Header;
