import React, { Fragment } from "react";
import TopScroller from "../Components/TopScroller";
import Header from "../Shared/Header";
import Router from "../Routes/Router";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <Fragment>
      <div className="container p-0">
      <TopScroller />
      <Header />
      <Router />

      <Footer />
      </div>
    
    </Fragment>
  );
};

export default Layout;
