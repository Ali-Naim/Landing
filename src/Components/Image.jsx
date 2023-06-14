import React from "react";

function Image() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/images/camera.png"
        alt=""
        className="absolute
                    2xl:bottom-72 2xl:right-32 2xl:h-imgxl 2xl:w-imgxl 
                    xl:bottom-72 xl:right-25 xl:h-imgxl xl:w-imgxl 
                    lg:bottom-96 lg:-right-32 lg:h-imgmd lg:w-imgmd 
                    md:bottom-0 md:h-imgmd md:w-imgmd 
                    sm:bottom-0 sm:w-imgmd sm:h-imgmd"
      />
    </div>
  );
}

export default Image;
