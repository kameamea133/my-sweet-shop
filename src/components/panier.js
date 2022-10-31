import React from "react";
import PaiementCb from "./paiementcb";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import BasketContext from "../context/basket-context";
import { colors } from "../helper/theme";

import "../styles/panier.css";

export default function Panier() {
  const basketCtx = useContext(BasketContext);
  const totalBasket = basketCtx.products.reduce((count, item) => {
    return (count += item.product.price * item.quantity);
  }, 0);

  return (
    <div className="panier-card-paiement">
      <div>
        <h2>
          <span style={{ color: "#5cc9f0" }}>Today's</span> Menu
        </h2>
        {basketCtx.products.map((item) => (
          <PanierCard
            product={item.product}
            quantity={item.quantity}
            key={item.product.id}
          />
        ))}
      </div>
      <PaiementCb total={totalBasket} />
    </div>
  );
}

function PanierCard({ product, quantity }) {
  const basketCtx = useContext(BasketContext);
  const totalPrice = quantity * product.price;

  return (
    <div className="panier-card">
      <div className="panier-produit">
        <img src={product.thumbnail} alt="" />
        <p>{product.title}</p>
      </div>
      <div className="panier-quantite">
        <div
          className="panier-icons"
          onClick={() => {
            basketCtx.removeUnitProduct(product);
          }}
        >
          <FontAwesomeIcon icon={faMinus} fontSize={20} />
        </div>
        <p>{quantity}</p>
        <div
          className="panier-icons"
          onClick={() => {
            basketCtx.addProduct(product);
          }}
        >
          <FontAwesomeIcon icon={faPlus} fontSize={20} />
        </div>
      </div>
      <div className="panier-prix-unitaire">
        <p>
          {product.price} <span style={{ color: colors.secondary }}>€</span>
        </p>
      </div>
      <div className="panier-total">
        <p>
          Total : {totalPrice}{" "}
          <span style={{ color: colors.secondary }}>€</span>
        </p>
        <div className="panier-icons">
          <FontAwesomeIcon
            icon={faXmark}
            fontSize={20}
            onClick={() => {
              basketCtx.removeTotallyProduct(product);
            }}
          />
        </div>
      </div>
    </div>
  );
}
