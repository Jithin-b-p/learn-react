import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(1);

  const date = new Date();

  date.setDate(date.getDate() + count);

  function incrementCount() {
    setCount((curCount) => curCount + step);
  }

  function decrementCount() {
    setCount((curCount) => curCount - step);
  }
  function incrementStep() {
    setStep((currStep) => currStep + 1);
  }

  function decrementStep() {
    if (step <= 1) {
      return;
    }
    setStep((currStep) => currStep - 1);
  }
  return (
    <>
      <div>
        <button onClick={decrementStep}>&minus;</button>
        Step: {step} <button onClick={incrementStep}>&#43;</button>
      </div>
      <div>
        <button onClick={decrementCount}>&minus;</button>
        Count: {count} <button onClick={incrementCount}>&#43;</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
