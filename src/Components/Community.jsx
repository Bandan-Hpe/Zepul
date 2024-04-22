import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Community = ({ data }) => {
  return (
    <Fragment>
      <div className="row justify-content-center py-5">
        <section className="row col-md-10 justify-content-between border-2 community" >
          {data.map((item) => {
            return (
              <div
                className="col-md-3 d-flex align-items-center flex-column border-end"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </section>
      </div>
    </Fragment>
  );
};
Community.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Community;
