import React from "react";
import "./ArrowButton.css";
import { colors } from "../../helper/theme";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ArrowButton({ text, className, onClick }) {
  return (
    <Button
      className={`${className}`}
      variant="contained"
      color="secondary"
      size="large"
      sx={{
        textTransform: "lowercase",
        borderRadius: "30px",
        padding: "4px 6px",
      }}
      onClick={onClick && onClick}
    >
      <span className="text__btn">{text}</span>
      <div
        className="button-arrow"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <ArrowForwardIosIcon className="right-arrow" fontSize="xsmall" />
      </div>
    </Button>
  );
}
