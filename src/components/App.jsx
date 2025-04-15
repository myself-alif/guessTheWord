import ReactConfetti from "react-confetti";
import Header from "./Header";
import Status from "./Status";
import { languages } from "../../languages";
import Languages from "./Languages";
import { useState } from "react";
import Word from "./Word";
import WordButtons from "./WordButtons";
import NewGameButton from "./NewGameButton";
import { getWord } from "../../utils";

export default function App() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const [word, setWord] = useState(() => getWord());
  const wordCharacters = word.split("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const wrongGuessCount = guessedLetters.filter(
    (guessedLetter) => !word.includes(guessedLetter)
  ).length;
  function handleClick(letter) {
    setGuessedLetters((prevValues) =>
      prevValues.includes(letter) ? prevValues : [...prevValues, letter]
    );
  }
  let isGameLost = languages.length - 1 === wrongGuessCount ? true : false;
  let isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  let isGameOver = isGameWon || isGameLost;

  let lastGuessIncorrect =
    guessedLetters.length &&
    !word.includes(guessedLetters[guessedLetters.length - 1]);

  function reset() {
    isGameOver = false;
    setGuessedLetters([]);
    setWord(getWord());
  }

  return (
    <main>
      {isGameWon && <ReactConfetti />}
      <Header />
      <Status
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        lastGuessIncorrect={lastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
        languages={languages}
      />
      <Languages languages={languages} wrongGuessCount={wrongGuessCount} />
      <Word
        characters={wordCharacters}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <WordButtons
        alphabets={alphabets.split("")}
        handleClick={handleClick}
        guessedLetters={guessedLetters}
        wordCharacters={wordCharacters}
        isGameOver={isGameOver}
      />
      {isGameOver && <NewGameButton reset={reset} />}
    </main>
  );
}
