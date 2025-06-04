import "./App.css";
import { IntervalExample } from "./labs/03-custom-hooks/IntervalExample";
import { ManualFetchExample } from "./labs/03-custom-hooks/ManualFetchExample";
import { ToggleExample } from "./labs/03-custom-hooks/ToggleExample";
import { CountryCapitalQuiz } from "./labs/04-summary/CountryCapitalQuiz";
import { QuickMathGame } from "./labs/04-summary/QuickMathGame";

function App() {
  return (
    <>
      {/* <ToggleExample />
      <IntervalExample />
      <ManualFetchExample /> */}
      <QuickMathGame />
      <CountryCapitalQuiz />
    </>
  );
}

export default App;
