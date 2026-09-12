import { useState } from "react";
import { names } from "./names.js";
import { Card } from "./Components/Card.jsx";
import "./App.css";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [list, setList] = useState(names);
  const [clicked, setClicked] = useState([]);
  const [scores, setScores] = useState({ score: 0, highScore: 0 });

  function resetGame() {
    setScores({ ...scores, score: 0 });
    setClicked([]);
  }

  function increaseScores() {
    const newScore = scores.score + 1;
    const highScore = scores.highScore;
    const bestScore = newScore > highScore ? newScore : highScore;
    setScores({ score: newScore, highScore: bestScore });
  }

  function cardClick(pokemon) {
    setList(shuffle(names));
    if (clicked.includes(pokemon)) {
      resetGame();
    } else {
      increaseScores();
      setClicked([...clicked, pokemon]);
    }
  }

  return (
    <div>
      <div className="copy-container">
        <h1>Don't Click the Ditto!</h1>
        <h1 className="copy">Don't Click the Ditto!</h1>
      </div>
      <div className="copy-container">
        <p>How to Play:</p>
        <p className="copy">How to Play:</p>
      </div>
      <div className="copy-container">
        <p>
          Click on any Pokemon. If you clicked a Pokemon you already clicked
          before, that means you just clicked on Ditto! This is a memorization
          game. Remember the cards you already clicked, click on new cards to
          increase your score!
        </p>
        <p className="copy">
          Click on any Pokemon. If you clicked a Pokemon you already clicked
          before, that means you just clicked on Ditto! This is a memorization
          game. Remember the cards you already clicked, click on new cards to
          increase your score!
        </p>
      </div>
      <div className="copy-container">
        <h2>
          Score: {scores.score} | High-Score: {scores.highScore}
        </h2>
        <h2 className="copy">
          Score: {scores.score} | High-Score: {scores.highScore}
        </h2>
      </div>

      <div className="card-container">
        {list.map((pokemon) => (
          <Card
            name={pokemon}
            onClick={() => {
              cardClick(pokemon);
            }}
            key={pokemon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
