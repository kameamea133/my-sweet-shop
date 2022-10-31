import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./helper/theme";
import Products from "./pages/products/Products";
import Basket from "./pages/basket/Basket";
import { PanierContextProvider } from "./context/contextPanier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PanierContextProvider>
        <RouterProvider router={router} />
      </PanierContextProvider>
    </ThemeProvider>
  );
}

export default App;
