import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assest/Maldives-940e95d8a51bbdf0eae0b47a96372d576014acad961e27f1c1ea5204a52f43c1.jpg.png";
import img1 from "../../assest/Andaman-3f95e79f645565ba86508f113e8b9af008d5284d205e37f6b53ac2628c5bff2f.jpg.png";
import img2 from "../../assest/Seychelles-cb4da5bf176ecc0eafb0636c5c24d6c64071cd7b433ee7854cbf9acf8d1db464.jpg.png";
import img3 from "../../assest/Mauritius-e9c8c4761cad8bf21f4a848e253932fdcabbe77e1e04237df417c6ac3baa77f8.jpg.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const data = [
  {
    name: "MALDIVES",
    image: img,
  },
  {
    name: "ANDAMAN",
    image: img1,
  },
  {
    name: "SEYCHELLES",
    image: img2,
  },
  {
    name: "MAURITIUS",
    image: img3,
  },
  {
    name: "PHILIPPINES",
    image: img3,
  },
];

const Popular2 = () => {
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
    <div>
      <div className="relative container mx-auto text-center hidden xl:block lg:block mt-10">
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-black font-bold text-2xl pb-3">Best of Europe</h1>
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
      <div className=" flex  flex-col items-center justify-center my-5 xl:hidden lg:hidden overflow-scroll">
        {/* left container  */}
        <div>
          <h1 className="text-black font-bold text-2xl pb-3">Best of Europe</h1>
          <a className="border-2 border-b-[red] border-[white] w-11"></a>
        </div>
        {/* right container  */}
        <div class="">
          <div class="flex h-80 gap-4   overflow-x-scroll hide-scrollbar">
            <img src={img} class="" alt="Image 1" />

            <img src={img1} class="" alt="Image 2" />

            <img src={img2} class="" alt="Image 3" />
            <img src={img3} class="" alt="Image 3" />
          </div>
        </div>
      </div>
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



export default Popular2;
