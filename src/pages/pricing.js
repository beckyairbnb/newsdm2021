import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";

const PricingPage = () => {
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
        <Hero />
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
