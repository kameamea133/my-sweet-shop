import React from "react";
import "./PopularCard.css";
import { Card } from "@mui/material";
import { colors } from "../../helper/theme";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ShopButton from "../shop-button/ShopButton";

export default function PopularCard({ className, productDetail }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= productDetail.stars) {
      stars.push(<StarRateIcon sx={{ color: colors.secondary }} />);
    } else {
      stars.push(<StarRateIcon sx={{ color: colors.third }} />);
    }
  }
  return (
    <div>
      <Card
        className={`popular__card__container ${className}`}
        variant="outlined"
      >
        <div className="popular__card__image__container">
          <div
            className="popular__card__image__container__circle"
            style={{ backgroundColor: colors.primary }}
          ></div>
          <img src={productDetail.image} alt={productDetail.name} />
        </div>
        <div className="popular__card__info__container">
          <h4 style={{ color: colors.primary }}>
            {productDetail.name}{" "}
            <span style={{ color: colors.third }}>
              - {productDetail.flavour}
            </span>
          </h4>
          <h4 style={{ color: colors.third }}>{productDetail.subtitle}</h4>
          <p className="popular__card__info__container__subtitle">
            {productDetail.category}
          </p>
          <div className="popular__card__info__container__stars">
            {stars.map((it) => it)}
          </div>
          <div className="popular__card__info__container__price">
            <AttachMoneyRoundedIcon
              className="popular__card__info__container__price__dollar"
              style={{ fill: colors.secondary }}
            />
            <p className="popular__card__info__container__price__number">
              {productDetail.price}
            </p>
          </div>
          <ShopButton
            text="add to card"
            className={"popular__card__info__container__shop__button"}
          />
        </div>
      </Card>
    </div>
  );
}
