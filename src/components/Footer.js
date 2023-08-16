import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiMail, FiTwitter } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiTwotonePhone, AiOutlineLink, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const FaqContent = [
    {
      title: "Themed Destination",
      htmltag: "yes",
      content: `<div class=""> 
    <div className="">
    
    <a class=">International Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">International Honeymoon Packages</a>
      <a class="">•</a>
      <a class="">International Family Packages</a>
      <a class="">•</a>
      <a class="">International Beach Packages</a>
      <a class="">•</a>
      <a class="">Adventure Packages</a>
      <a class="">•</a>
      <a class="">Summer Holiday Packages</a>
      <a class="">•</a>
      <a class="">International Visa on arrival Packages</a>
      <a class="">•</a>
      <a class="">International Budget Packages</a>
      <a class="">•</a>
      <a class="">International Luxury Packages</a>
      <a class="">•</a>
      </div></div>`,
    },
    {
      title: "Holiday Destination",
      htmltag: "yes",
      content: ` <div class="mt-2">
      <div class="">
      <a href="" class="">Australia Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Europe Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Dubai Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">New Zealand Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Singapore Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Thailand Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Bali Packages</a>
      <a class="">•</a>
      <a href="" class="">Maldives Packages</a>
      <a class="">•</a>
      <a href="" class="">Seychelles Packages</a>
      <a class="">•</a>
      <a href="" class="">Malaysia Packages</a>
      <a class="">•</a>
      <a href="" class="">South Africa Packages</a>
      <a class="">•</a>
      <a href="" class="">Cambodia Packages</a>
      <a class="">•</a>
      <a href="" class="">USA Packages</a>
      <a class="">•</a>
      <a href="" class="">Sri Lanka Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Bangkok Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Phuket Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Krabi Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Pattaya Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Koh Samui Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Chiang Mai Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Phi Phi Island Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Koh Phangan Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Koh Tao Packages</a>
      <a class="">•</a>
      <a href="" class="">Koh Chang Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Vietnam Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Thailand Solo Travel Packages</a>
      <a class="">•</a>
      <a href="" class="">Bali Solo Travel Packages</a>
      <a class="">•</a>
      <a href="" class="">Bali Photoshoot Packages</a>
      <a class="">•</a>
      <a href="" class="">Bali Private Pool Villa Packages</a>
      <a class="">•</a>
      <a href="" class="">Japan Tour Packages</a>
      </div>
      </div>`,
    },
    {
      title: "Europe Specials",
      htmltag: "yes",
      content: ` <div class="mt-2">
      <div class="">
      <a href="" class="">France Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Italy Tour Packages</a><a class="">•</a>
      <a href="" class="">Austria Tour Packages</a><a class="">•</a>
      <a href="" class="">Switzerland Packages</a>
      <a class="">•</a>
      <a href="" class="">Germany Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Greece Packages</a>
      <a class="">•</a>
      <a href="" class="">Spain Packages</a>
      <a class="">•</a>
      <a href="" class="">UK Packages</a>
      <a class="">•</a>
      <a href="" class="">Europe Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Turkey Packages</a>
      <a class="">•</a>
      <a href="" class="">London Packages</a>
      <a class="">•</a><a href="" class="">Croatia Packages</a>
      <a class="">•</a>
      <a href="" class="">Amsterdam Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Iceland Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Paris Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Czech Republic Tour Packages</a><a class="">•</a>
      <a href="" class="">Paris Switzerland Italy Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Norway Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Finland Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Denmark Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Eastern Europe Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Central Europe Tour Packages</a><a class="">•</a>
      <a href="" class="">Prague Vienna Budapest Tour Packages</a><a class="">•</a>
      <a href="" class="">Portugal Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Scandinavia Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Italy Greece Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Istanbul Tour Packages</a>
      <a class="">•</a>
      <a href="" class="">Santorini Tour Packages</a></div>
      
      </div>`,
    },
    {
      title: "Honeymoon Packages",
      htmltag: "yes",
      content: ` <div class="mt-2">
      <div class="">
      <a href="" class=">Maldives Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Dubai Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Mauritius Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Switzerland Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Greece Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Turkey Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Sri Lanka Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Bali Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Italy Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Spain Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Seychelles Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Thailand Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Singapore Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">France Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Paris Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Iceland Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Vietnam Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Phuket Honeymoon Packages</a>
      <a class="">•</a>
      <a href="" class="">Bangkok Honeymoon Packages</a></div>
      </div>`,
    },
    {
      title: "packages from departure",
      htmltag: "yes",
      content: ` <div class="mt-2">
      <div class="">
      <a href="" class="">International Tour Packages from Bangalore</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Kolkata</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Chennai</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Ahmedabad</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Kochi</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Delhi</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Hyderabad</a>
      <a class="">•</a>
      <a href="" class="">International Tour Packages from Surat</a>
      <a class="">•</a>
      <a href="" class="">International tour packages from Mumbai</a>
      </div>
      </div>`,
    },
  ];

  return (
    <div>
      <div className="Container mx-auto pl-2 bg-black mb-4">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-5 my-5 w-full pt-5 ">
          <div className="flex gap-y-2 flex-col w-full">
            {FaqContent.map((list) => (
              <FaqElement title={list.title} content={list.content} />
            ))}
          </div>
        </div>

        <div className="text-white justify-center items-center flex flex-col md:flex-row sm:flex-col xl:flex-row lg:flex-row xl:justify-around lg:justify-around md:items-baseline lg:items-baseline xl:items-baseline mb-5 sm:justify-center sm:items-center md:justify-between mt-5 container mx-auto">
          <div className="text-white sm:text-center">
            <h2 className="text-[#696969]">Pickyourtrail</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Testimonials</p>
            <p>Visa</p>
            <p>Press</p>
          </div>
          <div className="text-white sm:text-center">
            <h2 className="text-[#696969]">Policy</h2>
            <p>Frequently asked Question</p>
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Cancellations</p>
            <p>Sitemap</p>
            <p>Contact Us</p>
          </div>
          <div className="text-white sm:text-center">
            <h2 className="text-[#696969]">Talk to Us</h2>
            <p className="flex gap-2 pt-2">
              <span>
                <FiMail />
              </span>{" "}
              Planners@pickyourtrail.com
            </p>
            <p className="flex gap-2 pt-2">
              <span>
                <FaWhatsapp />
              </span>
              +919360991166
            </p>
            <p className="flex gap-2 pt-2">
              <span>
                <AiTwotonePhone />
              </span>
              +917806805380
            </p>
          </div>
          <div className="text-white text-center">
            <h2 className="text-[#696969] text-center">Social</h2>
            <div className="flex flex-col justify-center items-center">
              <p className="flex gap-2 pt-2 sm:text-center justify-center items-center">
                <span>
                  <FaFacebookF />
                </span>
                Facebook
              </p>
              <p className="flex gap-2 pt-2 ">
                <span>
                  <FiTwitter />
                </span>
                Twitter
              </p>
              <p className="flex gap-2 pt-2 ">
                <span>
                  <FaInstagram />
                </span>
                Instagram
              </p>
              <p className="flex gap-2 pt-2 ">
                <span>
                  <AiFillYoutube />
                </span>
                Linkedin
              </p>
              <p className="flex gap-2 pt-2 ">
                <span>
                  <AiOutlineLink />
                </span>
                Youtube
              </p>
              <p className="pb-2 pt-2">
                Travel Troops Global Private Ltd. © 2023
              </p>
              <p className="pb-6 ">all rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
const FaqElement = (props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="flex flex-col gap-y-2 overflow-hidden w-full px-2 cursor-pointer z-0 container mx-auto"
      >
        <div className="flex justify-between gap-x-5 w-full bg-brnd-white z-50 py-2">
          <p className="font-bold text-xl text-[#494949] cursor-pointer">
            {props.title}
          </p>
          <div className="cursor-pointer text-white xl:hidden">
            {show ? <FaqLess /> : <FaqMore />}
          </div>
        </div>

        <p
          className={
            show
              ? "md:duration-300 md:transition-all text-md text-[white] after:w-full after:h-[1px]"
              : "text-sm opacity-0 h-0"
          }
        >
          <div>
            {props.htmltag === "no" ? (
              <p>{props.content}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
            )}
          </div>
        </p>

        <div className="border-[0.5px] border-brnd-dark-blue/20" />
      </div>
    </>
  );
};
const FaqMore = () => {
  return (
    <>
      <IoIosArrowDown />
    </>
  );
};
const FaqLess = () => {
  return (
    <>
      <IoIosArrowUp />
    </>
  );
};
