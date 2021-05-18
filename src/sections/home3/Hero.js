import React from "react";

import DashBoardImage from "../../assets/image/home-3/png/desktop-dashboard.png";
import YellowShape from "../../assets/image/home-3/png/yellow-shape.png";
import GreenShape from "../../assets/image/home-3/png/green-shape.png";

const Hero = ({className,...rest}) => {
    return (
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-xl-8 col-lg-7 col-md-9">
              <div
                className="text-left mb-11 mb-lg-24"

              >
                <h1 className="font-size-11 text-white mb-7">
                We create quality content for businesses.
                </h1>
                <p className="font-size-7 px-lg-5 mb-0">
                Get blog posts, articles, landing page copy & more from top quality UK writers - whenever you need it.</p>
              <div className="btn-group d-inline-block mt-10">
                  <a className="btn btn-buttercup btn-2 rounded-5" href={"/pricing"}>
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Hero;
