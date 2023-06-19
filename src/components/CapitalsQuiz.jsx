import { useEffect, useRef, useState } from "react";
import quizLogo from "../assets/undraw_adventure_4hum 1.svg";
import axios from "axios";
import { shuffleOptions } from "../helpers/shuffleOptions";
import propTypes from "prop-types";

export const CapitalsQuiz = ({
  nextQuestion,
  setNextQuestion,
  optionSelected,
  setOptionSelected,
  count,
  setCount,
  setResultScreen,
  gameOver,
  setGameOver,
  setCapitalsScreen,
}) => {
  const [country, setCountry] = useState(null);
  const [options, setOptions] = useState([]);

  const buttonRef = useRef(null);

  const optionAlphabets = ["A", "B", "C", "D"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital")
      .then(({ data }) => {
        let randomOptions = [];
        for (let i = 0; i < 3; i++) {
          randomOptions.push(data[Math.floor(Math.random() * 250)].name.common);
        }
        const random = Math.floor(Math.random() * 250);
        randomOptions.push(data[random].name.common);
        setOptions(options.concat(shuffleOptions(randomOptions)));
        setCountry(data[random]);
        setOptionSelected(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nextQuestion]);

  const handleClick = (e) => {
    setOptionSelected(true);
    e.currentTarget.classList.add("text-white");
    e.currentTarget.classList.add("border-white");

    if (e.currentTarget.name === country.name.common) {
      e.currentTarget.classList.add("bg-[#60BF88]");
      e.currentTarget.classList.replace(
        "hover:bg-[#F9A826]",
        "hover:bg-[#60BF88]"
      );
      setCount(count + 1);
    } else {
      e.currentTarget.classList.add("bg-[#EA8282]");
      e.currentTarget.classList.replace(
        "hover:bg-[#F9A826]",
        "hover:bg-[#EA8282]"
      );

      buttonRef.current.children[country.name.common].classList.add(
        "border-white"
      );
      buttonRef.current.children[country.name.common].classList.add(
        "text-white"
      );
      buttonRef.current.children[country.name.common].classList.add(
        "bg-[#60BF88]"
      );
      buttonRef.current.children[country.name.common].classList.replace(
        "hover:bg-[#F9A826]",
        "hover:bg-[#60BF88]"
      );
      setGameOver(true);
    }
  };

  const handleNextQuestion = () => {
    if (gameOver) {
      setResultScreen(true);
      setCapitalsScreen(false);
    } else {
      setNextQuestion(true);
      setCountry(null);
      setOptions([]);
      if (nextQuestion === true) {
        setNextQuestion(false);
      }
    }
  };

  return (
    <div className="flex flex-col mt-40 gap-2 relative max-w-md m-auto pt-10 sm:mt-10">
      <h1 className="text-xl font-bold text-[#F2F2F2] sm:text-4xl">
        COUNTRY QUIZ
      </h1>
      <div className="bg-white p-6 rounded-2xl">
        <img
          src={quizLogo}
          alt="logo"
          className="absolute right-0 top-2 w-32 sm:w-fit sm:top-0"
        />
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-[#2F527B] pt-3 font-bold sm:pt-6 sm:text-lg">
            {country && country.capital} is the capital of
          </p>

          <div className="flex flex-col gap-4" ref={buttonRef}>
            {options.map((option, index) => (
              <button
                name={option}
                key={index}
                className="flex gap-10 items-center border-2 border-[#6066D0] text-[#6066D0] font-medium px-2 py-1 rounded-lg transition hover:bg-[#F9A826] hover:border-white hover:text-white"
                onClick={!optionSelected ? handleClick : null}
              >
                <span className="sm:text-lg">{optionAlphabets[index]}</span>
                <span className="sm:text-md font-bold">{option}</span>
              </button>
            ))}
          </div>

          <div className="self-end">
            {optionSelected && (
              <button
                className="bg-[#F9A826] text-[#F2F2F2] px-6 py-2 rounded-lg transition hover:scale-[1.02]"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CapitalsQuiz.propTypes = {
  nextQuestion: propTypes.bool,
  setNextQuestion: propTypes.func,
  optionSelected: propTypes.bool,
  setOptionSelected: propTypes.func,
  count: propTypes.number,
  setCount: propTypes.func,
  setResultScreen: propTypes.func,
  gameOver: propTypes.bool,
  setGameOver: propTypes.func,
  setCapitalsScreen: propTypes.func,
};
