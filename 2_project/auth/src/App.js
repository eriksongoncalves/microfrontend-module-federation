import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" exact>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup" exact component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
