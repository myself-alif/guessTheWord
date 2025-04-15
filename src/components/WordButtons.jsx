export default function WordButtons({
  alphabets,
  handleClick,
  guessedLetters,
  wordCharacters,
  isGameOver,
}) {
  return (
    <div className="alphabets">
      {alphabets.map((letter) => (
        <button
          key={letter}
          className="alphabet"
          disabled={isGameOver}
          style={{
            backgroundColor: guessedLetters.includes(letter)
              ? wordCharacters.includes(letter)
                ? "green"
                : "red"
              : "#fcba29",
            pointerEvents: isGameOver ? "none" : "auto",
          }}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
