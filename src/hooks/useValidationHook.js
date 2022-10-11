import React, { useState } from "react";

function useValidationHook(errorManagementFunc) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEnteredValueTouched, setIsEnteredValueTouched] = useState(false);

  const { isValid: isEnteredValueValid, errorMessage } =
    errorManagementFunc(enteredValue);

  const isInputInvalid = !isEnteredValueValid && isEnteredValueTouched;
  const inputClass = isInputInvalid ? "error__input" : "";

  const onChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsEnteredValueTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsEnteredValueTouched(false);
  };

  return {
    enteredValue,
    onChangeHandler,
    onBlurHandler,
    inputClass,
    errorMessage,
    isInputInvalid,
    resetInput,
  };
}

export default useValidationHook;
