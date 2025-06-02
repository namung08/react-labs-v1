import { useState } from "react";

export const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <p>{isVisible ? "비밀 메시지입니다!" : ""}</p>
      <button onClick={toggle}>메시지 보기/숨기기</button>
    </div>
  );
};
