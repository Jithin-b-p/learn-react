export default function ProgressBar({ value }) {
  return (
    <div className="progressbar">
      <span className={`${value > 50 ? "progressbar--halfed" : ""}`}>
        {value}%
      </span>
      <progress
        max={100}
        className={`${value === 100 ? "progressbar--finished" : ""}`}
        value={value}
        aria-label="progress bar"
      >
        {value} %
      </progress>
    </div>
  );
}
