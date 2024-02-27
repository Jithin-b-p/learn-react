// External imports
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// local imports
import App from "./App";
import { store } from "./reducers/store";

// Assets
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
