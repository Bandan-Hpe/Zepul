import React, { Fragment } from "react";
import TopScroller from "../Components/TopScroller";
import Header from "../Shared/Header";
import Router from "../Routes/Router";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <Fragment>
      <TopScroller />
      <Header />
      <Router />
     
      <Footer />
    </Fragment>
  );
};

export default Layout;
