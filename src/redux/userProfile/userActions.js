import { GET_USERS } from "./userTypes";

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    payload: data,
  };
};
