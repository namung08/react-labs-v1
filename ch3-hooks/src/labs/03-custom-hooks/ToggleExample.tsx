import { useCustomToggle } from "./useCustomToggle";

export const ToggleExample = () => {
  const [isVisible, toggleVisible] = useCustomToggle();

  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? "숨기기" : "보이기"}</button>
      {isVisible && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h2>토글된 컨텐츠</h2>
          <p>이 내용은 토글 버튼을 클릭하면 보이거나 숨겨집니다.</p>
        </div>
      )}
    </div>
  );
};
