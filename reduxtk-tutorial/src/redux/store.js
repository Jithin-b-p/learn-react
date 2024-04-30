import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import cakeReducer, {
  ordered as cakeOrdered,
  restocked as cakeRestocked,
} from "../features/cake/cakeSlice";
import icecreamReducer, {
  ordered as icecreamOrdered,
  restocked as icecreamRestocked,
} from "../features/icecream/icecreamSlice";

import userReducer, { fetchUsers } from "../features/user/userSlice";

// const logger = createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

// console.log("initalState", store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("updatedState", store.getState());
// });

// store.dispatch(fetchUsers());

// store.dispatch(cakeOrdered(4));
// store.dispatch(cakeOrdered(1));
// store.dispatch(cakeRestocked(10));

// store.dispatch(icecreamOrdered(2));
// store.dispatch(icecreamOrdered(5));
// store.dispatch(icecreamOrdered(1));
// store.dispatch(icecreamRestocked(12));

// unsubscribe();
