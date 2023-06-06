import axios from 'axios';

const fetchProductsSuccess = (products) => ({
  type: 'GET-ALL-PRODUCT',
  payload: products,
});
const fetchSellerProduct = (products) => ({
  type: 'GET-SELLER-PRODUCT',
  payload: products,
});
const fetchSellerProductCategory = (products) => ({
  type: 'GET-SELLER-PRODUCT-CATEGORY',
  payload: products,
});
const fetchSellerProductName = (product) => ({
  type: 'GET-SELLER-PRODUCT-NAME',
  payload: product,
});
const fetchProductsByCategory = (products) => ({
    type: 'FETCH_PRODUCTS_BY_CATEGORY',
    payload: products,
  });
  

const deleteProductById = (product) =>({
    type:'UPDATE_PRODUCT',
    payload: product 
  });
const UpdateProductById = (product) =>({
    type:'DELETE_PRODUCT',
    payload: product 
});
const addProductSuccess = (product) => ({
  type: 'ADD_PRODUCT_SUCCESS',
  payload: product,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5005/product/get');
      console.log(response.data)
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      console.log(error)
    }
  };
};

export const deleteProduct=(token,id)=>{
  return async(dispatch)=>{
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(`http://localhost:5005/product/delete/${id}`, config);
      console.log(response.data);
      dispatch(deleteProductById(response.data));
    } catch (error) {
      console.log(error);
    }

  }
}
export const fetchSellerProducts = (token,id) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`http://localhost:5005/product/get/${id}`, config);
      console.log(response.data);
      dispatch(fetchSellerProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchSellerProductByName = (token,name) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        }
      };
      const response = await axios.get(`http://localhost:5005/product/searchName/${name}`, config);
      console.log(response.data);
      dispatch(fetchSellerProductName(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSellerProductByCategory = (tokens,category) => {
  console.log(tokens)
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: `Bearer ${tokens}`,
        }
      };
      const response = await axios.get(`http://localhost:5005/product/searchCat/${category}`, config);
      console.log(response.data);
      dispatch(fetchSellerProductCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const addProduct = (token, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5005/product/create',
        product,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      dispatch(addProductSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (token,id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:5005/product/update/${id}`,
        product,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      dispatch(updateProduct(response.data));
    } catch (error) {
      console.log(error);
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
