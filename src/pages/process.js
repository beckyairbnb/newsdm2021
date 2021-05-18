import React from "react";

import PageWrapper from "../components/PageWrapper";

const Process = () => {
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
                  <h2 className="font-size-11 text-dark-cloud font-weight-bold text-center mb-lg-15 mb-0">
                    Our process
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">

                  <div className="article-block mt-11 mt-lg-15">
                    <h5 className="font-size-7 text-dark-cloud mb-6">1. Submit your titles</h5>
                    <p className="font-size-5 text-dark-cloud mb-9">
                    It’s really easy to order your monthly titles. All you’ll need to do is submit your content titles, choose the content length, provide an article brief and confirm your order. Your dedicated account manager will take over from here.
                    </p>
                    <h5 className="font-size-7 text-dark-cloud mb-6">2. Content creation</h5>
                    <p className="font-size-5 text-dark-cloud mb-9">
Our UK and US-based writers will prepare your articles designed to complement your editorial efforts and provide a baseline of SEO-centric content that lets you own the categories you want.
                  </p>
                    <h5 className="font-size-7 text-dark-cloud mb-6">3. Editorial stage </h5>
                    <p className="font-size-5 text-dark-cloud mb-9">
                  We ensure all content is grammatically correct and aligns with your article brief in our editorial stage. All content is quality assured by a UK or US-based editor and Grammarly. We also run a plagiarism check to ensure all content is 100% original.
                    </p>
                    <h5 className="font-size-7 text-dark-cloud mb-6">4. Workflow & delivery</h5>
                    <p className="font-size-5 mb-9 text-dark-cloud">
                    Whether you've requested short, snackable slideshows or in-depth content, we integrate it into your workflow and make it as simple as "copy and paste".
  </p>

                  <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-buttercup btn-2 rounded-5" href="/pricing">
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default Process;
