import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assest/Thailand-c233d380c78411959ef6992e4ecc205705128339a0c7946af053559de75447f7.jpg.png";
import img1 from "../assest/Singapore-31c6e6f733ae0b41778758679f73e145aef982a3e8b8b968886e1abe804b0735.jpg.png";
import img2 from "../assest/Bali-018e38260057e1baa12520852d2edf4a2e74821879109269cb9b653fdff43e92.jpg.png";
import img3 from "../assest/Vietnam-5cad282399f479a54dd8a92b63b97241bb4e49170f496c1cb502baee308c367f.jpg.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data = [
  {
    name: "THAILAND",
    image: img,
  },
  {
    name: "SINGAPORE",
    image: img1,
  },
  {
    name: "BALI",
    image: img2,
  },
  {
    name: "VIETNAM",
    image: img3,
  },
  {
    name: "MALAYSIA",
    image: img3,
  },
];

const PopularDestinations = () => {
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
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-black font-bold text-2xl pb-3">Island Escapes</h1>
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
    <div className="relative container mx-auto text-center xl:ml-11">
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
      className="cursor-pointer absolute inset-y-1/2 xl:bg-white right-4 w-14 h-14 bg-brnd-dark-blue rounded-full flex justify-center items-center "
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


export default PopularDestinations;
