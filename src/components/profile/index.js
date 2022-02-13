import React, { useState, useContext } from "react";
import userContext from "../../context/user";
import {
  addBioProfile,
  handleLoggedUserFriends,
  handleSuggestedUserFriends,
} from "../../services/firebase";
import useUser from "../../hooks/use-user";
import { useRouteMatch, Link } from "react-router-dom";

function UserProfile({ user: userProfile }) {
  const { user } = useUser();

  const { path, url } = useRouteMatch();

  const [bio, setBio] = useState("");
  const [bioForm, setBioForm] = useState(false);
  const [friends, setFriends] = useState(false);
  const handleBioSettings = () => {
    setBioForm(false);
    const handleBio = async () => {
      await addBioProfile(user.docId, bio);
    };
    if (user) {
      handleBio();
    }
  };

  const handleFriends = () => {
    setFriends(!userProfile.friends.includes(user.userId));
    const addFriend = async () => {
      await handleLoggedUserFriends(user.docId, userProfile.userId, false);
      await handleSuggestedUserFriends(userProfile.docId, user.userId, false);
    };
    if (user) {
      addFriend();
    }
  };

  return (
    <div className="w-full shadow-md">
      <div className=" bg-white">
        <div className=" md:w-5/6 lg:container xl:w-3/6  mx-auto">
          <div className="relative h-full w-full">
            <img
              src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1939048928.1641772800"
              className="h-[210px] w-full md:h-[350px] object-cover rounded-lg"
            />
            <div className="flex justify-center">
              <img
                src={`/images/avatar/${userProfile.username}.jpg`}
                alt="profile-picture"
                className="top-10 absolute md:top-44 rounded-full h-48 w-48 border-4 border-white"
              />
            </div>
          </div>
          <div className="mt-5 flex-col text-center mx-8 border-b-2">
            <h1 className="font-medium text-3xl mb-3">
              {userProfile.fullName}
            </h1>
            {user.username === userProfile.username ? (
              <div>
                {bioForm ? (
                  <div className="p-2">
                    <div>
                      <input
                        type="text"
                        className="border-2 bg-gray-100 px-4 pt-1 pb-7 rounded-lg"
                        placeholder="Describe who you are"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <div className="ml-20">
                      <button
                        className="mx-3 my-2 p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                        onClick={() => setBioForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="mx-3 my-2 p-2 bg-blue-600 rounded-md text-white"
                        onClick={handleBioSettings}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {user.bio.length > 0 ? (
                      <p className="text-md font-light pb-2">
                        {user.bio[user.bio.length - 1]}
                      </p>
                    ) : (
                      <p
                        className="text-blue-500 text-sm font-semibold p-2 cursor-pointer"
                        onClick={() => setBioForm(true)}
                      >
                        Add Bio
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <Link to={`${url}`}>
                <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                  Posts
                </p>
              </Link>
              <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                About
              </p>
              <Link to={`${url}/friends`}>
                <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                  Friends
                </p>
              </Link>
              <Link to={`${url}/photos`}>
                <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                  Photos
                </p>
              </Link>
              <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                Videos
              </p>
              <p className="cursor-pointer py-4 px-3 font-semibold text-gray-500 text-sm ">
                More
              </p>
            </div>
            <div className="flex items-center">
              {user.username === userProfile.username ? (
                <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                  Edit Profile
                </button>
              ) : (
                <div>
                  {userProfile.friends.includes(user.userId) ? (
                    <button className="bg-gray-200 py-2 px-5 rounded-md hover:bg-gray-300">
                      Remove Friend
                    </button>
                  ) : (
                    <button
                      className={`${
                        friends
                          ? `bg-gray-200 hover:bg-gray-300`
                          : `bg-blue-600 hover:bg-blue-700 text-white font-medium`
                      }  py-2 px-5 rounded-md  `}
                      onClick={handleFriends}
                    >
                      {friends ? "Remove Friend" : "Add Friend"}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
