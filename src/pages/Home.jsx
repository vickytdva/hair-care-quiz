import { useNavigate } from 'react-router-dom';
import '../'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>✨ Find Your Perfect Hair Care Routine ✨</h1>
        <p className="subtitle">
          Answer a few quick questions and get product recommendations just for you 💖
        </p>
        <button className="start-btn" onClick={() => navigate('/question1')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
