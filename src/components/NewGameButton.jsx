export default function NewGameButton({ reset }) {
  return (
    <div className="new-game-button">
      <button onClick={reset}>New Game</button>
    </div>
  );
}
