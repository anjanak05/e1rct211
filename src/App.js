import { useReducer, useEffect } from "react";
import "./App.css";
import {reducer} from "./reducer"
import {initialState} from "./initialState"
import axios from "axios"

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const getData=(params={})=>{
    return axios.get(`https://reqres.in/api/login`,{
        params: {
          email: params.email,
            password: params.password,
        }
    })
}


useEffect(()=>{
  getData().then((res)=> {
    console.log("res", res)
     dispatch(dispatch(LOGIN_SUCCESS(res)))
 
  }) .catch((err)=> dispatch(dispatch(LOGIN_FAILURE()))
 }, [])


  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}
          <div data-cy="token">Token:</div>
          <div data-cy="incorrect-credentials" style={{ color: "red" }}>
            Incorrect Credentials
          </div>
        </div>
        <form>
          <div className="email-wrapper">
            <label>Email</label>
            <input name="email" value={reducerState.EMAIL} data-cy="email" />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input name="password" value={reducerState.PASSWORD}  data-cy="password" />
          </div>
          <div className="submit-button-wrapper">
            <button data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
