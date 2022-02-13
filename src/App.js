import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useContext } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import userContext from "./context/user";
import store from "./redux/store";
import { Provider } from "react-redux";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
// const Photos = lazy(() => import("./pages/Photos"));

function App() {
  const { user } = useAuthListener();
  return (
    <Provider store={store}>
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
              <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
              {/* <Route path={ROUTES.PROFILE} component={Profile}> */}
              {/* <Route path={ROUTES.PHOTOS} element={<Photos />} /> */}
              {/* </Route> */}
              <Route path={ROUTES.PROFILE}>
                <Profile />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </userContext.Provider>
    </Provider>
  );
}

export default App;
