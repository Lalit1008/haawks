import React from "react";
import { Fade } from "react-reveal";
const Ctatext = () => {
  return (
    <div>
      <div className="bg-[#000120]">
        <Fade bottom cascade>
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">
                Make the decentralized web a reality for everyone.
              </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <a
                  className="mt-8 mx-8 px-12 py-3 bg-gradient-to-r from-[#F72585] to-[#34136e] hover:from-[#34136e] hover:to-[#F72585] text-xl text-white font-semibold drop-shadow-lg rounded-full"
                  href="#"
                >
                  Connect Now
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Ctatext;
