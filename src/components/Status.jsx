import { getFarewellText } from "../../utils";

export default function Status({
  isGameWon,
  isGameLost,
  isGameOver,
  lastGuessIncorrect,
  wrongGuessCount,
  languages,
}) {
  return (
    <div
      className="game-status"
      style={{
        backgroundColor: isGameWon ? "green" : isGameLost ? "red" : null,
        padding: isGameWon ? "10px" : isGameLost ? "10px" : null,
        marginBottom: isGameWon ? "30px" : isGameLost ? "30px" : null,
      }}
    >
      {isGameOver ? (
        isGameWon ? (
          <>
            <h4>You won!</h4>
            <p>Well done! 🎉</p>
          </>
        ) : (
          <>
            <h4>You lost!</h4>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )
      ) : lastGuessIncorrect ? (
        <p
          className="farewell-message"
          style={{
            backgroundColor: languages[wrongGuessCount - 1] ? "#7a5ea7" : null,
          }}
        >
          {languages[wrongGuessCount - 1]
            ? getFarewellText(languages[wrongGuessCount - 1].name)
            : null}
        </p>
      ) : (
        <p
          className="farewell-message"
          style={{
            opacity: "0",
          }}
        >
          placeholder
        </p>
      )}
    </div>
  );
}
