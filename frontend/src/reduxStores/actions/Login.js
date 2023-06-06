

// Action Creators
export const getCurrentState = () => {
  return {
    type: "GET_CURRENT_STATE"
  };
};

 const setLogin = (isLogin) => ({
  
    type: "SET_LOGIN",
    payload: isLogin,
  
});

export const changeLogin = (loginStatus) => {
  return  (dispatch) => {
    try {
      dispatch(setLogin(loginStatus));
    } catch (error) {
      console.log(error);
    }
  };
};