import React, { Fragment } from "react";
import CommonHeroSection from "../Components/CommonHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";
import Standout from "../Components/Standout";
import JobsTabs from "../AllTabs/JobSeeker";

const JobsSeeker = () => {
  const data = {
    title: "STAND OUT WITH US",
    main_title: "Try Zepul",
    percentige: [
      {
        title: "86%",
        subtitle: "More Opportunities",
      },
      {
        title: "57%",
        subtitle: "Increase in Visibility",
      },
      {
        title: "20%",
        subtitle: "Access to Global Opportunities",
      },
    ],
  };

  return (
    <Fragment>
      <div className="container">
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
          <section className="d-flex row innovation py-md-5 mt-5 align-items-center">
            <div className="col-md-6">
              <div className="home-content">
                <p className="color-title mb-0">Unlocking Innovation</p>
                <h1>
                  Land your dream job, join Zepul's <br />
                  thriving talent community.
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <p className="w-md-75">
                Connect directly with innovative companies seeking your unique
                abilities. Zepul's dynamic platform empowers you to stand out
                from the crowd and secure the perfect position with a dedicated
                team who understand your career aspirations
              </p>
            </div>
          </section>
        </div>
        <JobsTabs />

        <Standout data={data} />
      </div>
    </Fragment>
  );
};

export default JobsSeeker;
