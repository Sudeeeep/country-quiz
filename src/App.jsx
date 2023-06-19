import { useState } from "react";
import { Home } from "./components/Home";
import { CapitalsQuiz } from "./components/CapitalsQuiz";
import { FlagsQuiz } from "./components/FlagsQuiz";

function App() {
  const [homeScreen, setHomeScreen] = useState(true);
  const [capitalsScreen, setCapitalsScreen] = useState(false);
  const [flagsScreen, setFlagsScreen] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  return (
    <div className="container w-4/5 m-auto">
      {homeScreen && (
        <Home
          setHomeScreen={setHomeScreen}
          setCapitalsScreen={setCapitalsScreen}
          setFlagsScreen={setFlagsScreen}
        />
      )}
      {capitalsScreen && (
        <CapitalsQuiz
          nextQuestion={nextQuestion}
          setNextQuestion={setNextQuestion}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      )}
      {flagsScreen && (
        <FlagsQuiz
          nextQuestion={nextQuestion}
          setNextQuestion={setNextQuestion}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      )}
    </div>
  );
}

export default App;
