import React from "react";
import img from "../assest/Gloab.png";
import img1 from "../assest/Ain_dubai.png";
import img2 from "../assest/Singapore.png";
import img3 from "../assest/Amsterdam.png";
import img4 from "../assest/Thailand.png";
import img5 from "../assest/italy.png";
import img6 from "../assest/Abu-Dhabi.png";
import img7 from "../assest/Australia.png";
import img8 from "../assest/Paris.png";
import img9 from "../assest/Malaysia.png";
import img10 from "../assest/USA.png";

const Gridcontainer = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center py-10 sm:py-[5rem] gap-5">
      {/* left container */}
      <div className="flex flex-col gap-4">
        <div
          className="bg-no-repeat bg-cover xl:w-583px lg:w-483px md:w-full sm:w-full h-[223px] text-white rounded-xl p-11"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="text-white pb-1 font-bold text-xl">
            Find Best Things to Do
          </h2>
          <h4 className="text-white pb-1 font-normal text-lg">Accross Globe</h4>
          <button className="py-2 text-black font-bold rounded-xl bg-[#e6e61b] px-4">
            Book Now
          </button>
        </div>
        <div
          className="bg-no-repeat bg-cover w-full h-[345px] rounded-xl"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <p className="flex justify-center items-center text-white font-bold text-xl h-full">
            Dubai
          </p>
        </div>
      </div>
      {/* right container */}
      <div className="grid grid-cols-3  sm:grid-cols-3 gap-2 overflow-x-auto">
        {/* 1st */}
        <div
          className="w-full sm:w-[146px] h-[223px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <p className="text-white font-bold text-base sm:text-lg">Singapore</p>
        </div>

        {/* 2nd */}
        <div
          className="w-full sm:w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <p className="text-white font-bold text-base sm:text-lg">Amsterdom</p>
        </div>

        {/* 3rd */}
        <div
          className="w-[146px] h-[223px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <p className="text-white font-bold text-lg">Thailand</p>
        </div>
        {/* 4th */}
        <div
          className="w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img5})` }}
        >
          <p className="text-white font-bold text-lg">Italy</p>
        </div>
        {/* 5th */}
        <div
          className="w-[146px] -mt-[60px] pt-2 bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <p className="text-white font-bold text-lg">Abu Dhabi</p>
        </div>
        {/* 6th */}
        <div
          className="w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img7})` }}
        >
          <p className="text-white font-bold text-lg">Australia</p>
        </div>
        {/* 7th */}
        <div
          className="w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img8})` }}
        >
          <p className="text-white font-bold text-lg">Paris</p>
        </div>
        {/* 8th */}
        <div
          className="w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img9})` }}
        >
          <p className="text-white font-bold text-lg">Malaysia</p>
        </div>
        {/* 9th */}
        <div
          className="w-[146px] h-[163px] bg-no-repeat bg-cover rounded-xl flex justify-center items-center"
          style={{ backgroundImage: `url(${img10})` }}
        >
          <p className="text-white font-bold text-lg">USA</p>
        </div>
      </div>
    </div>
  );
};

export default Gridcontainer;
