export default function Word({ characters, guessedLetters, isGameOver }) {
  return (
    <div className="word">
      {characters.map((character, index) =>
        guessedLetters.includes(character) ? (
          <span key={index}>
            {isGameOver
              ? character
              : guessedLetters.includes(character)
              ? character
              : "?"}
          </span>
        ) : isGameOver ? (
          <span key={index} style={{ color: "red" }}>
            {isGameOver
              ? character
              : guessedLetters.includes(character)
              ? character
              : "?"}
          </span>
        ) : (
          <span key={index}>
            {isGameOver
              ? character
              : guessedLetters.includes(character)
              ? character
              : "?"}
          </span>
        )
      )}
    </div>
  );
}
