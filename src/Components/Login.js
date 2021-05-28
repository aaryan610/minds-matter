import React, { useContext, useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {firebase} from '../firebase'
import { UserContext } from "./Main";

const Login = () => {

    let {setUser} = useContext(UserContext)
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID],
    
  };
  return (
    <div>
      <form>
        <div>
          <input type="text" />
          <label>E-mail</label>
        </div>
        <div>
          <input type="text" />
          <label>Password</label>
        </div>
        <hr></hr>

        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </form>
    </div>
  );
};
export default Login;
