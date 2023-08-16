import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assest/Ladakh-becb0cc971e6deb15208c9a7ea834975157ae8b76bf4cbd0cea5607b42475777.jpg.png";
import img1 from "../../assest/Kerela-1fb12fb4e5a9a352d688e6c8165503b98b869db90bd1fba0cc81c4d557c112d4.jpg.png";
import img2 from "../../assest/NorthEast-aef0067fc06d446939ca302c20de0bcc969a29929db335f3d99ca2038465b146.jpg.png";
import img3 from "../../assest/Himachal-0405933ddd98696eb51761ff0d03748dbb324d76e7737f4b16ce2042ecebdc4a.jpg.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data = [
  {
    name: "LADAKH",
    image: img,
  },
  {
    name: "KERALA",
    image: img1,
  },
  {
    name: "HIMACHAL PRADESH",
    image: img2,
  },
  {
    name: "NORTH EAST",
    image: img3,
  },
  {
    name: "UTTARAKHAND",
    image: img3,
  },
];

const Popular = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto text-center mt-10">
      <div className="flex flex-col justify-center items-center mb-4 overflow-x-auto">
        <h1 className="text-black font-bold text-2xl pb-3">
          Best of India
        </h1>
        <a className="border-2 border-b-[red] border-[white] w-11"></a>
      </div>
      <Slider ref={slider} {...settings}>
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Slider>

      <ArrowNext
        Handler={() => {
          slider?.current?.slickNext();
        }}
      />
      <ArrowPrev
        Handler={() => {
          slider?.current?.slickPrev();
        }}
      />
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div className="relative container mx-auto text-center xl:ml-11 overflow-x-auto">
      <img src={props.image} alt="" className="w-[222px] h-[301px]" />
      <div className="absolute bottom-2 left-[5rem] space-y-2 text-center">
        <p className="text-white font-bold">{props.name}</p>
      </div>
    </div>
  );
};


const ArrowNext = (props) => {
  return (
    <div
      onClick={props.Handler}
      className="cursor-pointer absolute inset-y-1/2 xl:bg-white right-4 w-14 h-14  rounded-full flex justify-center items-center "
    >
      <AiOutlineArrowRight className="hidden xl:block " />
    </div>
  );
};

const ArrowPrev = (props) => {
  return (
    <div
      onClick={props.Handler}
      className="cursor-pointer w-14 h-14 absolute inset-1/2 xl:bg-white left-4 rounded-full flex justify-center items-center  "
    >
      <AiOutlineArrowLeft className="hidden xl:block " />
    </div>
  );
};


export default Popular;
