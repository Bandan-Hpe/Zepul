import React, { Fragment } from "react";
import CommonHeroSection from "../Components/CommonHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";
import Standout from "../Components/Standout";
import RecruitmentTabs from "../AllTabs/Recruitment";
import Community from "../Components/Community";

const Recruitment = () => {
  const data = {
    title: "STAND OUT WITH US",
    main_title: "Become a Recruitment Partner",
    percentige: [
      {
        title: "80%",
        subtitle: "Businesses plan to increase their use of Marketplaces",
      },
      {
        title: "20%",
        subtitle: "Increase in Brand Awareness",
      },
      {
        title: "50%",
        subtitle: "Reduction is Administrative Tasks",
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
        title="Become a 
        Recruitment Partner"
        subtitle="Empower your business with the future of recruitment. Partner with Zepul and unlock innovative solutions, a curated talent pool, and data-driven insights to build winning teams and propel your organization towards sustainable growth.."
        btnText="Become Recruitment"
        image="/assets/recruiter.png"
      />
      <div className="mt-5">
        <PartnerCarousel />
      </div>
      <div className="row">
        <section className="d-flex row innovation p-5 mt-5 align-items-center">
          <div className="col-md-6">
            <div className="home-content">
              <p className="color-title mb-0">Recruit smarter, grow faster</p>
              <h1>
                Expand Reach, & Drive Growth <br />
                Through Innovative Recruitment.
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <p className="w-75">
              Zepul empowers partners to optimize their operational efficiency,
              cut down on promotional costs, and tap into an expansive
              international market landscape for enhanced growth opportunities.
            </p>
          </div>
        </section>
      </div>
      <RecruitmentTabs />
      <Community data={communityData} />

      <Standout data={data} />
    </Fragment>
  );
};

export default Recruitment;
