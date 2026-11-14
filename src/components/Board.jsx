import Cell from "./Cell.jsx";

export default function Board({ squares, result, onPlay }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Cell
          key={i}
          index={i}
          value={value}
          onClick={() => onPlay(i)}
          disabled={!!value || !!result}
          isWinning={!!result && result.line.includes(i)}
        />
      ))}
    </div>
  );
}
