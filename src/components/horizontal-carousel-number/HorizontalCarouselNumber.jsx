import React from "react";
import "./HorizontalCarouselNumber.css";
import { colors } from "../../helper/theme";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from "@mui/icons-material/Circle";

export default function HorizontalCarouselNumber({
  slideArray,
  currentSlideIndex,
}) {
  const itemNotSelectedStyle = (
    <div className="horizontal__carousel__number__not__selected">
      <CircleIcon style={{ color: colors.third }} />
    </div>
  );
  const itemSelectedStyle = (
    <div className="horizontal__carousel__number__selected">
      <AdjustIcon />
    </div>
  );
  return (
    <div className="horizontal__carousel__number__index__layout">
      {slideArray.map((_, index) => {
        return index === currentSlideIndex ? (
          <div key={index}>{itemSelectedStyle}</div>
        ) : (
          <div key={index}>{itemNotSelectedStyle}</div>
        );
      })}
    </div>
  );
}
