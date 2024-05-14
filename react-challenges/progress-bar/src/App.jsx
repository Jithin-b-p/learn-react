import { useState, useEffect } from "react";

import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setValue((value) => {
        const newValue = value + 1;
        if (newValue > 100) {
          clearInterval(id);
          return 100;
        }

        return newValue;
      });
    }, 100);
  }, []);

  return (
    <div className="progressbar-container">
      <h1>Progress bar</h1>
      <ProgressBar value={value} />
    </div>
  );
}
