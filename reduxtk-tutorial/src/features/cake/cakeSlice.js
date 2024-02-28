import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCake -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

const cakeReducer = cakeSlice.reducer;
const cakeActions = cakeSlice.actions;
export { cakeReducer, cakeActions };
