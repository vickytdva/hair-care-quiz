import QuestionCard from '../components/QuestionCard';
import { saveAnswer } from '../utils';

// first question of the quiz! 
export default function Question1() {
  const question = "What's your hair type or texture?";
  const options = ['Straight', 'Curly', 'Wavy', 'Fine'];

  
  const handleAnswer = (answer) => {
    saveAnswer('hairType', answer); // save it in localStorage so we can use later
  };

  return (
    <QuestionCard
      question={question}
      options={options}
      step={1} // used for progress circle
      total={5}
      onAnswer={handleAnswer}
    />
  );
}
