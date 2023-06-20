import axios from "axios";
import { useEffect, useState } from "react";
import { shuffleOptions } from "../helpers/shuffleOptions";

export const useFetchQuizData = (nextQuestion) => {
  const [options, setOptions] = useState([]);
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,capital,flags")
      .then(({ data }) => {
        let randomOptions = [];
        for (let i = 0; i < 3; i++) {
          randomOptions.push(data[Math.floor(Math.random() * 250)].name.common);
        }
        const random = Math.floor(Math.random() * 250);
        setCapital(data[random].capital[0]);
        setFlag(data[random].flags.png);
        setCorrectAnswer(data[random].name.common);
        randomOptions.push(data[random].name.common);
        setOptions(options.concat(shuffleOptions(randomOptions)));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [nextQuestion]);

  return {
    options,
    capital,
    correctAnswer,
    flag,
    loading,
    setCorrectAnswer,
    setOptions,
    setCapital,
    setFlag,
  };
};
