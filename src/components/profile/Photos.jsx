import React, { useEffect } from "react";
import { getPhotos } from "../../redux";
import { useDispatch } from "react-redux";
import { getPhotosByUserData } from "../../services/firebase";
import PhotoTab from "./PhotoTab";

function Photos({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUserPhotosAndInfo() {
      const photos = await getPhotosByUserData(user.userId);
      dispatch(
        getPhotos({
          profile: user,
          photos: photos,
          followersCount: user.followers.length,
        })
      );
    }
    if (user) {
      getUserPhotosAndInfo();
    }
  }, [user]);
  return (
    <div className="py-5">
      <PhotoTab />
    </div>
  );
}

export default Photos;
