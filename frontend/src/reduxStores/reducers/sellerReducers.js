const initialState = {
    sellers: [],
    error: null,
  };
  
  const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET-ALL-SELLER':
        return { ...state, sellers: action.payload };
      case 'ADD_SELLER_SUCCESS':
        return { ...state, sellers: [...state.sellers, action.payload] };
      case 'SELLER_LOGIN':
        {
          console.log(action.payload)  
          localStorage.setItem("token", action.payload.sellerToken.token)
          localStorage.setItem("seller", JSON.stringify(action.payload.sellerToken.seller))
          return {...state, error: action.payload.error};
        }
      default:
        return state;
    }
  };
  
  export default sellerReducer;
  