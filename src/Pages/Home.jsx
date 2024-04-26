import React, { Fragment } from "react";
import "../styles/Home.css";
import HeroSection from "../Components/HomeHeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";

const Home = () => {
  const data = [
    {
      title: "Streamlined Recruitment",
      description:
        "Your One-Stop Shop from Requisition to Onboarding: Simplify Your Hiring Process Today.",
    },
    {
      title: "Effortless Workflow",
      description:
        "Dedicated Account Manager to simplify operations and boost productivity.",
    },
    {
      title: "Seamless Governance with Free ATS",
      description:
        "Experience Easy Governance: Utilize Our Free ATS for facile Control and Compliance.",
    },
    {
      title: "Centralized Recruitment Analytics",
      description:
        "Gain Comprehensive Insights: Monitor and Optimize the Entire Recruitment Lifecycle from One Centralized Platform.",
    },
  ];

  const cardData = [
    {
      title: "Expert Sourcing & Screening",
    },
    {
      title: "Streamlined Interview Management",
    },
    {
      title: "Comprehensive Assessments",
    },
    {
      title: "  Dedicated Negotiation Team",
    },
    {
      title: "Real-Time Tracking System",
    },
    {
      title: "Seamless Background Verification",
    },
  ];
  return (
    <Fragment>
      <div className="container">
      <div className="row ">
        <HeroSection />
        <PartnerCarousel />

        <div className="home p-0 ">
          <section className="intro d-flex  mt-5 p-5 ">
            <h1>
              Zepul is a Platform as a Service (PAAS) model that stays true to
              the legacy paradigm while integrating technology, policies &
              procedures to streamline hiring processes, reduce pain points, and
              boost the effectiveness of human intervention
            </h1>
          </section>
          <section className="d-flex row innovation py-md-5  align-items-center">
            <div className="col-md-6 mt-5">
              <div className="home-content">
                <p className="color-title mb-0">Unlocking Innovation</p>
                <h1>
                  Experience the
                  <br /> Power of Zepul 's Features
                </h1>
              </div>
            </div>
            <div className="col-md-6 mt-md-5">
              <p className="w-md-75">
                Unleash efficient hiring with our powerful suite of tools.
                Streamline your workflow, gain data-driven insights to attract
                top talent, and simplify the entire recruitment process.
              </p>
            </div>
          </section>
          <section className="whats-inside d-flex row justify-content-around">
            <div className="col-md-6">
              <h1 className="">See What's inside</h1>
              <p>
                Uncover the features that unlock efficient and effective
                <br /> hiring.
              </p>

              <div className="dropdowns mt-5 position-relative">
                {data.map((item, index) => {
                  return (
                    <div className="dropdowns-item w-md-75 w-xl-50 p-3 mt-3 mb-3" key={index}>
                      <h5>{item.title}</h5>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 position-relative d-flex justify-content-center">
              <div className="home-img  top-0 "></div>
            </div>
          </section>
          <section className="what-we-are-solving    mt-5">
            <div className="row justify-content-between">
              <div className="col-md-6   d-flex justify-content-center mt-5">
                <div className="home-img3"></div>
              </div>
              <div className="col-md-6 mt-5 p-sm-5">
                <div className="home-content">
                  <p className="color-title mb-0">What we are Solving</p>
                  <h1>
                    Simplifying Complexities <br />
                    in Recruitment
                  </h1>
                  <p className="w-md-75 mt-sm-4">
                    Struggling with a slow, inefficient recruitment process?
                    You're not alone. Finding the right talent can be
                    time-consuming and frustrating. Here are some common
                    challenges we help you overcome
                  </p>
                </div>
                <div className="inner-content mt-sm-5">
                  <div className="item d-flex  align-items-center row">
                    <h1 className="col-md-5 col-sm-4">Database</h1>
                    <p className="col-md-7 col-sm-6">
                      Referral program: Top talent, fast. Free, pre-qualified
                      candidates, minimal no-shows.
                    </p>
                  </div>
                  <div className="item d-flex  align-items-center row">
                    <h1 className="col-md-5 col-sm-4">Quality</h1>
                    <p className="col-md-7 col-sm-6">
                      High quality database and profiles, community based
                      recruiting partners.
                    </p>
                  </div>
                  <div className="item d-flex justify-content-between align-items-center row">
                    <h1 className="col-md-5 col-sm-4">Sourcing & Screening</h1>
                    <p className="col-md-7 ">
                      Efficient candidate search, Community based recruiters to
                      help in fast closures
                    </p>
                  </div>
                  <div className="item d-flex justify-content-between align-items-center row">
                    <h1 className="col-md-5 col-sm-4">Easy Governance</h1>
                    <p className="col-md-7">
                      ATS tracks everything from requisition to onboarding,
                      giving delivery and support teams valuable data to make
                      data-driven hiring decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="d-flex row innovation py-md-5 mt-5 align-items-center">
            <div className="col-md-6 mt-5">
              <div className="home-content">
                <p className="color-title mb-0">Our Services</p>
                <h1>
                  Unlock Powerful Solutions <br />
                  Designed for Your Hiring Needs
                </h1>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <p className="w-md-75 color-para">
                Explore a wide range of full-time, Pay per Hour, Pay per Hire
                services across various geographies and industries.
              </p>
              <p className="w-md-75">
                Zepul goes beyond just connecting you with candidates. We offer
                a comprehensive suite of services designed to streamline your
                entire recruitment process and empower you to make smarter
                hiring decisions
              </p>
            </div>
          </section>

          <section className="cards mt-5  m-sm-5 m-md-1">
            <div className="row justify-content-between">
              {cardData.map((item, index) => {
                return (
                  <div
                    className="col-md-4 col-xl-3  card-item d-flex align-items-end"
                    key={index}
                  >
                    <h3>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
      </div>
     
    </Fragment>
  );
};

export default Home;
