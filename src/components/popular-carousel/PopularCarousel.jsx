import React from "react";
import PopularCard from "../popular-card/PopularCard";
import "./PopularCarousel.css";

export default function PopularCarousel({ popularProducts }) {
  return (
    <div className="popular__carousel__container">
      <div className="popular__carousel__all_cards">
        {popularProducts.map((it) => (
          <PopularCard productDetail={it} className="popular__carousel__card" />
        ))}
      </div>
    </div>
  );
}
