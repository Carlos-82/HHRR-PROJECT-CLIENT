import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

// El componente <AnonRoute /> recibe como argumento un objecto con las propiedades: component con el valor de un componente (Signup, Login), isLoggedin (viene de withAuth, ya que Signup se exporta como withAuth(Signup), y el resto de las props (si hubiera))

function AnonRoute({ component: Component, isLoggedin, user, ...rest }) {
  // devuelve un componente <Route /> donde su prop render recibe las props, y si no está logueado, devuelve el componente con sus props (history, etc.), en caso contrario, el componente <Redirect /> redirige a /private
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedin) {
          return <Component {...props} />;
        } else if (user && user.admin) {
          return <Redirect to="/admin" />;
        } else if (user && !user.admin) {
          return <Redirect to="/user" />;
        }
      }}
    />
  );
}

export default withAuth(AnonRoute);
