import { useEffect, useState } from "react";

export const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  const handleAdd = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleAdd}>add</button>
    </div>
  );
};
