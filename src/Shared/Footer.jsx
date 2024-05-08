import React, { Fragment } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaHome, FaInstagram, FaTwitter } from "react-icons/fa";

import { FaFacebook, FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="row p-md-5 p-2">
          <div className="col-md-6">
            <h1>It's very simple to get started</h1>
            <p className="my-3">
              Our Cutting-Edge Feature Solutions Empower Efficiency <br />
              and Elevate Results. Discover the Difference Today
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center btn-grp">
            <button className="sign-in-button hero">Try Zepul</button>
          </div>
        </div>
        <hr />
        <div className="row p-md-5 p-3">
          <div className="col-md-3">
            <div className=" ">
              <img src="/assets/image.png" alt="logo" />
              <p>
                Zepul is committed to eliminating all recruitment pain points
                and increasing the effectiveness of human intervention across
                the Talent Acquisition lifecycle.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-md-evenly align-items-center align-items-sm-start ">
            <div className="list1">
              <h4 className="title"> COMPANY</h4>
              <ul className="mt-4 p-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/recruitment">Recruitment Partner</Link>
                </li>
                <li>
                  <Link to="/jobseeker">Job Seeker</Link>
                </li>
              </ul>
            </div>
            <div className="list1">
              <h4 className="title text-uppercase"> Legal</h4>
              <ul className="mt-4 p-0">
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="icons d-flex gap-5">
              <Link
                to="https://www.facebook.com/tryzepul?mibextid=ZbWKwL "
                target="_blank"
              >
                <FaFacebook className="icon" />
              </Link>
              <Link to="https://www.instagram.com/tryzepul/" target="_blank">
                <FaInstagram className="icon" />
              </Link>
              <Link to="https://x.com/tryzepul?t=a7vaOJwbEV_EnDwn9tNiAg&s=08">
                <FaTwitter className="icon" />
              </Link>
            </div>
            <div className="address-info d-flex flex-column mt-4">
              <div className="address d-flex gap-3 align-items-center">
                <FaHome className="icon" />
                <p className="mb-0">
                  Floor 1, Jayabheri Enclave, Gachibowli, Hyderabad - 500032
                </p>
              </div>
              <div className="number d-flex gap-3 align-items-center mt-3">
                <FaPhoneVolume className="icon" />
                <p className="mb-0">+91 9182289998</p>
              </div>
              <div className="email  d-flex gap-3 align-items-center mt-3">
                <MdAlternateEmail className="icon" />
                <p className="mb-0">info@zepul.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row copy-right text-md-end px-3">
          <p>© Copyright 2024. All Rights Reserved by Zepul</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
