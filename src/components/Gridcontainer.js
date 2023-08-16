import React from "react";
import img from "../assest/Gloab@1x-25e3d4da3a44941d140010e538c894082554c455c0e9ef83bb0166d4d60f0aac.jpg.png";
import img1 from "../assest/Ain_dubai@1x-be1952107f8af5270427d160363e176c19b31d73020858b39e22d2ec74b2054e.jpg.png";
import img2 from "../assest/Singapore@1x-5c7a71b37c82b2edd651151fc7baf9985f0cc8828b4a88a36998d989358ae821.jpg.png";
import img3 from "../assest/Amsterdam@1x-d6a7af0d4298d69bc3c0d4eb2557bb0bcd939317a34e7ae92901b9a1ad032ccb.jpg.png";
import img4 from "../assest/Thailand@1x-e200510a1f43dc441021443541bdf31af819ed929846a1955c4ac35a9ff8eb05.jpg.png";
import img5 from "../assest/italy@1x-6615e8c2710dce20002b6c004ad8371a2791d2f79cede47e7da253d163c13b38.jpg.png";
import img6 from "../assest/Abu-Dhabi@1x-ded44a24dbded1eeebe7b218a05fd2eb009cff485ad248455f8e84f6d3da1751.jpg.png";
import img7 from "../assest/Australia@1x-f30a12e1aa1a1db16a88b7e50eb8ada3b676ab0435975dcb07f532df48ae18e5.jpg.png";
import img8 from "../assest/Paris@1x-47608d438abe76e74561817f710856ae4b4cbd690e1f647675bd3cad0dfe6406.jpg.png";
import img9 from "../assest/Malaysia@1x-d477d8d953b6ed0e48c22c95a4c8a41a93a122c93be0cf2943df660453065867.jpg.png";
import img10 from "../assest/USA@1x-b2f0555c498dc633cb784815d6be496a13f14207491a10ec0289450d6f158084.jpg.png";

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
      <div className="grid grid-cols-3  sm:grid-cols-3 gap-4">
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
