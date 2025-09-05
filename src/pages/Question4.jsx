import QuestionCard from '../components/QuestionCard';
import { saveAnswer } from '../utils';

export default function Question4() {
  const question = "Is there anything troubling you about your hair?";
  const options = ['Breakage', 'Frizz', 'Scalp dryness', 'Damage', 'Tangling'];

  const handleAnswer = (answer) => {
    saveAnswer('hairTrouble', answer);
  };

  return (
    <QuestionCard
      question={question}
      options={options}
      step={4}
      total={5}
      onAnswer={handleAnswer}
    />
  );
}
