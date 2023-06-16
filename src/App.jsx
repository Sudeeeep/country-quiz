import { useState } from "react";
import { Home } from "./components/Home";
import { CapitalsQuiz } from "./components/CapitalsQuiz";
import { FlagsQuiz } from "./components/FlagsQuiz";

function App() {
  const [homeScreen, setHomeScreen] = useState(false);
  const [capitalsScreen, setCapitalsScreen] = useState(true);
  const [flagsScreen, setFlagsScreen] = useState(false);

  return (
    <div className="container w-4/5 m-auto">
      {homeScreen && (
        <Home
          setHomeScreen={setHomeScreen}
          setCapitalsScreen={setCapitalsScreen}
          setFlagsScreen={setFlagsScreen}
        />
      )}
      {capitalsScreen && <CapitalsQuiz />}
      {flagsScreen && <FlagsQuiz />}
    </div>
  );
}

export default App;
