import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./helper/theme";
import Products from "./pages/products/Products";
import Basket from "./pages/basket/Basket";
import PanierContext from "./context/contextPanier";
import reducer from "./context/panierReducer.js";
import { useReducer } from "react";

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
  const initalState = [];
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <ThemeProvider theme={theme}>
      <PanierContext.Provider value={[state, dispatch]}>
        <RouterProvider router={router} />
      </PanierContext.Provider>
    </ThemeProvider>
  );
}

export default App;
