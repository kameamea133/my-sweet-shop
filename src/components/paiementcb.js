import React, { useState } from "react";
import "../styles/paiementCb.css";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";


function PaiementCb() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  

  return (
    <div className="container-cb">
      <img
        className="cartebleu"
        src="../images/creditcard.png"
        alt="carte de credit"
      />
      <div className="info-cb">

        <h2>Order <span>Payment</span></h2>
        <h3>Select card type</h3>
        <div className="cb-icons">
          <FontAwesomeIcon icon={faPaypal} size="2xl" />
          <FontAwesomeIcon icon={faCcVisa} size="2xl" style={{color: "white"}}/>
          <FontAwesomeIcon icon={faCcMastercard} size="2xl" />
        </div>

        <h3>Card Number</h3>
        <div className="cb-form">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className='numero-cb' type="number" placeholder="Numéros CB" {...register("Numéros CB", {required: true, maxLength: 12})} />
            <div>
              <input className='date-cb' type="month" placeholder="Date" {...register("Date", {required: true, maxLength: 6})} />
              <input className='cvc-cb' type="number" placeholder="CVC" {...register("CVC", {required: true, maxLength: 3, pattern: /^\S+@\S+$/i})} />
            </div>
            <div className='total'>
              <p>Total: 140 €</p>
              <button className='submit-btn' type="submit">Go</button>
            </div>
            
          </form>
          

        </div>
        
        
      </div>
    </div>
  );
}

export default PaiementCb;
