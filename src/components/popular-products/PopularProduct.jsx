import React from "react";
import "./PopularProduct.css";
import { colors } from "../../helper/theme";
import PopularCard from "../popular-card/PopularCard";

export default function PopularProduct() {
  return (
    <div
      className="popular__products__container"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="popular__products__banner"></div>
      <h3 style={{ color: colors.white }}>
        Popular <span style={{ color: colors.third }}>Products</span>
      </h3>
      <PopularCard />
    </div>
  );
}
