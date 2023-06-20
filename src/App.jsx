import { useState } from "react";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Quiz } from "./components/Quiz";

function App() {
  const [homeScreen, setHomeScreen] = useState(true);
  const [capitalsScreen, setCapitalsScreen] = useState(false);
  const [flagsScreen, setFlagsScreen] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(0);
  const [resultScreen, setResultScreen] = useState(false);

  return (
    <div className="container w-4/5 m-auto h-screen">
      {homeScreen && (
        <Home
          setHomeScreen={setHomeScreen}
          setCapitalsScreen={setCapitalsScreen}
          setFlagsScreen={setFlagsScreen}
        />
      )}

      {(capitalsScreen || flagsScreen) && (
        <Quiz
          nextQuestion={nextQuestion}
          setNextQuestion={setNextQuestion}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
          gameOver={gameOver}
          setGameOver={setGameOver}
          count={count}
          setCount={setCount}
          setResultScreen={setResultScreen}
          capitalsScreen={capitalsScreen}
          setCapitalsScreen={setCapitalsScreen}
          flagsScreen={flagsScreen}
          setFlagsScreen={setFlagsScreen}
        />
      )}

      {resultScreen && (
        <Result
          count={count}
          setHomeScreen={setHomeScreen}
          setResultScreen={setResultScreen}
          setCount={setCount}
          setGameOver={setGameOver}
        />
      )}
    </div>
  );
}

export default App;
