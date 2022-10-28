const reducer = (state, action) => {
  switch (action.type) {
    case "quantityCount":
      const quantitePanier = action.panier.reduce(
        (acc, val) => acc + val.quantite, 0);
        
      return { totalQuantite: quantitePanier };

    default:
      return state;
  }
};

export default reducer;