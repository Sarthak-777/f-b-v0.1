import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getSuggestions } from "../../services/firebase";
import {
  handleFollowedUserFollowers,
  handleLoggedUserFollowing,
} from "../../services/firebase";
import {
  handleLoggedUserFriends,
  handleSuggestedUserFriends,
} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function FollowTab({ docId, userId, followers, following, friends }) {
  const [suggestions, setSuggestions] = useState([]);
  const [isFollowed, setIsFollowed] = useState([]);

  useEffect(() => {
    async function getProfile() {
      const suggestedProfiles = await getSuggestions(userId, friends);
      setSuggestions(suggestedProfiles);
    }
    if (userId) {
      getProfile();
    }
  }, [userId]);

  const handleFollow = async (suggestedDocId, suggestedUserId) => {
    setIsFollowed(isFollowed.concat([suggestedUserId]));

    await handleLoggedUserFollowing(docId, suggestedUserId, false);
    await handleFollowedUserFollowers(suggestedDocId, userId, false);
  };

  const handleFriend = async (suggestedDocId, suggestedUserId) => {
    await handleLoggedUserFriends(docId, suggestedUserId, false);
    await handleSuggestedUserFriends(suggestedDocId, userId, false);
  };

  return (
    <div className="pb-4 border-b border-gray-300 ">
      <p className="mt-7 text-sm font-semibold text-gray-500">
        People You may know
      </p>
      {!userId ? (
        <Skeleton count={2} height={50} width={200} className="m-1" />
      ) : (
        <div className="mt-4 flex-col">
          {suggestions?.map((user) => (
            <div
              key={user.userId}
              className="flex justify-between items-center"
            >
              <Link to={`/p/${user.username}`}>
                <div className="my-3 flex items-center">
                  <img
                    src={`/images/avatar/${user.username}.jpg`}
                    alt="profile picture"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-col ml-3">
                    <p className=" font-semibold">{user.username}</p>
                    <p className="text-xs font-extralight">{user.fullName}</p>
                  </div>
                </div>
              </Link>
              <div className="flex-col">
                {following?.includes(user.userId) ? (
                  <p
                    className="text-xs text-gray-400 font-semibold cursor-pointer"
                    onClick={() => handleFollow(user.docId, user.userId)}
                  >
                    Followed
                  </p>
                ) : (
                  <p
                    className={`text-xs ${
                      isFollowed.includes(user.userId)
                        ? `text-gray-400`
                        : `text-blue-600`
                    } font-semibold cursor-pointer`}
                    onClick={() => handleFollow(user.docId, user.userId)}
                  >
                    {isFollowed.includes(user.userId) ? "Followed" : "Follow"}
                  </p>
                )}

                <p
                  className="text-xs font-bold text-blue-700 mt-2  cursor-pointer"
                  onClick={() => handleFriend(user.docId, user.userId)}
                >
                  Add Friend
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FollowTab;

FollowTab.propTypes = {
  docId: PropTypes.string,
  userId: PropTypes.string,
  followers: PropTypes.array,
  following: PropTypes.array,
  friends: PropTypes.array,
};
