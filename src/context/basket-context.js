import React, { createContext } from "react";
import { useReducer } from "react";

const initialValues = {
  products: [],
  addProduct: () => {},
  removeUnitProduct: () => {},
  removeTotallyProduct: () => {},
  numberOfProducts: 0,
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_UNIT_PRODUCT = "REMOVE_UNIT_PRODUCT";
const REMOVE_TOTALLY_PRODUCT = "REMOVE_TOTALLY_PRODUCT";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const updatedProducts = state.products;
      //try to get index if productToAdd already exist, return -1 if not
      const existingProductIndex = updatedProducts.findIndex(
        (it) => it.product.id === action.payload.id
      );
      if (existingProductIndex != -1) {
        //product already exist in the basket
        updatedProducts[existingProductIndex].quantity += 1;
      } else {
        //product doesn't exist in basket add new one with quantity = 1
        updatedProducts.push({ product: action.payload, quantity: 1 });
      }
      const totalProducts = updatedProducts.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
      return {
        ...state,
        products: updatedProducts,
        numberOfProducts: totalProducts,
      };
    }
    case REMOVE_UNIT_PRODUCT: {
      const updatedProducts = state.products;
      //try to get index if productToRemoveUnit already exist, return -1 if not
      const existingProductIndex = updatedProducts.findIndex(
        (it) => it.product.id === action.payload.id
      );
      if (existingProductIndex != -1) {
        //product already exist in the basket
        if (updatedProducts[existingProductIndex].quantity > 1) {
          updatedProducts[existingProductIndex].quantity -= 1;
        } else {
          //if only one left (quantity = 1) remove the product from the porudcts array
          updatedProducts.splice(existingProductIndex, 1);
        }
      }
      const totalProducts = updatedProducts.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
      return {
        ...state,
        products: updatedProducts,
        numberOfProducts: totalProducts,
      };
    }
    case REMOVE_TOTALLY_PRODUCT: {
      const updatedProducts = state.products;
      //try to get index if productToRemoveUnit already exist, return -1 if not
      const existingProductIndex = updatedProducts.findIndex(
        (it) => it.product.id === action.payload.id
      );
      if (existingProductIndex != -1) {
        //product exist in the basket
        //delete the product from the products array
        updatedProducts.splice(existingProductIndex, 1);
      }
      const totalProducts = updatedProducts.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
      return {
        ...state,
        products: updatedProducts,
        numberOfProducts: totalProducts,
      };
    }
  }
};

const BasketContext = createContext(initialValues);

export const BasketContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    numberOfProducts: 0,
  });
  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };
  const removeUnitProduct = (product) => {
    dispatch({ type: REMOVE_UNIT_PRODUCT, payload: product });
  };
  const removeTotallyProduct = (product) => {
    dispatch({ type: REMOVE_TOTALLY_PRODUCT, payload: product });
  };

  return (
    <BasketContext.Provider
      value={{
        ...state,
        addProduct,
        removeUnitProduct,
        removeTotallyProduct,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContext;

// ---------

const a = {
  products: [
    {
      id: 21,
      title: "- Daal Masoor 500 grams",
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: 20,
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
      images: [
        "https://dummyjson.com/image/i/products/21/1.png",
        "https://dummyjson.com/image/i/products/21/2.jpg",
        "https://dummyjson.com/image/i/products/21/3.jpg",
      ],
    },
    {
      id: 22,
      title: "Elbow Macaroni - 400 gm",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/22/1.jpg",
        "https://dummyjson.com/image/i/products/22/2.jpg",
        "https://dummyjson.com/image/i/products/22/3.jpg",
      ],
    },
    {
      id: 23,
      title: "Orange Essence Food Flavou",
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: 14,
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/23/1.jpg",
        "https://dummyjson.com/image/i/products/23/2.jpg",
        "https://dummyjson.com/image/i/products/23/3.jpg",
        "https://dummyjson.com/image/i/products/23/4.jpg",
        "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      ],
    },
    {
      id: 24,
      title: "cereals muesli fruit nuts",
      description:
        "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: 46,
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/24/1.jpg",
        "https://dummyjson.com/image/i/products/24/2.jpg",
        "https://dummyjson.com/image/i/products/24/3.jpg",
        "https://dummyjson.com/image/i/products/24/4.jpg",
        "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
      ],
    },
    {
      id: 25,
      title: "Gulab Powder 50 Gram",
      description:
        "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: 70,
      discountPercentage: 13.58,
      rating: 4.87,
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/25/1.png",
        "https://dummyjson.com/image/i/products/25/2.jpg",
        "https://dummyjson.com/image/i/products/25/3.png",
        "https://dummyjson.com/image/i/products/25/4.jpg",
        "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
      ],
    },
  ],
  total: 5,
  skip: 0,
  limit: 5,
};
