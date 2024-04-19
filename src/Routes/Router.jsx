import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loader from "../Components/Loader";
const Home = lazy(() => import("../Pages/Home"));
const Companies = lazy(() => import("../Pages/Companies"));
const Recruitement = lazy(() => import("../Pages/Recruitement"));
const JobsSeeker = lazy(() => import("../Pages/JobsSeeker"));

const Router = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/recruitment" element={<Recruitement />} />
          <Route path="/jobseeker" element={<JobsSeeker />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default Router;
