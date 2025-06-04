import React, { useRef, useState } from "react";

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
};

export const PrevValue = () => {
  const [value, setValue] = useState("");
  const pervValue = useRef("");
  return (
    <div>
      <input
        value={value}
        type="text"
        // 작성하지 않아도 되나 공부를 위해 작성성
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          pervValue.current = value;
          setValue(e.target.value);
        }}
      />
      <p>이전 값 : {pervValue.current}</p>
    </div>
  );
};

export const Timer = () => {
  const timerId = useRef<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const start = () => {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1); // 클로저 동작 때문에
      console.log("prosess 1sec");
    }, 1000);
  };
  const stop = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setCount(0);
  };
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
};
