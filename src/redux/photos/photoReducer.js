import { GET_PHOTOS } from "./photoTypes";

const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        profile: action.payload.profile,
        photos: action.payload.photos,
        followersCount: action.payload.followersCount,
      };
    default:
      return state;
  }
};

export default photoReducer;
