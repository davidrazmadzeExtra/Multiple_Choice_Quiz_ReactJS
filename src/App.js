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

        <ul>
          <li>Boston</li>
          <li>Miami</li>
          <li>Washington DC</li>
          <li>Dallas</li>
        </ul>

      </div>

    </div>
  );
}

export default App;
