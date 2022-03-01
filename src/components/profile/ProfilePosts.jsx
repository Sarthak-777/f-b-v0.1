import React, { useEffect } from "react";
import Postfeed from "../timeline/Postfeed";
import { useSelector } from "react-redux";
// import PostTab from "./PostTab";
import useUser from "../../hooks/use-user";
import Post from "../timeline/Post";

function ProfilePosts({ photos }) {
  const { userData } = useSelector((state) => state.user);
  const { user } = useUser();

  return (
    <div className="col-span-3">
      <Postfeed username={userData.username} userId={userData.userId} />
      {photos?.map((photo) => {
        let userLikedPhoto = false;
        if (photo.likes.includes(user?.userId)) {
          userLikedPhoto = true;
        }
        photo.username = userData.username;
        photo.userLikedPhoto = userLikedPhoto;
        return (
          <Post
            key={photo.photoId ? photo.photoId : photo.postId}
            photo={photo}
          />
        );
      })}
    </div>
  );
}

export default ProfilePosts;
