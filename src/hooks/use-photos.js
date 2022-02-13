import { useEffect, useState } from "react";
// import userContext from "../context/user";
import useUser from "./use-user";
import { getFollowingUsersPhotos } from "../services/firebase";

function usePhotos() {
  const { user } = useUser();
  const { following, userId } = user;
  const [photos, setPhotos] = useState("");
  useEffect(() => {
    async function getTimelinePhotos() {
      let followedUserPhotos = [];
      if (following?.length > 0) {
        const followedUserPhotos = await getFollowingUsersPhotos(
          following,
          userId
        );
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
        // console.log(followedUserPhotos);
      }
    }
    getTimelinePhotos();
  }, [userId]);
  return { photos };
}

export default usePhotos;
