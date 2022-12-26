import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import { Button } from "@mui/material";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) =>
      console.log(result).catch((error) => alert(error))
    );
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
