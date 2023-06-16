import countryIcon from "../assets/countries.png";
import flagIcon from "../assets/red-flag.png";
import propTypes from "prop-types";

export const Home = ({ setHomeScreen, setCapitalsScreen, setFlagsScreen }) => {
  const toggleCapitalsQuiz = () => {
    setHomeScreen(false);
    setCapitalsScreen(true);
  };

  const toggleFlagsQuiz = () => {
    setHomeScreen(false);
    setFlagsScreen(true);
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-[#F2F2F2] mt-10">
        COUNTRY QUIZ
      </h1>
      <div className="flex flex-col gap-10 justify-center mt-10 sm-[530px]:flex-row">
        <div className="bg-white p-6 flex flex-col items-center gap-6 rounded-xl">
          <img className="w-20" src={countryIcon} alt="countries icon" />
          <h2 className="text-[#2F527B] font-bold ">GUESS THE CAPITAL</h2>
          <button
            className="px-6 py-3 border-2 border-[#6066D0] transition rounded-lg hover:bg-[#F9A826] hover:border-white hover:text-white hover:scale-105"
            onClick={toggleCapitalsQuiz}
          >
            START QUIZ
          </button>
        </div>
        <div className="bg-white p-6 flex flex-col items-center gap-6 rounded-xl">
          <img
            className="w-20 self-center"
            src={flagIcon}
            alt="countries icon"
          />
          <h2 className="text-[#2F527B] font-bold">GUESS THE FLAG</h2>
          <button
            className="px-6 py-3 border-2 border-[#6066D0] transition rounded-lg hover:bg-[#F9A826] hover:border-white hover:text-white hover:scale-105"
            onClick={toggleFlagsQuiz}
          >
            START QUIZ
          </button>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  setHomeScreen: propTypes.func,
  setCapitalsScreen: propTypes.func,
  setFlagsScreen: propTypes.func,
};
