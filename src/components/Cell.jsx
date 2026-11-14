export default function Cell({ value, index, onClick, disabled, isWinning }) {
  return (
    <button
      className={"cell" + (isWinning ? " win" : "")}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Square ${index + 1}${value ? ", " + value : ", empty"}`}
    >
      {value && <span className={"mark " + value.toLowerCase()}>{value}</span>}
    </button>
  );
}
