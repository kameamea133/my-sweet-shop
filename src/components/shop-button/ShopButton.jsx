import React from "react";
import "./ShopButton.css";
import { colors } from "../../helper/theme";
import { Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function ShopButton({ text, className }) {
  return (
    <Button
      className={`shop__button ${className}`}
      variant="contained"
      color="white"
      size="large"
      sx={{
        textTransform: "lowercase",
        borderRadius: "30px",
        padding: "4px 6px",
        color: colors.secondary,
        borderColor: colors.secondary,
      }}
    >
      <span className="text__btn">{text}</span>
      <div
        className="button-shop"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <ShoppingBagOutlinedIcon
          className="shop-icon"
          fontSize="xsmall"
          color="white"
        />
      </div>
    </Button>
  );
}
