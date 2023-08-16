import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assest/Europe-6be7b8a3e2532172e32e292bcaabb5d9ad3b49c4e702f9b30632a3a335e771be.jpg.png";
import img1 from "../../assest/Switzerland-54ede59aab13af19ecda81e5c004b28e4d5602eb6d8b7098b62b454de8e0f673.jpg.png";
import img2 from "../../assest/Greece-8f2ba51a8ba482afcd2c1cb783ae1bc3e800ddf6f5350cfef8c417ec72653fc9.jpg.png";
import img3 from "../../assest/Turkey-b38c3545d8399d0b349bdec4ba39b37178996bbb08ff00d133dc2280dda63cfb.jpg.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data = [
  {
    name: "EUROPE",
    image: img,
  },
  {
    name: "SWITZERLAND",
    image: img1,
  },
  {
    name: "GREECE",
    image: img2,
  },
  {
    name: "TURKEY",
    image: img3,
  },
  {
    name: "PARIS",
    image: img3,
  },
];

const Popular1 = () => {
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
        <h1 className="text-black font-bold text-2xl pb-3">
          Best of South East Asia
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


export default Popular1;
