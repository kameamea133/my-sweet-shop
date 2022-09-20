import React from "react";
import "./OverviewCarousel.css";
import theme from "../../helper/theme";
import { colors } from "../../helper/theme";
import ArrowButton from "./arrow-button/ArrowButton";

export default function OverviewCarousel({ imagesArray, interval = 1500 }) {
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
    <div className="container" style={{ backgroundColor: colors.primary }}>
      <p>organic products</p>
      <h1>Your Sweets</h1>
      <div className="line"></div>
      <h2>
        donus, ice cream, <span>macaroons, </span> cheskey
      </h2>
      <ArrowButton text="our production" />

      {/* <img src={imagesArray[slideNumber]} alt="img" /> */}
    </div>
  );
}
