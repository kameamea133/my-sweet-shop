import React from "react";
import "./PopularCard.css";
import { Card } from "@mui/material";
import { colors } from "../../helper/theme";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ShopButton from "../shop-button/ShopButton";

const DUMMY_IMG =
  "https://i.pinimg.com/originals/ef/56/3c/ef563c7f99ce5bff4e01a45d24e13ac6.png";

export default function PopularCard(props) {
  return (
    <div className={`popular__card__container ${props.className}`}>
      <Card className="popular__card__image__container" variant="outlined">
        <div
          className="popular__card__image__container__circle"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <img src={DUMMY_IMG} />
      </Card>
      <div className="popular__card__info__container">
        <h4 style={{ color: colors.primary }}>
          Ice Cream <span style={{ color: colors.third }}>- Vannilla</span>
        </h4>
        <h4 style={{ color: colors.third }}>Black Flovers</h4>
        <p className="popular__card__info__container__subtitle">ice cream</p>
        <div className="popular__card__info__container__stars">
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
        </div>
        <div className="popular__card__info__container__price">
          <AttachMoneyRoundedIcon
            className="popular__card__info__container__price__dollar"
            style={{ fill: colors.secondary }}
          />
          <p className="popular__card__info__container__price__number">6.36</p>
        </div>
        <ShopButton
          text="add to card"
          className={"popular__card__info__container__shop__button"}
        />
      </div>
    </div>
  );
}
