import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMGMain from "../assets/images/sliderMainImg.jpg";
import IMGSecondary from "../assets/images/sliderSecondaryImg.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function MainSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 4000,
    initialSlide: 0,
    autoplaySpeed: 1500,
  };

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-screen">
        <Slider ref={sliderRef} {...settings}>
          <div className="relative">
            <img
              className="h-[285px] relative w-full md:h-[700px] xl:h-[890px]"
              src={IMGSecondary}
              alt="main slider vr"
            ></img>
          </div>
          <div>
            <img
              className="h-[285px] relative w-full md:h-[700px] xl:h-[890px]"
              src={IMGMain}
              alt="main slider vr"
            ></img>
          </div>
        </Slider>
        <div
          className="hidden text-[3rem] text-fifth-color hover:text-sixth-color	 cursor-pointer  absolute top-1/2 left-5 md:flex"
          onClick={() => {
            if (null !== sliderRef.current) {
              sliderRef.current.slickPrev();
            }
          }}
        >
          <IoIosArrowBack />
        </div>

        <div
          className="hidden text-[3rem] hover:text-sixth-color	 text-fifth-color	 cursor-pointer  absolute top-1/2 right-5 md:flex"
          onClick={() => {
            if (null !== sliderRef.current) {
              sliderRef.current.slickNext();
            }
          }}
        >
          <IoIosArrowForward className="" />
        </div>
      </div>
    </div>
  );
}
