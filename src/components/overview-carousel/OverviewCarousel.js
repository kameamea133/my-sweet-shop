import React from "react";
import "./OverviewCarousel.css";
import { colors } from "../../helper/theme";
import ArrowButton from "../arrow-button/ArrowButton";
import VerticalCarouselNumber from "../vertical-carousel-number/VerticalCarouselNumber";
import CarouselSlides from "../carousel-slides/CarouselSlides";

export default function OverviewCarousel({ imagesArray, interval = 2000 }) {
  const [slideNumber, setSlideNumber] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setSlideNumber((prevState) => {
          if (prevState < imagesArray.length - 1) {
            return prevState + 1;
          } else {
            return 0;
          }
        }),
      interval
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "#5acaf0" }}>
      <div className="container__flex">
        <VerticalCarouselNumber
          slideArray={imagesArray}
          slideIndex={slideNumber}
        />
        <div>
          <p style={{ color: colors.third }}>organic products</p>
          <h1 style={{ color: colors.white }}>
            Your <span style={{ color: colors.third }}>Sweets</span>
          </h1>
          <div className="line" style={{ backgroundColor: colors.third }}></div>
          <h2 style={{ color: colors.white }}>donuts, ice cream,</h2>
          <h3 style={{ color: colors.white }}>
            <span style={{ color: colors.third }}>macaroons, </span> cheskey
          </h3>
          <ArrowButton text="our production" className="button" />

          {/* <img src={imagesArray[slideNumber]} alt="img" /> */}
        </div>
        <CarouselSlides
          className="carousel__image"
          slideArray={imagesArray}
          slideIndex={slideNumber}
        />
      </div>
    </div>
  );
}
