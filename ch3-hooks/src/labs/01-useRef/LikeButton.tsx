import { useRef, useState } from "react";

export const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const timerId = useRef<number | null>(null);

  const handleLike = () => {
    setIsDisabled(true);
    setLikeCount((c) => c + 1);
    timerId.current = setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };
  return (
    <div>
      <button onClick={handleLike} disabled={isDisabled}>
        like {likeCount}
      </button>
    </div>
  );
};
