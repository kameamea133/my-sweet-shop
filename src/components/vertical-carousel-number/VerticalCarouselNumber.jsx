import React from "react";
import "./VerticalCarouselNumber.css";
import { colors } from "../../helper/theme";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from "@mui/icons-material/Circle";

export default function VerticalCarouselNumber({ slideArray, slideIndex }) {
  const notCurrentStyle = (
    <div className="point">
      <div className="not__selected">
        <CircleIcon className="circle__icon" style={{ color: colors.white }} />
      </div>
    </div>
  );
  const currentStyle = (
    <div className="point">
      <AdjustIcon className="selected" />
    </div>
  );
  return (
    <div>
      {slideArray.map((_, index) => {
        const numberStartAtOne = index + 1;
        const numberToDisplay =
          numberStartAtOne < 10
            ? "0" + numberStartAtOne.toString()
            : numberStartAtOne;
        return (
          <div className="index__layout" key={index}>
            {index === slideIndex ? currentStyle : notCurrentStyle}
            <p className="point__number" style={{ color: colors.white }}>
              {index === slideIndex && numberToDisplay}
            </p>
          </div>
        );
      })}
    </div>
  );
}
