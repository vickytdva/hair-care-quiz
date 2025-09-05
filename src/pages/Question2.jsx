import QuestionCard from '../components/QuestionCard';
import { saveAnswer } from '../utils';


export default function Question2() {
  const question = "How often do you wash your hair?";
  const options = [
    'Daily', 
    'Every other day', 
    'Twice a week', 
    'Once a week', 
    'Once every two weeks'
  ];

  const handleAnswer = (answer) => {
    saveAnswer('washFrequency', answer);
  };

  return (
    <QuestionCard
      question={question}
      options={options}
      step={2}
      total={5}
      onAnswer={handleAnswer}
    />
  );
}
