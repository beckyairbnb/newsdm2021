import React from "react";

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";
import imgS from "../../assets/image/home-2/png/search.png";
import imgE from "../../assets/image/home-2/png/event-confirm.png";
import imgR from "../../assets/image/home-2/png/right-layer.png";

const Progress = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-11">
                  {/* job-details-content */}
                  <div className="text-center pb-0">
                    {/* job-top-header */}
                    <div className="mb-7 d-inline-flex align-items-center flex-wrap">

                    </div>
                    <h2 className="font-size-11 font-weight-bold text-dark-cloud text-center mb-lg-15 mb-0">
                      Why Strategically
                    </h2>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                  {/* terms-contents  */}
                  <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">

                    <div className="article-block mt-11 mt-lg-15">
  <p className="font-size-5 text-dark-cloud heading-default-color mb-9">Great content is the heart and soul of any website but planning for and creating great content isn’t easy. That’s where we come in.</p>
  <p className="font-size-5 text-dark-cloud heading-default-color mb-9">We provide website content that supports your business goals as well as giving your users what they need. (We make sure to keep the robots happy, too.)</p>
<p className="font-size-5 text-dark-cloud heading-default-color mb-9">Building it does not always mean they will come (and engage, and buy, and share). The right content can:</p>
<p className="font-size-5 text-dark-cloud heading-default-color mb-9">

<ul className="p-0 m-0 list-disc">
                    <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                      <span className="circle-9 mr-3 mt-4 bg-black" />
                     tap into your target audience’s interests, desires and emotions
                    </li>
                    <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                      <span className="circle-9 mr-3 mt-4 bg-black" />
                      attract and engage new visitors and high-quality leads
                    </li>
                    <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                      <span className="circle-9 mr-3 mt-4 bg-black" />
                      create brand advocates who talk about and share your content and brand assets on social media
                    </li>
                  </ul>


                <p className="font-size-5 text-dark-cloud heading-default-color mb-9">  We create content that’s engineered to resonate with your target audience. Our content team manages the entire production process, providing ongoing strategic guidance while sourcing top talent and overseeing delivery.</p>
                      </p>
                    <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-buttercup btn-2 rounded-5" href={"/pricing"}>
                      View Pricing
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>
          </main>
          {/* <!-- Section Title --> */}

        </div>
      </div>
    </>
  );
};

export default Progress;
