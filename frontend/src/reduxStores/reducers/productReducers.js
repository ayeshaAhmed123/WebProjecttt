const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET-ALL-PRODUCT':
        return { ...state, products: action.payload };
      case 'ADD_PRODUCT_SUCCESS':
        return { ...state, products: [...state.products, action.payload] };
      case 'FETCH_PRODUCTS_BY_CATEGORY':
       return  {...state, products:action.payload}
      default:
        return state;
    }
  };
  
  export default productReducer;
  