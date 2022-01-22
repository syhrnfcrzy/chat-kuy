import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth} from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Selamat Datang di Chat Kuy!</h2>

        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleOutlined /> Masuk Dengan Akun Google
          </div>

          <br></br>
          <br></br>

          <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
          >
            <FacebookOutlined /> Masuk Dengan Akun Facebook
          </div>
      </div>

    </div>
  );
}

export default Login;