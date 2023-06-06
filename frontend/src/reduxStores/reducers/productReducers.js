const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET-ALL-PRODUCT':
        return { ...state, products: action.payload };
      case 'ADD_PRODUCT_SUCCESS':
        return { ...state, products: [...state.products, action.payload] };
        case 'UPDATE_PRODUCT':
          // Find the index of the product to be updated
          const updatedProductIndex = state.products.findIndex(
            product => product._id === action.payload._id
          );
          if (updatedProductIndex !== -1) {
            // Create a new array with the updated product
            const updatedProducts = [
              ...state.products.slice(0, updatedProductIndex), // products before the updated product
              action.payload, // updated product
              ...state.products.slice(updatedProductIndex + 1) // products after the updated product
            ];
        
            return { ...state, products: updatedProducts };
          }
        
          // If the product doesn't exist, return the current state
          return state;
      case 'FETCH_PRODUCTS_BY_CATEGORY':
       return  {...state, products:action.payload}
      case 'GET-SELLER-PRODUCT':
        return  {...state, products:action.payload}
      case 'GET-SELLER-PRODUCT-CATEGORY':
          return  {...state, products:action.payload}
      case 'GET-SELLER-PRODUCT-NAME':
            return  {...state, products:[action.payload]}
     case 'DELETE_PRODUCT':
  const updatedProducts = state.products.filter(product => product._id !== action.payload._id);
  return { ...state, products: updatedProducts };
      default:
        return state;
    }
  };
  //
  export default productReducer;
  