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
    { id: 1, question: "Can Delhi Become a Global AI Hub? – What would it take for Delhi to establish itself as a major AI innovation center?" },
    { id: 2, question: "India’s Role in the Global AI Race – How does India stack up against the US, China, and Europe, and where should it focus?" },
    { id: 3, question: "Which Industries Will AI Disrupt First? – Are some sectors overhyped, while others are underexplored?" },
    { id: 4, question: "AI Adoption in Traditional Businesses – Beyond tech startups, how quickly are traditional industries actually integrating AI into operations?" },
    { id: 5, question: "The Future of AI Jobs – Will AI create more jobs than it replaces, or are we heading for mass displacement?" },
    { id: 6, question: "Are AI Agents the Future? – Will autonomous AI agents replace traditional apps and interfaces?" },
    { id: 7, question: "How Close Are We to True Autonomy? – What are the biggest challenges preventing AI agents from reliably operating in real-world environments?" },
    { id: 8, question: "Are AI Agents the Future? – Will autonomous AI agents replace traditional apps and interfaces?" }
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