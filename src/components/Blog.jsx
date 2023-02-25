import React from 'react'
import Fade from "react-reveal/Fade";

function Blog() {
  return (
    <div className="bg-gradient-to-b from-[#000120] to-[#220056] pt-14   lg:px-28 px-10 pb-10">
      <Fade bottom cascade>
      <h2 className='"pt-8 font-semibold xl:text-4xl lg:text-4xl md:text-4xl text-3xl lg:leading-[2.5rem] 2xl:leading-[3.7rem]"' style={{display: "flex", justifyContent: "center"}}>
        <span className="pb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                Latest from our Blog{" "}
              </span>
              </h2>
        <p className="text-[#696984] pt-3 text-center pb-14">
          Trusted by 5000+ companies worldwide.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
          <div className="lg:pt-0 xl:pt-0">
            <div className='overflow-hidden w-4/5 rounded-2xl'>
              <img
                src="https://zesty-cajeta-af510d.netlify.app/Rectangle-32.svg"
                className="duration-500 hover:scale-125"
              />
            </div>
            <p className="text-white pt-4 pb-7">
              <span className="px-6 py-2 bg-[#342F49] rounded-full font-thin">
                Careers
              </span>
            </p>
            <h3 className="text-white font-semibold">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <p className="pt-4 text-[#696984]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <p className="pt-4 text-[#ccc] text-semibold md:pb-4 pb-4">
              Read more
            </p>
          </div>

          <div>
            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
              <img src="https://zesty-cajeta-af510d.netlify.app/4.svg"  />
              <div className="lg:pl-5 pt-4">
                <h4 className="text-white font-semibold">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h4>
                <p className="text-[#696984] pt-3">
                  Class Technologies Inc., the company that created Class,...
                </p>
              </div>
            </div>

            <div className="lg:flex pt-4 md:flex-col md:items-center xl:flex-row">
              <img src="https://zesty-cajeta-af510d.netlify.app/5.svg" />
              <div className="lg:pl-5 pt-4">
                <h4 className="text-white font-semibold">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h4>
                <p className="text-[#696984] pt-3">
                  Zoom was never created to be a consumer product. Nonetheless,
                  the...
                </p>
              </div>
            </div>

            <div className="lg:flex pt-4 md:flex-col md:items-center xl:flex-row">
              <img src="https://zesty-cajeta-af510d.netlify.app/6.svg" />
              <div className="lg:pl-5 pt-4">
                <h4 className="text-white font-semibold">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h4>
                <p className="text-[#696984] pt-3">
                  This year, investors have reaped big financial returns from
                  betting on Zoom...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Blog