import { useState } from "react";
import { useInterval } from "./useInterval";

export const IntervalExample = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => {
    if (isRunning) {
      setCount((c) => c + 1);
    }
  }, 1000);

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "정지" : "시작"}
      </button>
    </div>
  );
};
