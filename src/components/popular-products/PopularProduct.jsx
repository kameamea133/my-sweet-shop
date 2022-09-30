import React from "react";
import "./PopularProduct.css";
import { colors } from "../../helper/theme";
import PopularCarousel from "../popular-carousel/PopularCarousel";

const DUMMY_PRODUCTS = [
  {
    name: "Ice Cream",
    flavour: "Vannilla",
    subtitle: "Black Flovers",
    category: "ice cream",
    stars: 4,
    price: 6.84,
    image:
      "https://i.pinimg.com/originals/ef/56/3c/ef563c7f99ce5bff4e01a45d24e13ac6.png",
  },
  {
    name: "Ice Cream",
    flavour: "Vannilla",
    subtitle: "Black Flovers",
    category: "ice cream",
    stars: 5,
    price: 6.84,
    image:
      "https://i.pinimg.com/originals/ef/56/3c/ef563c7f99ce5bff4e01a45d24e13ac6.png",
  },
  {
    name: "Ice Cream",
    flavour: "Vannilla",
    subtitle: "Black Flovers",
    category: "ice cream",
    stars: 1,
    price: 6.84,
    image:
      "https://i.pinimg.com/originals/ef/56/3c/ef563c7f99ce5bff4e01a45d24e13ac6.png",
  },
];

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
      {/* <PopularCard className="popular__product__popular__card" /> */}
      <PopularCarousel popularProducts={DUMMY_PRODUCTS} interval={1500} />
    </div>
  );
}
