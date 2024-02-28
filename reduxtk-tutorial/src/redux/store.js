import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { cakeReducer, cakeActions } from "../features/cake/cakeSlice";
import {
  icecreamReducer,
  icecreamActions,
} from "../features/icecream/icecreamSlice";

import { userReducer, fetchUsers } from "../features/user/userSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

console.log("initalState", store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("updatedState", store.getState());
// });

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(4));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(10));

// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(5));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.restocked(12));

// unsubscribe();
