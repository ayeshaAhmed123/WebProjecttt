

// Action Creators
export const getCurrentState = () => {
  return {
    type: "GET_CURRENT_STATE"
  };
};

export const setLogin = (isLogin) => {
  return {
    type: "SET_LOGIN",
    payload: isLogin,
  };
};