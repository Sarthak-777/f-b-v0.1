import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: null,
  reducers: {
    firebaseData: (state, action) => {
      const data = action.payload;
      return {
        state,
        ...data,
      };
    },
  },
});

export const { firebaseData } = firebaseSlice.actions;

export default firebaseSlice.reducer;
