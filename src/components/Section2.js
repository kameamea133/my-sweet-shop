import React from "react";
import "../styles/Section2.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowButton from "../components/arrow-button/ArrowButton";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-mainContainer">
        <div className="cream">
          <div className="section2__cream__info">
            <h1>Ice Cream</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of.
            </p>
            <h4>22 products</h4>
          </div>
          <ArrowButton
            text="go to category"
            className="section2__cream__button"
          />
        </div>
        <div className="macarons">
          <h4>15 products</h4>
          <h2>Macaroons</h2>
        </div>
        <div className="discounts">
          <div />
          <h1>discounts</h1>
        </div>
        <div className="donuts">
          <h4>18 products</h4>
          <h1>Donuts</h1>
          <ArrowButton text="go to category" />
        </div>
        <div className="categories">
          <h1>categories</h1>
        </div>
        <div className="cheskey">
          <div>
            <h4>22 products</h4>
          </div>
          <h1>Cheskey</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots.
          </p>
          <ArrowButton text="go to category" className="cheskey__arrowBtn" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
