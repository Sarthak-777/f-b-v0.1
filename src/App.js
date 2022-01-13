import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useContext } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import userContext from "./context/user";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener();
  return (
    <userContext.Provider value={{ user }}>
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
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </userContext.Provider>
  );
}

export default App;
