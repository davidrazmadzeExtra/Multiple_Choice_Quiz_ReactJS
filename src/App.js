import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [ 
    {
      text: 'What is the capital of America?',
      options: [ 
        { text: 'New York City', isCorrect: false},
        { text: 'Boston', isCorrect: false},
        { text: 'Santa Fe', isCorrect: false},
        { text: 'Washington DC', isCorrect: true},
      ]
    },
    {
      text: 'What year was the Constitution of America written?',
      options: [ 
        { text: '1787', isCorrect: true},
        { text: '1776', isCorrect: false},
        { text: '1774', isCorrect: false},
        { text: '1826', isCorrect: false},
      ]
    },
    {
      text: 'Who was the second president of the US?',
      options: [ 
        { text: 'John Adams', isCorrect: true},
        { text: 'Paul Revere', isCorrect: false},
        { text: 'Thomas Jefferson', isCorrect: false},
        { text: 'Benjamin Franklin', isCorrect: false},
      ]
    },
    {
      text: 'What is the largest state in the US?',
      options: [ 
        { text: 'California', isCorrect: false},
        { text: 'Alaska', isCorrect: true},
        { text: 'Texas', isCorrect: false},
        { text: 'Montana', isCorrect: false},
      ]
    },
    {
      text: 'Which of the following countries DO NOT border the US?',
      options: [ 
        { text: 'Canada', isCorrect: false},
        { text: 'Russia', isCorrect: true},
        { text: 'Cuba', isCorrect: true},
        { text: 'Mexico', isCorrect: false},
      ]
    }
  ]

  // Helper Functions 

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Capital Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>1 out of 5 correct - (20%)</h2>
          <button>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (<li>{option.text}</li>);
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
