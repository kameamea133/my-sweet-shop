import React from "react";
import "./PopularCard.css";
import { Card } from "@mui/material";

export default function PopularCard() {
  return (
    <div className="popular__card__container">
      <Card className="popular__card__image__container" variant="outlined">
        <div className="popular__card__image__container__circle"></div>
        <img />
      </Card>
      <div className="popular__card__info__container"></div>
    </div>
  );
}
