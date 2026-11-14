export default function Scoreboard({ score }) {
  return (
    <div className="score">
      <div className="x">X<strong>{score.X}</strong></div>
      <div>Draws<strong>{score.draws}</strong></div>
      <div className="o">O<strong>{score.O}</strong></div>
    </div>
  );
}
