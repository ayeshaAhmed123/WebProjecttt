import axios from 'axios';
const getOrderOfSeller = (orders) => ({
    type: 'GET_ORDERS_SELLER',
    payload: orders,
  });

 const getOrderCustomers = (orders) => ({
    type: 'GET_ORDERS_CUSTOMER',
    payload: orders,
  });

  const getOrderProducts = (orders) => ({
    type: 'GET_ORDERS_PRODUCT',
    payload: orders,
  });

// Get orders of a seller
export const getOrdersOfSeller = (id,token) => async (dispatch) => {
  try {
    const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      console.log("inside the getOrder ", token,    id )
      const response = await axios.get(`http://localhost:5005/order/get/${id}`, config);


    dispatch(getOrderOfSeller(response.data));
  } catch (error) {
    console.log(error);
  }
};



// Get customer details of an order
export const getOrderCustomer = (id,token) => async (dispatch) => {
  try {
    const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    const response = await axios.get(`http://localhost:5005/order/getCustomer/${id}`, config);
    dispatch(getOrderCustomers(response.data));
  } catch (error) {
    console.log(error)
  }
};

// Get orders containing a specific product
export const getOrderProduct = (id,token) => async (dispatch) => {
    try {
        const config = {
            headers: {
              authorization: `Bearer ${token}`,
            },
          };
        const response = await axios.get(`http://localhost:5005/order/getProduct/${id}`, config);
        dispatch(getOrderProducts(response.data));
      } catch (error) {
        console.log(error)
      }
};
