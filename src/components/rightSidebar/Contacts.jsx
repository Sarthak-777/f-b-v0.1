import PropTypes from "prop-types";
import HeroIconsTab from "./heroIconsTab";
import { useEffect, useState } from "react";
import {
  getFriendsProfile,
  handleLoggedUserFriends,
} from "../../services/firebase";
import FriendProfile from "./FriendProfile";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function Contacts({ userId, docId, friends }) {
  const [userFriends, setUserFriends] = useState(null);
  useEffect(() => {
    async function getFriends() {
      const friendProfile = [];
      const promiseResponse = await Promise.all(
        friends.map(async (friend) => {
          const user = await getFriendsProfile(friend);
          friendProfile.push(user);
          return friendProfile;
        })
      );
      setUserFriends(promiseResponse[0]);

      // const friendsProfile = await getFriendsProfile(friends);
      // setUserFriends(friendsProfile);
    }
    if (userId) {
      getFriends();
    }
  }, [userId]);
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <p className="text-sm font-semibold text-gray-500">Contacts</p>
        <HeroIconsTab />
      </div>
      {!userId ? (
        <Skeleton count={2} height={50} width={200} className="my-1" />
      ) : (
        <div className="">
          {userFriends?.map(
            (user) => (
              <Link to={`/p/${user.username}`}>
                <FriendProfile
                  key={user.userId}
                  fullName={user.fullName}
                  username={user.username}
                />
              </Link>
            )
            // console.log(user.username)
          )}
        </div>
      )}
    </div>
  );
}

export default Contacts;

Contacts.propTypes = {
  docId: PropTypes.string,
  friends: PropTypes.array,
};
