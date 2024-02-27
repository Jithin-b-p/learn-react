import { applyMiddleware, bindActionCreators, createStore } from "redux";
import rootReducer from "./rootReducer-v1";
import { orderCake, restockCake } from "../actions/cake";
import { orderIcecream } from "../actions/icecream";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initialstate", store.getState());

// adding a listener which is invoked on every dispatch.
// const unsubscribe = store.subscribe(() =>
//   console.log("updateState", store.getState())
// );

// store.dispatch(orderCake(3));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(1));
// store.dispatch(restockCake(2));

// binding action creator with dispatch.
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);

actions.orderCake(2);

store.dispatch(orderIcecream(10));
// subsribing to the store will return a function we are using that function to subscribe the listener. Here after there is not listener for the dispatch.
// unsubscribe();
