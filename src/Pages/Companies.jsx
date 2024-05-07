import React, { Fragment } from "react";
import CommonHeroSection from "../Components/CommonHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";
import Standout from "../Components/Standout";
import CompaniesTabs from "../AllTabs/CompaniesTabs";

const Companies = () => {
  const data = {
    title: "STAND OUT WITH US",
    main_title: "Become an industry leader",
    percentige: [
      {
        title: "3x",
        subtitle: "Increase in Productivity",
      },
      {
        title: "40%",
        subtitle: "Increased Hiring Speed",
      },
      {
        title: "20%",
        subtitle: "Improved Quality Hire.",
      },
    ],
  };

  return (
    <Fragment>
      <div className="container">
        <CommonHeroSection
          title="Try Zepul"
          subtitle="Unlock the power of tailored recruitment solutions and build the winning teams that drive your success. Partner with Zepul."
          btnText="Sign up"
          image="/assets/10. Try Zepul.png"
        />
        <div className="mt-5">
          <PartnerCarousel />
        </div>
        <div className="row">
          <section className="d-flex row innovation py-md-5 mt-5 align-items-center">
            <div className="col-md-6">
              <div className="home-content">
                <p className="color-title mb-0">Revolutionize hiring</p>
                <h1>
                  Innovative recruitment to build <br />
                  your dream team faster.
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <p className="w-md-75">
                Zepul streamlines recruitment, connecting you with top industry
                professionals through a curated talent pool. Our platform
                expedites your hiring process, securing the right talent to
                drive success.
              </p>
            </div>
          </section>
        </div>
        <CompaniesTabs />

        <Standout data={data} />
      </div>
    </Fragment>
  );
};

export default Companies;
