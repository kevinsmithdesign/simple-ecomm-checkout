export const initialState = {
  total: 0,
  products: [],
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };
    case "remove":
      return {
        ...state,
        products: action.payload,
      };
    case "price":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw Error(
        "Invalid action type. Please provide a valid action type for the storeReducer."
      );
  }
};

export default StoreReducer;
