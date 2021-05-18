import React from "react";

import PageWrapper from "../components/PageWrapper";
import Company from "../sections/home1/Compnay";
import Testimonial from "../sections/home2/Testimonial";



const Customer = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn-buttercup btn-sm rounded-5" href={"/pricing"}>
              Work with us
            </a>

            </>
          ),
          footerStyle: "style4",
        }}
      >
      <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              {/* job-details-content */}
              <div className="text-center pb-0">
                {/* job-top-header */}
                <div className="mb-7 d-inline-flex align-items-center flex-wrap">

                </div>

        <Testimonial className="bg-default-1 pt-lg-19 pb-12 pb-lg-17" />
        <Company className="pt-12 pb-9" />
        </div>
      </div>
    </div>
  </div>
</main>
      </PageWrapper>
    </>
  );
};
export default Customer;
