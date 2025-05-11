import { useState, useEffect } from 'react'

interface Question {
  id: number;
  question: string;
}

const App = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const questions: Question[] = [
    { id: 1, question: "Can India move from a service based to manufacturing based in terms of AI? Can our path be different from the internet service model in the 90s?" },
    { id: 2, question: "What is an interesting usecase of Ai that surprises you the most?" },
    { id: 3, question: "What is the one AI tool do you use daily?" },
    { id: 4, question: "Recently, a lot of AI providers are invesing in adding guardrails on their LLMs. Do you think it's a necessary or decorative expenditure?" },
    { id: 5, question: "Does AI enhance creativity or stunt it, both professionally and personally?" },
    { id: 6, question: "Are AI Agents the Future? – Will autonomous AI agents replace traditional apps and interfaces?" },
    { id: 7, question: "How is AI changing your work?" },
    { id: 8, question: "What is the biggest Challenges you want to solve with AI?" }
  ];

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (isRunning) {
      // Reset everything when stopping
      setFlippedCards([]);
      setTime(0);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleCard = (id: number) => {
    if (!isRunning) return; // Only allow card flips when timer is running
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
          <h1 className="text-[#0d68a8] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
            Gen AI Collection
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Click on any card to reveal the question
          </p>
          
          {/* Timer Section */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="text-3xl font-bold font-mono text-[#296885]">
              {formatTime(time)}
            </div>
            <button
              onClick={toggleTimer}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 ${
                isRunning
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-[#296885] hover:bg-[#1a4b6b]'
              }`}
            >
              {isRunning ? 'Stop & Reset' : 'Start Quiz'}
            </button>
            {!isRunning && flippedCards.length > 0 && (
              <p className="text-gray-600 mt-2">
                You revealed {flippedCards.length} out of 8 questions in {formatTime(time)}
              </p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {questions.map((q) => (
            <div
              key={q.id}
              onClick={() => toggleCard(q.id)}
              className={`group h-64 perspective-1000 cursor-pointer transition-opacity ${
                !isRunning ? 'opacity-75 pointer-events-none' : ''
              }`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                  flippedCards.includes(q.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-[#db3b13] to-[#ee721d] text-white p-6 flex flex-col items-center justify-center backface-hidden shadow-lg hover:shadow-xl transition-shadow">
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