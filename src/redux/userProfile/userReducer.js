import { GET_USERS } from "./userTypes";

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        userData: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
