const reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_STORE":
      return { ...state, store: action.payload };
      break;

    case "ADD_ITEM_TO_CART":
        const product = state.store.find((item) => item.id === action.payload);
        return {...state, cart: [...state.cart, product]}
        break;

    default:
      break;
  }
};

export default reducer;
