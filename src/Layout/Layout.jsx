import React, { Fragment } from "react";
import TopScroller from "../Components/TopScroller";
import Header from "../Shared/Header";
import HeroSection from "../Components/HeroSection";
import PartnerCarousel from "../Components/PartnerCarousel";
import Home from "../Pages/Home";
import Router from "../Routes/Router";

const Layout = () => {
  return (
    <Fragment>
      <TopScroller />
      <Header />
      <HeroSection />
      <PartnerCarousel />
      <Router />
    </Fragment>
  );
};

export default Layout;
