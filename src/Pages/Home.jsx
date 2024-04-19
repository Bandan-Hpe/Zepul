import React, { Fragment } from "react";
import "../styles/Home.css";

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
  return (
    <Fragment>
      <div className="row ">
        <div className="home p-0 ">
          <section className="intro d-flex  mt-5 p-5 ">
            <h1>
              Zepul is a Platform as a Service (PAAS) model that stays true to
              the legacy paradigm while integrating technology, policies &
              procedures to streamline hiring processes, reduce pain points, and
              boost the effectiveness of human intervention
            </h1>
          </section>
          <section className="d-flex innovation p-5 mt-5 align-items-center">
            <div className="col-md-6">
              <div className="home-content">
                <p className="color-title mb-0">Unlocking Innovation</p>
                <h1>
                  Experience the
                  <br /> Power of Zepul 's Features
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <p className="w-75">
                Unleash efficient hiring with our powerful suite of tools.
                Streamline your workflow, gain data-driven insights to attract
                top talent, and simplify the entire recruitment process.
              </p>
            </div>
          </section>
          <section className="whats-inside p-5 d-flex ">
            <div className="col-md-6">
              <h1 className="">See What's inside</h1>
              <p>
                Uncover the features that unlock efficient and effective
                <br /> hiring.
              </p>

              <div className="dropdowns mt-5 position-relative">
                {data.map((item, index) => {
                  return (
                    <div className="dropdowns-item w-50 p-3 m-3 " key={index}>
                      <h5>{item.title}</h5>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 position-relative ">
              <div className="home-img position-absolute top-0 "></div>
              <div className="home-img2 position-absolute"></div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
