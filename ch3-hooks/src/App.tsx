import "./App.css";
import { IntervalExample } from "./labs/03-custom-hooks/IntervalExample";
import { ManualFetchExample } from "./labs/03-custom-hooks/ManualFetchExample";
import { ToggleExample } from "./labs/03-custom-hooks/ToggleExample";

function App() {
  return (
    <>
      <ToggleExample />
      <IntervalExample />
      <ManualFetchExample />
    </>
  );
}

export default App;
