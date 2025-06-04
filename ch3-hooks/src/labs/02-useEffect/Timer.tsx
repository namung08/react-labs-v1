import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("clean-up!");
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
};
