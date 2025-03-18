import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
}

function App() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const questions: Question[] = [
    { id: 1, question: "What are the key benefits of using GenAI in business?" },
    { id: 2, question: "How can GenAI improve customer service?" },
    { id: 3, question: "What are the ethical considerations in GenAI implementation?" },
    { id: 4, question: "How can GenAI enhance productivity in the workplace?" },
    { id: 5, question: "What are the main challenges in GenAI adoption?" },
    { id: 6, question: "How can GenAI be used in education?" },
    { id: 7, question: "What are the future trends in GenAI?" },
    { id: 8, question: "How can GenAI help in data analysis?" }
  ];

  const toggleCard = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Gen AI Collection</h1>
        <p className="subtitle">Click on any card to reveal the question</p>
      </div>
      <div className="cards-container">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`card ${flippedCards.includes(q.id) ? 'flipped' : ''}`}
            onClick={() => toggleCard(q.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="card-number">{q.id}</span>
                <div className="card-icon">?</div>
              </div>
              <div className="card-back">
                <p>{q.question}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
