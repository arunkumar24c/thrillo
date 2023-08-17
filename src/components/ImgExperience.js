import React from "react";
import img from "../assest/Link_margin.png";
import img1 from "../assest/escapes.png";
import img2 from "../assest/Link.png";

const ImgExperience = () => {
  return (
    <div className=" flex  flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col  items-center justify-center my-5 overflow-scroll">
      {/* left container  */}
      <div>
        <h1 className="font-bold text-2xl pb-5">
          Find The Perfect
          <br /> Escape
        </h1>
        <hr className="border-[red] w-[4.5rem] pb-2" />
        <p className="text-[#494949]">Discover your ideal Experience</p>
      </div>
      {/* right container  */}
      <div class="">
        <div class="flex h-80 gap-4   overflow-x-scroll">
          <img src={img} class="" alt="Image 1" />

          <img src={img1} class="" alt="Image 2" />

          <img src={img2} class="" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default ImgExperience;
