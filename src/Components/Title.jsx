import React from "react";
import Image from "./Image";

function Title() {
  return (
      <div className="text-white lg:mt-48 md:mt-30 sm:mt-20 max-w-2xl">
        <div className="xl:max-w-xl lg:max-w-xl lg:text-left md:text-center md:mt-44 md:mb-10 sm:text-center sm:mb-10 ">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-semibold leading-normal ">
            Visions Unveiled:
            <br />
            <span className="font-light">The Photography Haven</span>
          </h1>
          <br />
          <p className="xl:text-xl lg:text-lg md:text-xl sm:text-md">
            Through the lens of a camera, the world transforms into a symphony
            of captured moments, revealing the beauty that often goes unnoticed.
          </p>

          <div className="mt-10">
            <button className="py-3 px-8 rounded-3xl bg-black mr-4 sm:mb-4 font-medium inline-block  hover:bg-white  hover:text-black">
              Order Now
            </button>
            <button className="py-3 px-8 rounded-3xl bg-navyb font-medium inline-block hover:bg-white  hover:text-black">
              Download App
            </button>
          </div>
        </div>
        
        <Image />
      </div>
      );
}

export default Title;
