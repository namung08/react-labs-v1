import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(5);
  const [id, setId] = useState(0);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setId(intervalId)
  };

  const resetTimer = () => {
    setTimer(5);
    clearInterval(id)
  };

  return [timer, startTimer, resetTimer] as const;
};

export const QuickMathGame = () => {
  const [isStart, setIsStart] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [answer, setAnswer] = useState(0);

  const [timer, startTimer, resetTimer] = useTimer();

  const handleStart = () => {
    setFirst(Math.floor(Math.random() * 90) + 10);
    setSecond(Math.floor(Math.random() * 90) + 10);
    setIsStart(true);
    startTimer();
  };

  const handleDone = () => {
    setIsDone(true);
  };

  const handleRetry = () => {
    setIsStart(false);
    setIsDone(false);
    setAnswer(0);
    setFirst(0);
    setSecond(0);
    resetTimer();
  };

  useEffect(() => {
    if (timer === 0) {
      handleDone();
    }
  }, [timer]);

  return (
    <div>
      {isStart ? (
        isDone ? (
          <div>
            <p>
              Q: {first} X {second} = ?
            </p>
            <p>A: {first * second}</p>
            <p>Your Answer: {answer}</p>
            <p>O/X: {first * second === answer ? "O" : "X"}</p>
            <button onClick={handleRetry}>retry?</button>
          </div>
        ) : (
          <>
            <div>
              <p>
                {first} X {second} = ?
              </p>
              <p>time: {timer}</p>
            </div>
            <input
              type="text"
              onChange={(e) => {
                try {
                  setAnswer(parseInt(e.target.value));
                } catch {
                  throw Error;
                }
              }}
            />
            <button onClick={handleDone}>done</button>
          </>
        )
      ) : (
        <button onClick={handleStart}>start</button>
      )}
    </div>
  );
};
