import React from "react";
import img from "../assest/group_tour_enqiry.png.png";

const Cards = () => {
  return (
    // <div className="flex items-center justify-center">
    //   <div className=" flex  items-center gap-3 border-2 border-[orange] px-4 py-2 rounded-xl shadow-orange-500 ">
    //     <img src={img} className="w-[100px] h-[100px]" />
    //     <div className=" flex flex-row xl:flex-row lg:flex-row items-start xl:gap-[20rem] md:flex-col md:gap-0 sm:flex-col sm:gap-0">
    //       <div className="flex flex-col  gap-3">
    //         <h1 className="text-2xl sm:text-xl font-bold text-orange-400">
    //           Bigger Group? Get special offers upto 50% off!
    //         </h1>
    //         <p className="text-[#696969] text-base font-semibold">
    //           We create unforgettable adventures, customised for your group.
    //         </p>
    //       </div>
    //       <div className="">
    //         <button className=" px-10 py-3 rounded-md bg-orange-500">
    //           Get a Callback
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" container mx-auto flex flex-col sm:flex-col md:flex-col xl:flex-row lg:flex-row  border-2 border-[orange] xl:justify-around xl:w-[1080px] xl:h-[112px]">
      <div className="flex gap-2 p-1 ">
        <img src={img} className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] xl:w-[90px] xl:h-[90px]" />
        <div className="md:mt-3">
          <h1 className="text-2xl sm:text-xl font-bold text-orange-400">
            Bigger Group? Get special offers upto 50% off!
          </h1>{" "}
          <p className="text-[#696969] text-base font-semibold">
            We create unforgettable adventures, customised for your group.
          </p>
        </div>
      </div>
      <button className="xl:w-[13rem] font-bold text-white xl:h-[3rem] sm:w-full h-[2.5rem] lg::w-[13rem] lg:h-[3rem] md:w-[13rem] md:h-[3rem] md:ml-[8rem] md:mb-2 rounded-md xl:mt-5 lg:mt-5 bg-orange-500 sm:mb-2 ">
        Get a Callback
      </button>
    </div>
  );
};

export default Cards;
