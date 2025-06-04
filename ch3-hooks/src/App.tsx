import "./App.css";
import { LikeButton } from "./labs/01-useRef/LikeButton";
import { CounterEffect } from "./labs/02-useEffect/CounterEffect";
import { MountLog } from "./labs/02-useEffect/MountLog";
import { PostLoader } from "./labs/02-useEffect/PostLoader";
import { Timer } from "./labs/02-useEffect/Timer";
// import { FocusInput, PrevValue, Timer } from "./practice/useRef";
function App() {
  return (
    <>
      {/* <FocusInput /> */}
      {/* <PrevValue /> */}
      {/* <Timer /> */}
      <LikeButton />
      <MountLog />
      <CounterEffect />
      <PostLoader />
      <Timer />
    </>
  );
}

export default App;
