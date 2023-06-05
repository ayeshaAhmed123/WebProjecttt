import axios from 'axios';

const fetchAllSeller = (sellers) => ({
  type: 'GET-ALL-SELLER',
  payload: sellers,
});

const sellerSignup = (seller) => ({
  type: 'ADD_SELLER_SUCCESS',
  payload: seller,
});

const sellerLogin = (sellerToken,error) => ({
  type: 'SELLER_LOGIN',
  payload: {sellerToken,error}
});
export const fetchSellers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5005/seller/get');
      dispatch(fetchAllSeller(response.data));
    } catch (error) {
      console.log(error)
    }
  };
};

export const login = (email,password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5005/seller/login',{email,password});
      const responses=response.data;
      
      const sellerobj={seller:responses.seller,token:responses.token}
      console.log(sellerobj)
      dispatch(sellerLogin(sellerobj));
    } catch (error) {
      console.log(error)
    }
  };
};
export const addSeller = (seller) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5005/seller/signup', seller);
      dispatch(sellerSignup(response.data));
    } catch (error) {      
        console.log(error)
    }
  };
};
