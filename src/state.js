import React, { createContext, useReducer, useContext } from 'react';
import * as actions from './actions';

const StateContext = createContext({});
const StateDispatchContext = createContext(() => {});

export const useAppState = () => useContext(StateContext);
export const useDispatch = () => useContext(StateDispatchContext);

const initialState = {
  currencyPairs: null,
  selectedPair: null,
}

const reducer = (state, action) => {
  
  switch (action.type) {
    case actions.CURRENCY_PAIRED:
      return {
        ...state,
        currencyPairs: action.data.map(
          ({ name, url_symbol }) => ({ name, id: url_symbol })
        )
      }
    case actions.CURRENCY_SELECTED:
      return {
        ...state,
        selectedPair: action.selectedPair,
      }
    default:
      throw new Error(`Invalid app state action '${action.type}'`);
  }
}

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <StateDispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </StateDispatchContext.Provider>
  );
}