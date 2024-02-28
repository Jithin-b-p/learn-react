import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

console.log(icecreamSlice);

const icecreamReducer = icecreamSlice.reducer;
const icecreamActions = icecreamSlice.actions;
export { icecreamReducer, icecreamActions };
