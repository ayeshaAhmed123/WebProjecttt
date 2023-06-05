const initialState = {
    isLogin: false,
  };
  
  // Reducer
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CURRENT_STATE":
        return state;
      case "SET_LOGIN":
        //toggle function like if login then logout and vice versa
        return {
          ...state,
          isLogin: action.payload,
        };
      default:
        return state;
    }
  };

  export default loginReducer;
