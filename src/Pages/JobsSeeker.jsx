import React, { Fragment } from "react";
import CommonHeroSection from "../Components/CommonHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";

const JobsSeeker = () => {
  return (
    <Fragment>
      <CommonHeroSection
        title="Shape your 
        Career with Zepul"
        subtitle=" Lorem ipsum dolor sit amet consectetur. Vitae quam nunc fames pulvinar leo nulla lorem fringilla. Nisl pulvinar adipiscing orci felis nam. Malesuada curabitur iaculis mauris diam eu. Magna arcu vitae non gravida est."
        btnText="Become Job seeker"
        image="/assets/jobs.png"
      />
      <div className="mt-5">
        <PartnerCarousel />
      </div>
      <div className="row">
        <section className="d-flex row innovation p-5 mt-5 align-items-center">
          <div className="col-md-6">
            <div className="home-content">
              <p className="color-title mb-0">Unlocking Innovation</p>
              <h1>
                Land your dream job, join Zepul's <br/>thriving talent community.
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <p className="w-75">
              Connect directly with innovative companies seeking your unique
              abilities. Zepul's dynamic platform empowers you to stand out from
              the crowd and secure the perfect position with a dedicated team
              who understand your career aspirations
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default JobsSeeker;
