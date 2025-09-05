import QuestionCard from '../components/QuestionCard';
import { saveAnswer } from '../utils';


export default function Question3() {
  const question = "What benefit do you look for in your hair products?";
  const options = [
    'Anti-breakage',
    'Hydration',
    'Soothing dry scalp',
    'Repairs the appearance of damaged hair',
    'Volume',
    'Curl and coil enhancing'
  ];

  const handleAnswer = (answer) => {
    saveAnswer('hairBenefit', answer); // saving it all for later
  };

  return (
    <QuestionCard
      question={question}
      options={options}
      step={3}
      total={5}
      onAnswer={handleAnswer}
    />
  );
}
