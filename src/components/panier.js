import React from "react";
import PaiementCb from "./paiementcb";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PanierContext from "../context/contextPanier";
import { colors } from "../helper/theme";

import "../styles/panier.css";

export default function Panier() {

  const [listProducts, setListProducts] = useState([]);
  const [listPanier, setListPanier] = useState([]);
  const [montantTotal, setMontantTotal] = useState(0);

  const [state, dispatch] = useContext(PanierContext);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      const rawResponse = await response.json();
      if (response) {
        setListProducts(rawResponse.products);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "quantityCount", panier: listPanier });
    function calculMontant() {
      return listPanier.reduce((acc, val) => acc + val.total, 0);
    }
    setMontantTotal(calculMontant);
  }, [listPanier]);

  function checkPanier(items) {
    const alreadyExist = listPanier.some((e) => e.title === items.title);

    if (alreadyExist) {
      const replace = listPanier
        .map((obj) =>
          obj.title === items.title
            ? { ...obj, total: items.total, quantite: items.quantite }
            : obj
        )
        .filter((obj) => obj.quantite !== 0);
      setListPanier(replace);
      if (items.delete) {
        const deleteProduct = listProducts.filter((e) => e.title !== items.title);
        setListProducts(deleteProduct);
      }
    } else {
      setListPanier([...listPanier, items]);
    }
  }

console.log('panier',listPanier)

  return (
    <div className="panier-card-paiement">
      <div>
        <h2><span style={{color: '#5cc9f0'}}>Today's</span> Menu</h2>
        {listProducts.map((el, i) => (
          <PanierCard
            title={el.title}
            price={el.price}
            image={el.images[0]}
            totalPrix={checkPanier}
            key={el.id}
          />
        ))}
      </div>
      <PaiementCb total={montantTotal} />
    </div>
  );
}

function PanierCard({ title, price, image, totalPrix }) {
  const [quantite, setQuantite] = useState(0);
  const [total, setTotal] = useState(0);
  const [deleteProduct, setDeleteProduct] = useState(false);

  useEffect(() => {
    setTotal(price * quantite);
    
  }, [quantite]);

  useEffect(() => {
   
      totalPrix({
        total: total,
        title: title,
        quantite: quantite,
        delete: deleteProduct,
      });    
    
  }, [total, deleteProduct]);
  

  quantite < 0 && setQuantite(0);

  function majPanier(change) {
   
    change === "+" && setQuantite(quantite + 1);
    change === "-" && setQuantite(quantite - 1);
    change === "delete" && setDeleteProduct(true);
  }

  return (
    <div className="panier-card">
      <div className="panier-produit">
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <div className="panier-quantite">
        <div className="panier-icons">
          <FontAwesomeIcon
            icon={faMinus}
            fontSize={20}
            onClick={() => {
              majPanier("-");
            }}
          />
        </div>
        <p>{quantite}</p>
        <div className="panier-icons">
          <FontAwesomeIcon
            icon={faPlus}
            fontSize={20}
            onClick={() => {
              majPanier("+");
            }}
          />
        </div>
      </div>
      <div className="panier-prix-unitaire">
        <p>{price} <span style={{color: colors.secondary}}>€</span></p>
      </div>
      <div className="panier-total">
        <p>Total : {total} <span style={{color: colors.secondary}}>€</span></p>
        <div className="panier-icons">
          <FontAwesomeIcon
            icon={faXmark}
            fontSize={20}
            onClick={() => {
              majPanier("delete");
            }}
          />
        </div>
      </div>
    </div>
  );
}