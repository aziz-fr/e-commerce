import "./Slider.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import React from "react";
import { useState } from "react";

const imgSrc = [
  "https://images.pexels.com/photos/11491085/pexels-photo-11491085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&w=1000&q=80",
  "https://images.pexels.com/photos/13221667/pexels-photo-13221667.jpeg",
  "https://images.pexels.com/photos/9489161/pexels-photo-9489161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7871161/pexels-photo-7871161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={imgSrc[0]} alt="" />
        <img src={imgSrc[1]} alt="" />
        <img src={imgSrc[2]} alt="" />
        <img src={imgSrc[3]} alt="" />
        <img src={imgSrc[4]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftIcon
            sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: "40px" }}
          />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightIcon
            sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
