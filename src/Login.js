import React, { useState } from "react";
import "./login.css";
import logo from "./images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} className="login_logo" />
      </Link>
      <div className="login_container">
        <h2>Sign-In</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinButton" type="submit" onClick={signin}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to My Zone's Conditions of Use and Privacy
          Notice. Please see our Privacy Notice ,our cookies and our interest
          based advertisements
        </p>
        <button className="login_registerButton" onClick={register}>
          Create Your Myzone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
// {import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });}
