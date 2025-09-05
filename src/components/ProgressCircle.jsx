export default function ProgressCircle({ step, total }) {
    const percentage = (step / total) * 100;
  
    return (
      <div className="progress-circle">
        <svg width="60" height="60">
          <circle cx="30" cy="30" r="28" stroke="#eee" strokeWidth="4" fill="none" />
          <circle
            cx="30"
            cy="30"
            r="28"
            stroke="#f08"
            strokeWidth="4"
            fill="none"
            strokeDasharray={2 * Math.PI * 28}
            strokeDashoffset={2 * Math.PI * 28 * (1 - percentage / 100)}
            transform="rotate(-90 30 30)"
          />
        </svg>
        <span>{step}/{total}</span>
      </div>
    );
  }
  