export const initialState = {
  user: null,
  basket: [
    // {
    //   id: "121310243423",
    //   title: "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)",
    //   price: 309.99,
    //   rating: 5,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg",
    // },
    // {
    //   id: "121310243423",
    //   title: "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)",
    //   price: 309.99,
    //   rating: 5,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg",
    // },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product, id not found");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
