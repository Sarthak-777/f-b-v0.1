import React, { useEffect, useState } from "react";
import {
  getPhotosByUserData,
  getPostsByUserData,
} from "../../services/firebase";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

function Posts({ userId }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await getPhotosByUserData(userId);
      const response2 = await getPostsByUserData(userId);
      response.push(...response2);
      // console.log(response);
      if (response[0]) {
        const sortedResponse = response.sort(
          (a, b) => b.dateCreated - a.dateCreated
        );
        setPhotos(sortedResponse);
      }
    }
    if (userId) {
      getPosts();
    }
  }, [userId]);
  return (
    <div className="mx-auto w-5/6 min-h-[350px]">
      <div className="grid grid-cols-5 gap-5">
        {/* <div className="col-span-2 bg-white h-64 w-full">Intro</div>
        <div className="col-span-3">hello</div> */}
        <ProfileInfo />
        <ProfilePosts photos={photos} />
      </div>
    </div>
  );
}

export default Posts;
