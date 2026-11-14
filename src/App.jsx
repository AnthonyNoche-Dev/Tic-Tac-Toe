import { useState } from "react";
import Board from "./components/Board.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import { getResult } from "./utils/getResult.js";

const emptyBoard = () => Array(9).fill(null);
const emptyScore = () => ({ X: 0, O: 0, draws: 0 });

export default function App() {
  const [squares, setSquares] = useState(emptyBoard);
  const [xTurn, setXTurn] = useState(true);
  const [score, setScore] = useState(emptyScore);

  const result = getResult(squares);
  const player = xTurn ? "X" : "O";

  function play(i) {
    if (squares[i] || result) return;
    const next = squares.slice();
    next[i] = player;
    setSquares(next);
    setXTurn(!xTurn);

    const r = getResult(next);
    if (r) {
      setScore((s) =>
        r.winner ? { ...s, [r.winner]: s[r.winner] + 1 } : { ...s, draws: s.draws + 1 }
      );
    }
  }

  function newRound() {
    setSquares(emptyBoard());
    setXTurn(true);
  }

  function resetAll() {
    newRound();
    setScore(emptyScore());
  }

  const status = result ? (
    result.winner ? (
      <><b className={result.winner.toLowerCase()}>{result.winner}</b> wins this round.</>
    ) : (
      "It’s a draw."
    )
  ) : (
    <><b className={player.toLowerCase()}>{player}</b>’s turn</>
  );

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <p className="status" aria-live="polite">{status}</p>
      <Board squares={squares} result={result} onPlay={play} />
      <Scoreboard score={score} />
      <div className="row">
        <button className="act" onClick={newRound}>New round</button>
        <button className="act alt" onClick={resetAll}>Reset score</button>
      </div>
    </main>
  );
}
