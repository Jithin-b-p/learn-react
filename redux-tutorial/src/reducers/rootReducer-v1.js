import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer/cakeReducer";
import icecreamReducer from "./icecreamReducer/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
