// Order reducer
export const orderReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_ORDERS_SELLER":
        return action.payload;
      case "GET_ORDERS_CUSTOMER":
        return action.payload ;
      case "GET_ORDERS_PRODUCT":
        return action.payload ;
      default:
        return state;
    }
  };