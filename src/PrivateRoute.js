import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Components/Main";

function PrivateRoute({ component: Component, ...rest })
{
const {user} = useContext(UserContext)
  return (
    <Route
      {...rest}

      render = { props => {
          return user ? <Component {...props} /> : <Redirect to="/login" />
        }
      }
    />
  );
};

export default PrivateRoute;