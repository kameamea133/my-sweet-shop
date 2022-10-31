import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CategoriesProductsFilter from "../../components/CategoriesProductsFilter";
import ProductsWeightFilter from "../../components/ProductsWeightFilter";
import PricingFilter from "../../components/PricingFilter";
import ProductCard from "../../components/ProductCard";
import FilterPagination from "../../components/FilterPagination";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/header";
import { useContext } from "react";
import BasketContext from "../../context/basket-context";

const Products = () => {
  const [displayItems, setDisplayItems] = useState([]);
  const basketCtx = useContext(BasketContext);

  useEffect(() => {
    const fetchs = async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      const data = await res.json();
      setDisplayItems(data.products);
    };
    fetchs();
  }, []);

  return (
    <>
      <Header />
      <Box
        className="filter_main-container"
        display="flex"
        mt="100px"
        mb="100px"
        sx={{
          width: "100vw",
          height: "1100px",
        }}
      >
        {/* Box Left */}
        <Box
          className="filter-boxLeft"
          display="flex"
          flexDirection="column"
          sx={{ width: "20%", height: "100%", backgroundColor: "#56C2E8" }}
        >
          <h3
            style={{
              backgroundColor: "#0E2E3B",
              color: "#FFF",
              padding: "5px 10px",
            }}
          >
            FILTER PRODUCTS
          </h3>
          <CategoriesProductsFilter />
          <h3
            style={{
              backgroundColor: "#0E2E3B",
              color: "#FFF",
              padding: "5px",
            }}
          >
            PRODUCT WEIGHT
          </h3>
          <ProductsWeightFilter />
          <h3
            style={{
              backgroundColor: "#0E2E3B",
              color: "#FFF",
              padding: "5px",
            }}
          >
            PRICING
          </h3>
          <PricingFilter />
        </Box>
        {/* End Box Left */}

        {/* Box Right */}
        <Box
          className="filter-boxRight"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ width: "80%", height: "100%", flexGrow: 1 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="flex-end"
            sx={{
              width: "300px",
              height: "35px",
              border: "1px solid lightgray",
              borderRadius: "50px",
              paddingLeft: "15px",
              marginRight: "190px",
              marginBottom: "55px",
            }}
          >
            <p>search...</p>
            <SearchIcon
              sx={{
                backgroundColor: "#DB5877",
                width: "35px",
                height: "35px",
                borderRadius: "9999px",
                padding: "6px",
                color: "#FFF",
              }}
            />
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 0 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ pl: "50px", pr: "30px" }}
          >
            {displayItems.map((item) => (
              <Grid position="relative" item xs={2} sm={4} md={3}>
                <ProductCard
                  displayItems={item.thumbnail}
                  price={item.price}
                  category={item.category}
                  title={item.title}
                  onClickAdd={() => basketCtx.addProduct(item)}
                />
              </Grid>
            ))}
          </Grid>
          <FilterPagination />
        </Box>
        {/* End Box Right */}
      </Box>
    </>
  );
};

export default Products;
