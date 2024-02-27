import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

import userReducer from "./userReducer/userReducer";
import { userFailed, userRequest, userSuccess } from "../actions/user";

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        dispatch(userFailed(error.message));
      });
  };
};

export const store = createStore(userReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());
