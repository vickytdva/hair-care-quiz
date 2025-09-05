import { useNavigate } from 'react-router-dom';
import ProgressCircle from './ProgressCircle';

// This is our reusable question card 🎀
// Shows a question, all the options, a progress circle, and a back button if not first question
export default function QuestionCard({ question, options, step, total, onAnswer }) {
  const navigate = useNavigate();

  const handleSelect = (answer) => {
    onAnswer(answer); // save answer in localStorage

    // If we are not at the last question, go to next question
    if (step < total) {
      navigate(`/question${step + 1}`);
    } else {
      navigate('/results'); // last question? yay, show results!
    }
  };

  return (
    <div className="question-card container">
      {/* progress circle at the top */}
      <ProgressCircle step={step} total={total} />

      {/* The main question */}
      <h2>{question}</h2>

      {/* Options as buttons */}
      <div className="options">
        {options.map((opt, idx) => (
          <button key={idx} onClick={() => handleSelect(opt)}>
            {opt}
          </button>
        ))}
      </div>

      {/* Back button: only show if step > 1 */}
      {step > 1 && (
        <button
          className="back-btn"
          onClick={() => navigate(`/question${step - 1}`)}
        >
          Back
        </button>
      )}
    </div>
  );
}
