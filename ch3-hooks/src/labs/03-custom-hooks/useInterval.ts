import { useEffect } from "react";

export const useInterval = (callback: () => void, ms: number) => {
  useEffect(() => {
    const timer = setInterval(() => {
      callback();
    }, ms);

    return () => clearInterval(timer);
  }, [callback, ms]);
};
