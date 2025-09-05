import QuestionCard from '../components/QuestionCard';
import { saveAnswer } from '../utils';

export default function Question5() {
  const question = "What is your natural hair color(s) today?";
  const options = ['Black', 'Brown', 'Blonde', 'Red/Orange', 'Silver/Grey'];

  const handleAnswer = (answer) => {
    saveAnswer('hairColor', answer); // last answer saved!
  };

  return (
    <QuestionCard
      question={question}
      options={options}
      step={5}
      total={5}
      onAnswer={handleAnswer}
    />
  );
}
