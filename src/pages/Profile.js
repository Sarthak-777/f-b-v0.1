import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams, useHistory } from "react-router-dom";
import { checkUserExists } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import UserProfile from "../components/profile";
import { Route, useRouteMatch, useLocation } from "react-router-dom";
import Photos from "../components/profile/Photos";
import Posts from "../components/profile/Posts";
import Friends from "../components/profile/Friends";

function Profile() {
  const { username } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();

  const [userExists, setUserExists] = useState(undefined);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const checkUser = async () => {
      const userExist = await checkUserExists(username);
      if (userExist === undefined) {
        setUserExists(false);
        history.push(ROUTES.NOT_FOUND);
      } else {
        setUserExists(true);
        setUser(userExist[0]);
      }
    };
    if (username) {
      checkUser();
    }
  }, [username, history]);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      {user && (
        <div className="">
          <UserProfile user={user} />
        </div>
      )}
      {location.pathname === `/p/${username}` ? <Posts /> : null}

      <Route path={`${path}/photos`}>
        <Photos user={user} />
      </Route>
      <Route path={`${path}/friends`}>
        <Friends friends={user?.friends} />
      </Route>
    </div>
  );
}

export default Profile;
