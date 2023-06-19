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
      let { total, amount } = state.cart.reduce(
        (accCartTotal, curCartItem) => {
          const { quantity, price } = curCartItem;
          accCartTotal.total += quantity;
          accCartTotal.amount += price * quantity;
          return accCartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total,
        amount,
      };
      break;

    case "ADD_TO_WISHLIST":
      const wishItem = state.store.find((item) => item.id === action.payload);
      const wishItemExist = state.wishList.find(
        (item) => item.id === action.payload
      );

      if (wishItemExist) {
        // const updatedWishList = state.wishList.map((item) =>
        //   item.id === wishItem.id
        //     ? { ...item, quantity: item.quantity + 1 }
        //     : item
        // );
        return { ...state };
      } else {
        return {
          ...state,
          wishList: [...state.wishList, { ...wishItem }],
        };
      }
      break;

    case "DELETE_WISH_ITEM":
      const updatedWishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        wishList: updatedWishList,
      };
      break;

    case "MOVE_WISHLIST_TO_CART":
      const updatedCart = [...state.cart];
      const itemsToAdd = state.wishList.filter((wishItem) => {
        return !state.cart.some((cartItem) => cartItem.id === wishItem.id);
      });

      const itemsWithQuantity = itemsToAdd.map((item) => ({
        ...item,
        quantity: 1,
      }));

      updatedCart.push(...itemsWithQuantity);

      return {
        ...state,
        cart: updatedCart,
        wishList: [],
      };

      // state.wishList.map((wishItem) => {
      //   const wishItemFound = state.cart.find(
      //     (item) => item.id === wishItem.id
      //   );
      //   const wishListFilter = state.cart.filter(
      //     (item) => item.id !== wishItemFound.id
      //   );
      //   // const wishItemFilter = state.wishList.filter(
      //   //   (item) => item.id !== wishItem.id
      //   // );
      //   if (wishItemFound) {
      //     return {
      //       ...state,
      //       cart: [...wishListFilter],
      //       wishList: [],
      //     };
      //   } else {
      //     return {
      //       ...state,
      //       cart: [...state.cart, ...state.wishList],
      //       wishList: [],
      //     };
      //   }
      // });
      break;
    case "TOTAL_WISH":
      return {
        ...state,
        totalWish: state.wishList.length,
      };
    default:
      break;
  }
};

export default reducer;
