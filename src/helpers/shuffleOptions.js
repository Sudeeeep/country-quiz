export const shuffleOptions = (options) => {
  let shuffledOptions = [];
  let i = 0;
  while (i < options.length) {
    let random = Math.floor(Math.random() * options.length);
    if (!shuffledOptions.includes(options[random])) {
      shuffledOptions.push(options[random]);
      i++;
    }
  }
  return shuffledOptions;
};
