import React from "react";
import "./HorizontalCarouselCards.css";
import PopularCard from "../popular-card/PopularCard";

function HorizontalCarouselCards({ popularProducts, currentSlideIndex }) {
  const transitionClass =
    currentSlideIndex === 0
      ? "go__all__right"
      : currentSlideIndex === 1
      ? "go__one__left"
      : currentSlideIndex === 2
      ? "go__two__left"
      : "";
  return (
    <div className="horizontal__carousel__cards__popular__carousel__all_cards">
      {popularProducts.map((it) => (
        <PopularCard
          productDetail={it}
          className={`popular__carousel__card go__left ${transitionClass}`}
        />
      ))}
    </div>
  );
}

export default HorizontalCarouselCards;
