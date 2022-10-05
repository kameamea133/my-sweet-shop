import React from "react";
import PaiementCb from "./paiementcb";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
//import { usePanier } from '../context/contextPanier'
import "../styles/panier.css";

export default function Panier() {

  const [products, setProducts] = useState([]);  

  //const [state, dispatch] = usePanier()

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      const rawResponse = await response.json();
      if (response) {
        setProducts(rawResponse.products);
      }
    }

    loadProducts();
  }, []);

 

  function sumPanier(total) {
    console.log(total)
    //dispatch({type: 'add', total: total})
    
  }
 

  return (
    <div>
      <PaiementCb />
      <h2>Today Menu</h2>
      {products.map((el, i) => (
        <PanierCard
          title={el.title}          
          price={el.price}
          image={el.images[0]}
          totalPrix={sumPanier}
          key={el.id}
        />
      ))}
    </div>
  );
}

function PanierCard({ title, price, image, totalPrix }) {

  const [quantite, setQuantite] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    setTotal(price*quantite)  
    

  },[quantite])

  quantite < 0 && setQuantite(0);

function majPanier(change) {    
    change === '+'? setQuantite(quantite+1):setQuantite(quantite-1)    
}

totalPrix(total)

  return (
    <div className="panier-card">
      <div className="panier-produit">
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <div className="panier-quantite">
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => {majPanier('-')}}
        />
        <p>{quantite}</p>
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => {majPanier('+')}}
        />
      </div>
      <div>
        <p>{price}€</p>
      </div>
      <div className="panier-total">
        <p>Total : {total}€</p>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}
