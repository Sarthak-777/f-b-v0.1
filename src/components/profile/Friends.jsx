import React, { useState, useEffect } from "react";
import {
  getFriendsProfile,
  handleLoggedUserFriends,
} from "../../services/firebase";
import { Link } from "react-router-dom";
import { removeUserFriend } from "../../services/firebase";
import useUser from "../../hooks/use-user";

function Friends({ friends }) {
  const [userFriends, setUserFriends] = useState(null);
  const { user } = useUser();
  const [unfriend, setUnfriend] = useState(false);
  console.log(friends);
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
    }
    if (friends) {
      getFriends();
    }
  }, [friends]);

  const handleRemoveFriend = (friendDocId, friendUserId) => {
    async function removeFriend() {
      setUnfriend(true);
      //   console.log(friendUserId, friendDocId, user.docId, user.userId);
      await removeUserFriend(
        user.docId,
        user.userId,
        friendDocId,
        friendUserId
      );
    }
    if (user) {
      removeFriend();
    }
  };

  console.log(userFriends);
  return (
    <div className="mx-auto w-5/6 min-h-[350px] bg-white rounded-xl shadow-sm">
      <div className="mx-6 my-3 py-5">
        <div className="flex justify-between">
          <h1 className="font-medium text-lg ml-2">Friends</h1>
          <h1 className="font-semibold text-blue-500 cursor-pointer ">
            Find Friends
          </h1>
        </div>
        <div className="mx-2 my-3 flex">
          <h1 className="text-blue-500 font-semibold pb-2 px-4 py-4 border-b-4 border-blue-500">
            All Friends
          </h1>
        </div>
        <div className="grid grid-cols-2">
          {userFriends?.map((friend) => (
            <div className="flex justify-between items-center">
              <Link to={`/p/${friend.username}`}>
                <div
                  key={friend.userId}
                  className="flex my-6 mx-3 items-center"
                >
                  <img
                    src={`/images/avatar/${friend.username}.jpg`}
                    className="h-20 w-20 rounded-lg"
                  />
                  <p className="m-3 font-semibold">{friend.fullName}</p>
                </div>
              </Link>
              {unfriend ? (
                <p>Removed</p>
              ) : (
                <img
                  src="/images/icons/removefriend.png"
                  className="h-10 w-10 cursor-pointer mr-3"
                  alt="remove icon"
                  onClick={() =>
                    handleRemoveFriend(friend.docId, friend.userId)
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
