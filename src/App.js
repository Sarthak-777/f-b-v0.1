import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="">
            <p>Loading...</p>
          </div>
        }
      >
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
