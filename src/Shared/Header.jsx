import React, { Fragment } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="d-flex justify-content-center m-3 align-items-center">
          <div className=" logo">
            <img
              src="https://s3-alpha-sig.figma.com/img/eee8/9dc4/1323c23ee01cb6fa4ad0463be5d9598c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bw3jnOktawIF-f-eyYG-iWxLCnMtPK86unqsCSSBJSLTK7OkIkOXvvmW3yGRCNd4aVU-AKYybhnxYbkYTDZR8fxbvOoD~WgCoiKQt7LZ694l95nyXVWfeUYVxuHeE7O5O7Qy76SIPy022c9QS6a8G9vm3P23UeD0Rbq9Qk~cbIEXSbZD~ZIXdfG-CDCV6z8sCx6X4Fhfuvv-kWZOP2Ucn6eu3zgI4D9ZgC484Twtl23YAt8bi96OdmVV6y~KcaQFhedVCds4OuJc-euYLFgz6N3KYqqSHtwie8wvs3LV2o6Z9dW2IGHUoI4dxGy0e24A8xItwtjwxieIcZ4H9CJl0w__"
              alt="logo"
            />
          </div>
          <nav className="navbar w-100">
            <ul className="nav-list d-flex w-100 justify-content-center gap-5 mb-0">
              <li className="nav-item">
                <Link to="/companies" className="nav-link">
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recruitment" className="nav-link">
                  Recruitment Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobseeker" className="nav-link">
                  Job seeker
                </Link>
              </li>
            </ul>
          </nav>
          <div className=" d-flex justify-content-end ">
            <button className="sign-in-button btn">Sign In</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
