import React, { Fragment } from "react";
import CommonHeroSection from "../Components/CommonHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";
import Standout from "../Components/Standout";
import JobsTabs from "../AllTabs/JobSeeker";
import Community from "../Components/Community";


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
  const communityData = [
    {
      id: 1,
      title: "Community-Driven Recruitment",
      description:
        "Our vibrant community actively collaborates to identify exceptional talent, fostering a diverse and dynamic team. Together, we shape the future",
    },
    {
      id: 2,
      title: "Elevated Operational Efficiency",
      description:
        "By eliminating the need for extensive screening and evaluation, skill-based matching optimizes resource allocation and maximizes your recruiter productivity.",
    },
    {
      id: 3,
      title: "Data-Driven Decision Making",
      description:
        "Precise matching enables informed hiring decisions based on objective criteria, fostering long-term employee success and organizational growth.",
    },
  ];
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
                Land your dream job, join Zepul's <br />
                thriving talent community.
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
      <JobsTabs />
      <Community data={communityData} />

      <Standout data={data} />
    </Fragment>
  );
};

export default JobsSeeker;
