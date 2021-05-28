import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import firebaseApp, { db } from "../firebase";

function Login() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   firebaseApp
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Signed in
//       var user = userCredential.user;
//       console.log(user)
//       // ...
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ..
//     });
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={() => logout()}>Log out</button>
          <JSONPretty data={user} />
          <h2>{user.name}</h2>
          <img src={user.picture} alt={user.name} />
        </div>
      ) : (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
}
export default Login;
