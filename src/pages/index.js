import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Company from "../sections/home1/Compnay";
import Testimonial1 from "../sections/home2/Testimonial1";
import Progress from "../sections/home2/Progress";



const Index = () => {
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
        <Hero className="bg-blue-1 pt-25 pt-lg-29" />
        <Testimonial1 className="bg-default-1 pt-lg-19 pb-12 pb-lg-17" />
        <Company className="pt-12 pb-9" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default Index;
