import { useState } from 'react'

interface Question {
  id: number;
  question: string;
}

const App = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[#296885] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
            Gen AI Collection
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Click on any card to reveal the question
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {questions.map((q) => (
            <div
              key={q.id}
              onClick={() => toggleCard(q.id)}
              className="group h-64 perspective-1000 cursor-pointer"
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                  flippedCards.includes(q.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#296885] to-[#1a4b6b] text-white p-6 flex flex-col items-center justify-center backface-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-4xl font-bold mb-4">{q.id}</span>
                  <span className="text-5xl opacity-80">?</span>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full rounded-xl bg-white p-6 flex items-center justify-center backface-hidden shadow-lg rotate-y-180">
                  <p className="text-[#296885] text-lg font-medium text-center">
                    {q.question}
                  </p>
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