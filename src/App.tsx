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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="title">Gen AI Collection</h1>
          <p className="subtitle">Click on any card to reveal the question</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`group perspective-1000 h-64 cursor-pointer ${
                flippedCards.includes(q.id) ? '[transform-style:preserve-3d] [transform:rotateY(180deg)]' : ''
              }`}
              onClick={() => toggleCard(q.id)}
            >
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]">
                <div className="card-front absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <span className="text-4xl font-bold mb-2">{q.id}</span>
                  <div className="text-5xl opacity-80">?</div>
                </div>
                <div className="card-back absolute w-full h-full rounded-xl shadow-lg p-6 flex items-center justify-center backface-hidden [transform:rotateY(180deg)]">
                  <p className="text-lg font-medium text-center">{q.question}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
