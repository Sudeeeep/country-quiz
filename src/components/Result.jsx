import resultLogo from "../assets/undraw_winners_ao2o 2.svg";
import propTypes from "prop-types";

export const Result = ({
  count,
  setHomeScreen,
  setResultScreen,
  setCount,
  setGameOver,
}) => {
  return (
    <div className="flex flex-col gap-2 relative max-w-md m-auto mt-10 pt-10">
      <h1 className="text-xl font-bold text-[#F2F2F2] sm:text-4xl">
        COUNTRY QUIZ
      </h1>
      <div className="bg-white p-6 rounded-2xl flex flex-col items-center gap-6">
        <img src={resultLogo} alt="logo" />
        <h1 className="text-3xl font-bold text-[#1D355D] sm:text-5xl">
          Results
        </h1>
        <p>
          You got{" "}
          <span className="text-[#6FCF97] text-2xl font-bold">{count}</span>{" "}
          correct answers
        </p>
        <button
          onClick={() => {
            setHomeScreen(true);
            setResultScreen(false);
            setCount(0);
            setGameOver(false);
          }}
          className="border-2 border-[#1D355D] text-[#1D355D] font-medium px-6 py-2 rounded-lg transition hover:bg-[#F9A826] hover:border-white hover:text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

Result.propTypes = {
  count: propTypes.number,
  setHomeScreen: propTypes.func,
  setResultScreen: propTypes.func,
  setCount: propTypes.func,
  setGameOver: propTypes.func,
};
