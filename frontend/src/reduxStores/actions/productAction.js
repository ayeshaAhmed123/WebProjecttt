import axios from 'axios';

const fetchProductsSuccess = (products) => ({
  type: 'GET-ALL-PRODUCT',
  payload: products,
});


const fetchProductsByCategory = (products) => ({
    type: 'FETCH_PRODUCTS_BY_CATEGORY',
    payload: products,
  });
  
 
const addProductSuccess = (product) => ({
  type: 'ADD_PRODUCT_SUCCESS',
  payload: product,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5005/product/get');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      console.log(error)
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5005/product/create', product);
      dispatch(addProductSuccess(response.data));
    } catch (error) {      
        console.log(error)
    }
  };
};

export const findProductWithCategoryHome = (category) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:5005/product/search/${category}`);
        console.log(response.data)
        dispatch(fetchProductsByCategory(response.data));
      } catch (error) {
        console.log(error);
      }
    };
  };
