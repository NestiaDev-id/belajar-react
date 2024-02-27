import { legacy_createStore } from "redux";
// membuat reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

// membuat (store) atau wadah

const store = legacy_createStore(cartReducer);
console.log("oncreate strore: ", store.getState());

// subscribe, dapat melihat perubahan pada data
store.subscribe(() => {
  console.log("Store change : ", store.getState());
});

// dispatch, dapat menambahkan/memasukkan data
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 30 } };
store.dispatch(action1);
