import { GET_PHOTOS } from "./photoTypes";

export const getPhotos = (data) => {
  return {
    type: GET_PHOTOS,
    payload: data,
  };
};
