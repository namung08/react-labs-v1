import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={addCount}>add</button>
        <button onClick={minusCount}>minus</button>
      </div>
    </div>
  );
};
