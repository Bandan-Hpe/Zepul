import React, { Fragment } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 col-sm-12 col-xl-4">
            <div className="content">
              <h1 className="hero-title">
                The Future of <br />
                recruitment is here.
              </h1>
              <p className="hero-text mt-3 ">
                Achieve your hiring goals 10x faster by skipping sourcing,
                <br />
                screening , interview management and evaluations.
              </p>
              <p className="hero-text mt-3">
                Zepul got your hiring covered, requisition to onboarding.
              </p>
            </div>
            <div className="btn-grp mt-5 d-flex gap-4">
              <button className="sign-in-button hero">Sign In</button>
              <button className="learn-more-button hero">Learn more</button>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-xl-7">
            <img
              src="https://s3-alpha-sig.figma.com/img/130f/345f/d05a95d8cd1dda2d840e22930f478102?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euT86bb4TfMtIHg2KZsPCqS9hN5GHbkb0v9X~muqeNDdBajn5rOtQsW2AjYomJhLMtNFSefB3vuwLEV8h~J8-0sKTr1xgCJP4l3Bbj5cKE5JlBaL0wN~THrPZa5tSdSMh5WXwYtIqW4CI0KP8zPlJGQZgUGYwrfrJmB52MyYONKFzXKMnjairxTsWH52cEpDjzw6krJKH6aayZaXRkiV~pwFfq2vYPP9mw9Ss75kjlG7tGyTokic0yfdyOi1ZDf4EtlgUskqOj8gy8vgZvZScoKRDJMg7hKpLwJ5WPB-x6MUIeQajvFM5e~4uuIIEmeFcosIjgqNSSKCc-uBIujUEw__"
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
