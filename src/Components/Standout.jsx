import React, { Fragment } from "react";
import "../styles/Standout.css";
const Standout = ({ data }) => {
  const { title, main_title, percentige } = data;
  return (
    <Fragment>
      <section className="standout p-md-5">
        <div className="row">
          <div className="py-md-5 py-3 w-50 ">
            <p className="text-start text-white color-title mb-0">{title}</p>
            <h2 className="text-start text-white ">{main_title}</h2>
          </div>
        </div>
        <div className="row py-md-5">
          {percentige.map((item) => {
            return (
              <div
                className="col-md-4 col-sm-4 d-flex align-items-md-start flex-column align-items-start "
                key={item.title}
              >
                <h1>{item.title}</h1>
                <p className="text-white">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Standout;
