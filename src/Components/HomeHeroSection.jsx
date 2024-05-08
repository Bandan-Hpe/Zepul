import React, { Fragment } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6 col-sm-12 col-xl-5 ">
            <div className="content">
              <h1 className="hero-title ">
                The Future Of <br />
                Recruitment Is Here.
              </h1>
              <p className="hero-text mt-3 ">
                Achieve your hiring goals <span className="fs-4 text-primary fw-bold">10x</span> faster by
                outsourcing talent acquisition to us, right from requisition to
                onboarding screening , interview management and evaluations.
              </p>
              <p className="hero-text mt-3">
                Leave the hiring to us, so you can focus on what matters the
                most.
              </p>
            </div>
            <div className="btn-grp mt-5 d-flex gap-4">
              <button className="sign-in-button hero">Sign In</button>
              {/* <button className="learn-more-button hero">Learn more</button> */}
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-xl-7 order-lg-2 order-sm-first ">
            <img
              src="/assets/1. The Future of recruitment is here.png"
              alt=""
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
