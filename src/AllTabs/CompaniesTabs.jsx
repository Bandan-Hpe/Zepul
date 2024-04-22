import React, { Fragment } from "react";
import Commontabs from "../Components/TabsForAllPage";

const CompaniesTabs = () => {
  const CompaniesData = {
    tab_title: [
      {
        id: 1,
        title: "Community based Recruitment",
      },
      {
        id: 2,
        title: "Perfect Match Database",
      },
      {
        id: 3,
        title: "Easy governance",
      },
      {
        id: 4,
        title: "Synergize Productivity",
      },
      {
        id: 5,
        title: "Improving Hire's Impact",
      },
      {
        id: 6,
        title: "Employer Branding",
      },
    ],
    tab_Content: [
      {
        id: 1,
        images: "/assets/companies.png",
        title:
          "Leveraging Expertise: Optimizing Recruitment Through Skill-Based Matching",
        description:
          "In today's dynamic talent landscape, aligning candidate skillsets with specific requirements is crucial for successful recruitment outcomes. Zepul's proprietary matching algorithm addresses this critical need by correlating recruiter expertise with pre-defined skill-based profiles",
        btn_txt: "Sign up",
      },
      {
        id: 2,
        images: "/assets/companies.png",
        title:
          "Cultivating a Tailored Talent Pool: Harnessing the Power of Referrals and Active Job Seekers",
        description:
          "Building a successful team starts with identifying the right talent. Zepul takes a proactive approach by cultivating a diverse and dynamic database that harnesses the strengths of both active job seekers and strategic referrals. ",

        btn_txt: "Sign up",
      },
      {
        id: 3,
        images: "/assets/companies.png",
        title:
          "Empowering Stakeholders: Fostering Transparency and Data-Driven Decisions",
        description:
          "Zepul's Applicant Tracking System (ATS) goes beyond streamlining the recruitment process. It empowers all stakeholders to actively participate and make informed decisions throughout the hiring journey.",

        btn_txt: "Sign up",
      },
      {
        id: 4,
        images: "/assets/companies.png",
        title:
          "Unlocking Synergies: Boosting Productivity for Delivery and Recruitment Teams",
        description:
          "Zepul fosters collaboration, bridging delivery and recruitment teams for enhanced efficiency. We also manage interviews seamlessly.",

        btn_txt: "Sign up",
      },
      {
        id: 5,
        images: "/assets/companies.png",
        title:
          "Cultivating High-Impact Hires: Building Strategic Partnerships and Talent Networks",
        description:
          "Building a successful team goes beyond finding qualified individuals. It's about fostering high-impact hires who can contribute significantly to your organization's growth to which Zepul’s proactive approach helps.",
        btn_txt: "Sign up",
      },
      {
        id: 6,
        images: "/assets/companies.png",
        title:
          "Cultivating a Powerful Employer Brand: Attracting and Retaining Top Talent",
        description:
          "In today's dynamic talent landscape, aligning candidate skillsets with specific requirements is crucial for successful recruitment outcomes. Zepul's proprietary matching algorithm addresses this critical need by correlating recruiter expertise with pre-defined skill-based profiles",
        btn_txt: "Sign up",
      },
    ],
  };

  return (
    <Fragment>
      <Commontabs data={CompaniesData} />
      
    </Fragment>
  );
};

export default CompaniesTabs;
