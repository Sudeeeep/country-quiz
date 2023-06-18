import { useEffect, useState } from "react";
import quizLogo from "../assets/undraw_adventure_4hum 1.svg";
import axios from "axios";
import { shuffleOptions } from "../helpers/shuffleOptions";

export const CapitalsQuiz = () => {
  const [country, setCountry] = useState(null);
  const [options, setOptions] = useState([]);
  // const [optionSelected, setOptionSelected] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital")
      .then(({ data }) => {
        let randomOptions = [];
        for (let i = 0; i < 3; i++) {
          randomOptions.push(data[Math.floor(Math.random() * 250)].name.common);
        }
        const random = Math.floor(Math.random() * 250);
        setOptions(options.concat(data[random].name.common, randomOptions));
        setCountry(data[random]);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 relative max-w-md m-auto mt-10 pt-10">
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
          {shuffleOptions(options).map((option, index) => (
            <button
              key={index}
              className="border-2 border-[#6066D0] text-[#6066D0] font-medium px-2 py-1 rounded-lg transition hover:bg-[#F9A826] hover:border-white hover:text-white"
            >
              <div className="flex gap-10 items-center">
                <span className="sm:text-lg">A</span>
                <span className="sm:text-md font-bold">{option}</span>
              </div>
            </button>
          ))}
          <div className="self-end">
            <button className="bg-[#F9A826] text-[#F2F2F2] px-6 py-2 rounded-lg transition hover:scale-[1.02]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};