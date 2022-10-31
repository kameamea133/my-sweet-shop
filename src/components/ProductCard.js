import React, { useState } from "react";
import {
  Box,
  CardActions,
  CardContent,
  Card,
  Rating,
  Button,
  Typography,
} from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";

const ProductCard = ({ displayItems, price, category, onClickAdd }) => {
  const [value] = useState(3);

  return (
    <Card
      sx={{
        width: 235,
        padding: "15px",
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.1)",
        borderRadius: "4px",
        height: "95%",
      }}
    >
      <CardContent>
        <Box
          height="10vh"
          display="flex"
          justifyContent="center"
          sx={{ border: "1px solid #5FD3FC", borderRadius: "6px" }}
        >
          <img
            alt="pic1"
            src={displayItems}
            style={{
              position: "absolute",
              height: "10vh",
              top: "25px",
              filter: "drop-shadow(5px 1px 3px rgba(0,0,0,0.29))",
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "500" }}>
          Sweet Mary's
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "500", mt: "-8px" }}>
          Ice Cream
        </Typography>

        <Typography sx={{ mb: -0.7, mt: 0.6 }} color="text.secondary">
          {category}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Rating
            name="read-only"
            value={value}
            readOnly
            sx={{ color: "#E96F8C", fontSize: "15px" }}
          />
          <p>
            <span style={{ color: "#E96F8C" }}>$</span>{" "}
            <span style={{ fontWeight: "bolder", fontSize: "18px" }}>
              {price}
            </span>
          </p>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          position="relative"
          justifyContent="center"
          alignItems="center"
          mb="10px"
          sx={{
            width: "95%",
            color: "#DC5274",
            border: "2px solid #DC5274",
            borderRadius: "50px",
            height: "33px",
          }}
        >
          <Button
            size="small"
            sx={{ color: "#DC5274", fontSize: "11px", fontWeight: "bold" }}
            onClick={
              onClickAdd
                ? onClickAdd
                : () => {
                    console.log("click");
                  }
            }
          >
            add to cart
          </Button>
          <Box
            position="absolute"
            right="2px"
            sx={{
              width: "26px",
              height: "26px",
              backgroundColor: "#DC5274",
              padding: "2px 3px",
              borderRadius: "9999px",
              color: "#FFF",
            }}
          >
            <ShoppingBagOutlined fontSize="small" />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
