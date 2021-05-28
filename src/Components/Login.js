import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={() => logout()}>Log out</button>
          {/* <JSONPretty data={user} /> */}
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
