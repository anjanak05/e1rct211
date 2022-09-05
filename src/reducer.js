//import the action types here from the actionTypes.js to be used in the reducer function
import { actionTypes } from "./actionTypes";
//Complete the reducer function here
const reducer = (state, action) => {
    const { type, payload } = action;
switch (type) {
  case "LOGIN_REQUEST": return {
      ...state,
      isAuth: false,
      token: "",
      isLoading: true,
      isError: false,
    };
  case "LOGIN_SUCCESS":
    return {
      ...state,
      isAuth: true,
      token: payload,
      isLoading: false,
      isError: false,
    };
  case "LOGIN_FAILURE":
    return { ...state,
        isAuth: false,
        token: null,
        isLoading: false,
        isError: true};
  default:
    return state;
}
};

export { reducer };
