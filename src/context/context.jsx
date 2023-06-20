import React, { useContext, useRef, useEffect, useReducer } from "react";
import reducer from "./reducer";

const url = "https://fakestoreapi.com/products"
export const AppContext = React.createContext();

const initialState = {
  loading: false,
  store: [],
  cart: [],
  wishList: [],
  total: 0,
  amount: 0,
  totalWish: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const slideRef = useRef();

  const handleScroll = (direction) => {
    if(direction === "right" ) {
        slideRef.current.scrollLeft += 300
    }
    if(direction === "left" ) {
        slideRef.current.scrollLeft -= 300
    }
    console.log("hello")
}

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

  const addToWishList = (id) => {
    dispatch({type: "ADD_TO_WISHLIST", payload: id})
  }

  const moveWishListToCart = () => {
    dispatch({type: "MOVE_WISHLIST_TO_CART"})
  }

  const deleteWish = (id) => {
    dispatch({type: "DELETE_WISH_ITEM", payload: id})
  }

  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }

  const itemToCart = (id, quantity) => {
    dispatch({type: "PRODUCT_PAGE_TO_CART", payload: {"id": id, "quantity": quantity}})
  }

  console.log(state.cart)

  useEffect(() => {
      dispatch({type: "TOTAL_ITEMS"});
      dispatch({type: "TOTAL_WISH"})
  }, [state.cart, state.wishList])


  useEffect(() => {
    fetchStore()
  },[])

  return (
    <AppContext.Provider value={
      {...state, 
        addToCart, 
        increase, 
        decrease,
        slideRef,
        handleScroll,
        addToWishList,
        deleteWish,
        itemToCart,
        moveWishListToCart,
      }
      }>
      {children}
    </AppContext.Provider>)
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
