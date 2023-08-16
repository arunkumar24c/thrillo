import React from "react";
import img from "../assest/airasia.png";
import img1 from "../assest/airbnb.png";
import img2 from "../assest/amazing-thailand.png";
import img3 from "../assest/atta.png";
import img4 from "../assest/decathlon.png";
import img5 from "../assest/expedia.png";
import img6 from "../assest/gopro.png";
import img7 from "../assest/hk-tourism.png";
import img8 from "../assest/homeaway.png";
import img9 from "../assest/isuzu.png";
import img10 from "../assest/jordan.png";
import img11 from "../assest/mahindra.png";
import img12 from "../assest/makemytrip.png";
import img13 from "../assest/mariott.png";
import img14 from "../assest/mastercard.png";
import img15 from "../assest/mp-tourism.png";
import img16 from "../assest/skyscanner.png";
import img17 from "../assest/sterling.png";
import img18 from "../assest/tripadvisor.png";
import img19 from "../assest/tvs.png";
import img20 from "../assest/uber.png";
import img21 from "../assest/visit-sweden.png";
import img22 from "../assest/wildcraft.png";
import img23 from "../assest/zoomcar.png";

const Patner = () => {
  const data = [
    {
      id: 1,
      image: img,
    },
    {
      id: 2,
      image: img1,
    },
    {
      id: 3,
      image: img2,
    },
    {
      id: 4,
      image: img3,
    },
    {
      id: 5,
      image: img4,
    },
    {
      id: 6,
      image: img5,
    },
    {
      id: 7,
      image: img6,
    },
    {
      id: 8,
      image: img7,
    },
    {
      id: 9,
      image: img8,
    },
    {
      id: 10,
      image: img9,
    },
    {
      id: 11,
      image: img10,
    },
    {
      id: 12,
      image: img11,
    },
    {
      id: 13,
      image: img12,
    },
    {
      id: 14,
      image: img13,
    },
    {
      id: 15,
      image: img14,
    },
    {
      id: 16,
      image: img15,
    },
    {
      id: 17,
      image: img16,
    },
    {
      id: 18,
      image: img17,
    },
    {
      id: 19,
      image: img18,
    },
    {
      id: 20,
      image: img19,
    },
    {
      id: 21,
      image: img20,
    },
    {
      id: 22,
      image: img21,
    },
    {
      id: 23,
      image: img22,
    },
    {
      id: 24,
      image: img23,
    },
  ];
  
  return (
    <div className="container mx-auto my-0">
      <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="text-[black] text-xl font-bold pb-2">Our Partners</h1>
        <a className="w-8 border-2 border-[red]"></a>
        <p className="text-[#494949] pt-6">
          We team up with the best to give you an unmatchable experience
        </p>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-3 gap-4 mt-4">
        {data.map((user) => (
          <div key={user.id} className="w-[135px] h-[100px]">
            <img src={user.image} alt="" className="w-[90px] h-[26px] gap-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patner;
