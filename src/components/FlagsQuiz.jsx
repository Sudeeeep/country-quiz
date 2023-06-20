import { useRef } from "react";
import quizLogo from "../assets/undraw_adventure_4hum 1.svg";
import propTypes from "prop-types";
import { useFetchQuizData } from "../hooks/useFetchQuizData";

export const FlagsQuiz = ({
  nextQuestion,
  setNextQuestion,
  optionSelected,
  setOptionSelected,
  count,
  setCount,
  setResultScreen,
  gameOver,
  setGameOver,
  setFlagsScreen,
}) => {
  // const [countries, setCountries] = useState([]);
  // const [correctCountry, setCorrectCountry] = useState("");
  // const [flag, setFlag] = useState("");

  const { options, correctAnswer, loading, flag, setOptions } =
    useFetchQuizData(nextQuestion);

  const optionAlphabets = ["A", "B", "C", "D"];

  const buttonRef = useRef(null);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all?fields=name,flags")
  //     .then(({ data }) => {
  //       let randomOptions = [];
  //       for (let i = 0; i < 3; i++) {
  //         randomOptions.push(data[Math.floor(Math.random() * 250)].name.common);
  //       }
  //       const random = Math.floor(Math.random() * 250);
  //       randomOptions.push(data[random].name.common);
  //       setCorrectCountry(data[random].name.common);
  //       setCountries(countries.concat(shuffleOptions(randomOptions)));
  //       setFlag(data[random].flags.png);
  //       setOptionSelected(false);
  //     });
  // }, [nextQuestion]);

  const handleClick = (e) => {
    setOptionSelected(true);
    e.currentTarget.classList.add("text-white");
    e.currentTarget.classList.add("border-white");

    if (e.currentTarget.name === correctAnswer) {
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

      buttonRef.current.children[correctAnswer].classList.add("border-white");
      buttonRef.current.children[correctAnswer].classList.add("text-white");
      buttonRef.current.children[correctAnswer].classList.add("bg-[#60BF88]");
      buttonRef.current.children[correctAnswer].classList.replace(
        "hover:bg-[#F9A826]",
        "hover:bg-[#60BF88]"
      );
      setGameOver(true);
    }
  };

  const handleNextQuestion = () => {
    setOptionSelected(false);
    if (gameOver) {
      setResultScreen(true);
      setFlagsScreen(false);
    } else {
      setNextQuestion(true);
      setOptions([]);
      if (nextQuestion === true) {
        setNextQuestion(false);
      }
    }
  };

  if (loading) {
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
          <h1 className="text-[#2F527B] pt-3 font-bold sm:pt-6 sm:text-lg text-center">
            LOADING...
          </h1>
        </div>
      </div>
    );
  }

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
          <div>
            <img className="w-20 sm:w-24 sm:h-16" src={flag} alt="flag" />
          </div>
          <p className="text-[#2F527B] pt-3 font-bold  sm:text-lg">
            Which country does this flag belong to?
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

FlagsQuiz.propTypes = {
  nextQuestion: propTypes.bool,
  setNextQuestion: propTypes.func,
  optionSelected: propTypes.bool,
  setOptionSelected: propTypes.func,
  count: propTypes.number,
  setCount: propTypes.func,
  setResultScreen: propTypes.func,
  gameOver: propTypes.bool,
  setGameOver: propTypes.func,
  setFlagsScreen: propTypes.func,
};
