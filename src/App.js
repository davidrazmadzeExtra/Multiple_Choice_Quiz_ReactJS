import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Capital Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: 3</h2>

      {/* 3. Question Card  */}
      <div className="question-card">
        {/* Current Question  */}
        <h2>Question: 1 out of 5</h2>
        <h3 className="question-text">What is the capital of America?</h3>

        {/* List of possible answers  */}
        <ul>
          <li>Boston</li>
          <li>Miami</li>
          <li>Washington DC</li>
          <li>Dallas</li>
        </ul>

      </div>

      {/* 4. Final Results */}
      <div className="final-results">
        <h1>Final Results</h1>
        <h2>1 out of 5 correct - (20%)</h2>
        <button>Restart game</button>
      </div>

    </div>
  );
}

export default App;
