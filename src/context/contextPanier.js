import * as React from 'react'
import { createContext, useReducer, useContext } from 'react';


const PanierContext = createContext();


function PanierProvider({ initialTotal = [] }) {
  const [state, dispatch] = useReducer(defaultReducer, {total: initialTotal})
  console.log(state.total)
  return <PanierContext.Provider value={[state, dispatch]} />
}

function usePanier() {

  const context = useContext(PanierContext) 
  if (context === undefined) {
    throw new Error(`usePanier doit être utilisé avec PanierProvider`)
  } 
  return context
}

const defaultReducer = (state, action) => {
    
  switch (action.type) {
    case 'add':
      return {total: state.total};
    case 'delete':
      return {total: state.total};
    default:
      throw new Error();
  }
}

export { PanierProvider, usePanier }
