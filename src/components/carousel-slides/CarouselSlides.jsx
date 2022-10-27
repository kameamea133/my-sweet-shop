import React from "react";
import "./CarouselSlides.css";
import { colors } from "../../helper/theme";

export default function CarouselSlides(props) {
  return (
    <div className="carousel_slides_container">
      <div
        className="carousel_slides_circle"
        style={{ backgroundColor: colors.primary }}
      ></div>
      <img
        className={props.className}
        src={props.slideArray[props.slideIndex]}
      />
    </div>
  );
}
