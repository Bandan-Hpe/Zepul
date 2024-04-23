import React from "react";
import PropTypes from "prop-types";

const TabContent = ({ selectedContent }) => {
  const { title, description, btn_txt, images } = selectedContent;
  return (
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src={images ? images : " "}
          alt={selectedContent.title}
          className="img-fluid w-md-75"
        />
      </div>
      <div className="col-md-6 d-flex flex-column  align-items-md-start mt-sm-5">
        <h1 className=" w-sm-100">{title}</h1>
        <p className="w-sm-100 ">{description}</p>
        <div className="btn-grp d-flex ">
          <button className="sign-in-button tabs">{btn_txt}</button>
        </div>
      </div>
    </div>
  );
};
TabContent.propTypes = {
  selectedContent: PropTypes.object.isRequired,
};

export default TabContent;
