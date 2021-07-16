import Ring from "./Ring";

export default function AccuracyRatio({ correct, incorrect }) {
  const total = correct + incorrect;
  const accuracy = (correct / (total || 1)) * 100;
  const correctRatio = accuracy === 0 ? 0 : correct / total;
  const incorrectRatio = 1 - correctRatio;

  return (
    <svg width="200" height="200">
      <Ring color="dodgerblue" size={200} ratio={correctRatio} clockwise={true} />
      <Ring color="tomato" size={200} ratio={incorrectRatio} clockwise={false} />
      <text x="50%" y="40%" textAnchor="middle" fontSize="1.5em">
        Accuracy
      </text>
      <text x="50%" y="60%" textAnchor="middle" fontSize="1.5em">
        {accuracy && accuracy.toFixed(2)}%
      </text>
    </svg>
  );
}
