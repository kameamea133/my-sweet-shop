import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import useValidationHook from "../../hooks/useValidationHook";
import "./PaymentForm.css";

function PaymentForm() {
  const nameErrorManagement = (inputText) => {
    if (inputText.length < 3) {
      return { errorMessage: "error : not long enought", isValid: false };
    }
    if (inputText.includes("?")) {
      return {
        errorMessage: "error : no special characters allowed",
        isValid: false,
      };
    }
    return { errorMessage: "", isValid: true };
  };

  const emailErrorManagement = (inputText) => {
    if (inputText.length < 7) {
      return {
        errorMessage: "error : not long enought",
        isValid: false,
      };
    }
    if (!inputText.includes("@") || !inputText.includes(".")) {
      return {
        errorMessage: "error : email input should include '@' and a dot",
        isValid: false,
      };
    }
    return { errorMessage: "", isValid: true };
  };

  const {
    enteredValue: enteredName,
    onChangeHandler: onChangeNameHandler,
    onBlurHandler: onBlurNameHandler,
    inputClass: inputNameClass,
    isInputInvalid: isInputNameInvalid,
    errorMessage: errorMessageName,
    resetInput: resetInputName,
  } = useValidationHook(nameErrorManagement);

  const {
    enteredValue: enteredFirstName,
    onChangeHandler: onChangeFirstNameHandler,
    onBlurHandler: onBlurFirstNameHandler,
    inputClass: inputFirstNameClass,
    isInputInvalid: isInputFirstNameInvalid,
    errorMessage: errorMessageFirstName,
    resetInput: resetInputFirstName,
  } = useValidationHook(nameErrorManagement);

  const {
    enteredValue: enteredEmail,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    inputClass: inputEmailClass,
    isInputInvalid: isInputEmailInvalid,
    errorMessage: errorMessageEmail,
    resetInput: resetInputEmail,
  } = useValidationHook(emailErrorManagement);

  const {
    enteredValue: enteredAdress,
    onChangeHandler: onChangeAdressHandler,
    onBlurHandler: onBlurAdressHandler,
    inputClass: inputAdressClass,
    isInputInvalid: isInputAdressInvalid,
    errorMessage: errorMessageAdress,
    resetInput: resetInputAdress,
  } = useValidationHook(nameErrorManagement);

  const {
    enteredValue: enteredCity,
    onChangeHandler: onChangeCityHandler,
    onBlurHandler: onBlurCityHandler,
    inputClass: inputCityClass,
    isInputInvalid: isInputCityInvalid,
    errorMessage: errorMessageCity,
    resetInput: resetInputCity,
  } = useValidationHook(nameErrorManagement);

  const {
    enteredValue: enteredPostalCode,
    onChangeHandler: onChangePostalCodeHandler,
    onBlurHandler: onBlurPostalCodeHandler,
    inputClass: inputPostalCodeClass,
    isInputInvalid: isInputPostalCodeInvalid,
    errorMessage: errorMessagePostalCode,
    resetInput: resetInputPostalCode,
  } = useValidationHook(nameErrorManagement);

  const isValidForm = !isInputNameInvalid;
  const buttonClass = isValidForm
    ? "payment__form__button is__valid"
    : "payment__form__button";

  const onClickHandler = (e) => {
    e.preventDefault();
    if (isValidForm) {
      resetInputName();
      resetInputFirstName();
      resetInputEmail();
      resetInputAdress();
      resetInputCity();
      resetInputPostalCode();
    }
  };

  return (
    <form className="payment__form">
      <input
        type="text"
        placeholder="Nom"
        value={enteredName}
        onChange={onChangeNameHandler}
        onBlur={onBlurNameHandler}
        className={inputNameClass}
      />
      {isInputNameInvalid && (
        <p className="error__message">{errorMessageName}</p>
      )}
      <input
        type="text"
        placeholder="Prenom"
        value={enteredFirstName}
        onChange={onChangeFirstNameHandler}
        onBlur={onBlurFirstNameHandler}
        className={inputFirstNameClass}
      />
      {isInputFirstNameInvalid && (
        <p className="error__message">{errorMessageFirstName}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        value={enteredEmail}
        onChange={onChangeEmailHandler}
        onBlur={onBlurEmailHandler}
        className={inputEmailClass}
      />
      {isInputEmailInvalid && (
        <p className="error__message">{errorMessageEmail}</p>
      )}
      <input
        type="text"
        placeholder="Adresse"
        value={enteredAdress}
        onChange={onChangeAdressHandler}
        onBlur={onBlurAdressHandler}
        className={inputAdressClass}
      />
      {isInputAdressInvalid && (
        <p className="error__message">{errorMessageAdress}</p>
      )}
      <input
        type="text"
        placeholder="Ville"
        value={enteredCity}
        onChange={onChangeCityHandler}
        onBlur={onBlurCityHandler}
        className={inputCityClass}
      />
      {isInputCityInvalid && (
        <p className="error__message">{errorMessageCity}</p>
      )}
      <input
        type="text"
        placeholder="Code Postal"
        value={enteredPostalCode}
        onChange={onChangePostalCodeHandler}
        onBlur={onBlurPostalCodeHandler}
        className={inputPostalCodeClass}
      />
      {isInputPostalCodeInvalid && (
        <p className="error__message">{errorMessagePostalCode}</p>
      )}
      <Button
        sx={{ display: "block", margin: "auto", marginTop: "2rem" }}
        color="secondary"
        disabled={!isValidForm}
        className={buttonClass}
        onClick={onClickHandler}
        variant="contained"
      >
        Paiement
      </Button>
    </form>
  );
}

export default PaymentForm;
