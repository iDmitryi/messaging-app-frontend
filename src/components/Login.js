import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import { Button } from "@mui/material";
import "./Login.css";
import { useStateValue } from "../store/StateProvider";
import { actionTypes } from "../store/reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatsapp" />
        <div className="login__text">
          <h1>Sign in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
