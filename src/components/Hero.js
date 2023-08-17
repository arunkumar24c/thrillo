import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineHome, AiFillCar, AiOutlineSearch } from "react-icons/ai";
import { IoIosWalk } from "react-icons/io";
import { GiEarthAsiaOceania, GiParachute } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { FaHandHoldingUsd } from "react-icons/fa";
import Card from "./ImgExperience";

const Hero = () => {
  return (
    <div className="app">
      <div className="h-[100vh]  text-white flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center">It's time for new</h1>
        <span className="text-center pt-3 text-5xl">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Experience",
              1000,
              "Thrill",
              1000,
              "Adventures",
              1000,
              "Escapes",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
        {/* <div className="hidden xl:block ">
          <div className="mt-5 flex  gap-1">
            <p className="flex items-center gap-1 border-2 border-[gray] bg-[#3e3e3f] py-1 px-3 sm:py-2 sm:px-4">
              <GiEarthAsiaOceania />
              All
            </p>
            <p className="flex items-center gap-1 border-2 border-[gray] bg-[#3e3e3f] py-1 px-3 sm:py-2 sm:px-4">
              <TbTargetArrow />
              Activities
            </p>
            <p className="flex items-center gap-1 border-2 border-[gray] bg-[#3e3e3f] py-1 px-3 sm:py-2 sm:px-4">
              <IoIosWalk />
              Tours
            </p>
            <p className="flex items-center gap-1 border-2 border-[gray] bg-[#3e3e3f] py-1 px-3 sm:py-2 sm:px-4">
              <AiFillCar />
              Rentals
            </p>
            <p className="flex items-center gap-1 border-2 border-[gray] bg-[#3e3e3f] py-1 px-3 sm:py-2 sm:px-4">
              <AiOutlineHome />
              Staycations
            </p>
          </div>
        </div> */}
        <div className="mt-3 sm:mt-0 sm:ml-3.5">
          <div className="relative rounded-lg shadow-md bg-white">
            <input
              type="text"
              placeholder="Search Destination, tours, Activities...."
              className="pl-2 py-1.5 sm:py-2 rounded-l-lg focus:outline-none w-full sm:w-[20rem] xl:w-[45rem] lg:w-[40rem] md:w-[37rem]"
            />
            <span className="absolute top-0 right-0 text-[gray] p-2">
              <AiOutlineSearch size={25} />
            </span>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className=" p-3 flex gap-[10rem] items-center justify-center">
        <div className="flex xl:gap-[7rem] md:gap-[1rem] lg:gap-[7rem] sm:gap-[1rem] flex-wrap text-white">
          <div className="flex items-center justify-center">
            <GiParachute size={35} />
            <div className="ml-2">
              <p className="text-sm sm:text-base">24000+</p>
              <p className="text-xs sm:text-sm">TRAVEL EXPERIENCES</p>
            </div>
          </div>
          <div className="flex items-center">
            <GiEarthAsiaOceania size={35} />
            <div className="ml-2">
              <p className="text-sm sm:text-base">55+</p>
              <p className="text-xs sm:text-sm">COUNTRIES</p>
            </div>
          </div>
        </div>
        <div className=" p-3 flex xl:gap-[7rem] md:gap-[1rem] lg:gap-[7rem] sm:gap-[1rem] flex-wrap text-white">
          <div className="flex items-center">
            <FaHandHoldingUsd size={35} />
            <div className="ml-2">
              <p className="text-sm sm:text-base">Best Price</p>
              <p className="text-xs sm:text-sm">GUARANTEED</p>
            </div>
          </div>

          <div className="flex items-center">
            <GoPerson size={35} />
            <div className="ml-2">
              <p className="text-sm sm:text-base">84 Million+</p>
              <p className="text-xs sm:text-sm">USERS PER YEAR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
