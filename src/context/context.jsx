import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = "https://fakestoreapi.com/products"
export const AppContext = React.createContext();

const initialState = {
  loading: false,
  store: [],
  cart: [],
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStore = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type: "DISPLAY_STORE", payload: data})
    } catch (error) {
      console.log(error)
    }
  }

  const addToCart = (id) => {
    dispatch({type: "ADD_ITEM_TO_CART", payload: id})
  }

  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }

  console.log(state.cart)

  useEffect(() => {
    fetchStore()
  },[])

  return (
    <AppContext.Provider value={{...state, addToCart, increase, decrease}}>
      {children}
    </AppContext.Provider>)
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
