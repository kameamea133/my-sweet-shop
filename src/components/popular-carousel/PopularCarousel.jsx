import React from "react";
import HorizontalCarouselNumber from "../horizontal-carousel-number/HorizontalCarouselNumber";
import HorizontalCarouselCards from "../horizontal-carousel-cards/HorizontalCarouselCards";

export default function PopularCarousel({ popularProducts, interval }) {
  const threePopularProduct = popularProducts.slice(0, 3);
  const [indexCardToShow, setIndexCardToShow] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexCardToShow((prevState) => {
        if (prevState < 2) {
          return prevState + 1;
        } else {
          return 0;
        }
      });
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <HorizontalCarouselCards
        popularProducts={threePopularProduct}
        currentSlideIndex={indexCardToShow}
      />
      <HorizontalCarouselNumber
        slideArray={threePopularProduct}
        currentSlideIndex={indexCardToShow}
      />
    </>
  );
}
