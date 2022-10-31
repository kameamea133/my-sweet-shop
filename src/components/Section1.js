import React from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../images/pic1.png";
import pic4 from "../images/pic4.png";
import pic7 from "../images/pic7.png";
import "../styles/Section1.css";
import ArrowButton from "./arrow-button/ArrowButton";

const DUMMY_IMAGE =
  "https://www.lesdessertsdegiulia.fr/wp-content/uploads/img-entremet-1-300x300.png";

const Section1 = () => {
  const navigate = useNavigate();
  const handleClickProduction = () => {
    navigate("/products");
  };
  return (
    <div className="section1-mainContainer">
      <div className="section1-leftBox">
        <div className="section1-leftBox-pictureBlock">
          <img className="pic1" src={pic1} alt="picture1" />
          <img className="pic4" src={pic4} alt="picture4" />
          <img className="pic7" src={pic7} alt="picture5" />
        </div>
      </div>
      <div className="section1-rightBox">
        <h3>your sweets</h3>
        <div className="section1-rightBox-ourProduction">
          <h1>
            <span>About</span> Us
          </h1>
          <div class="section1__button_production_container">
            <ArrowButton
              text="our production"
              className="section1__button_production"
              onClick={handleClickProduction}
            />
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "black",
            width: "90px",
            height: "7px",
            borderRadius: "15px",
            marginLeft: "0",
            marginBottom: "25px",
          }}
        />
        <div className="section1-rightBox-paragraph">
          <div className="para-left">
            <p>
              Reu nisl quis enim aliquam posuere vitae ac velit. Suspendisse
              dictum ligula sit amet fringilla tempor.
            </p>
            <br />
            <p>
              Nulla eu nisl quis enim aliquam posuere vitae ac velit.
              Suspendisse dictum ligula sit amet fringilla tempor. Maecenas
              elementum urna eget risus gravida malesuada. Phasellus viverra
              interdum mollis.
            </p>
          </div>
          <div className="para-right">
            <p>
              Nulla eu nisl quis enim aliquam posuere vitae ac velit.
              Suspendisse dictum ligula sit amet fringilla tempor. Maecenas
            </p>
            <img
              src={DUMMY_IMAGE}
              alt="picture6"
              className="section1__para_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
