const reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_STORE":
      return { ...state, store: action.payload };
      break;

    case "ADD_ITEM_TO_CART":
      const product = state.store.find((item) => item.id === action.payload);

      const itemExist = state.cart.find((item) => item.id === action.payload);

      if (itemExist) {
        const updatedProduct = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedProduct };
      } else {
        return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] };
      }
      break;

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
      break;

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((cartItem) =>
            cartItem.id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity !== 0),
      };
      break;

    case "TOTAL_ITEMS":
        let {total, amount } = state.cart.reduce((accCartTotal, curCartItem) => {
            const {quantity, price} = curCartItem;
             accCartTotal.total += quantity;
             accCartTotal.amount += (price * quantity)
             return accCartTotal
        }, {
            total: 0,
            amount: 0
        })
      return {
        ...state,
        total,
        amount
      }
      break;

    default:
      break;
  }
};

export default reducer;
