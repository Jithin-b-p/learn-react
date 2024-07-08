import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating />
      <StarRating
        maxRating={10}
        size={50}
        color="red"
        className="test"
        defaultRating={3}
      />
      <StarRating color="blue" onSetRating={setMovieRating} />

      <p>This movie has a Rating of {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
