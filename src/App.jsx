import { useState } from "react";
import { names } from "./names.js";
import { Card } from "./Components/Card.jsx";
import "./App.css";

let score = 0;
let hightScore = 0;

function App() {
  return (
    <div>
      <h1>Don't Click the Ditto!</h1>
      <h2>
        Score: {score} | High-Score: {hightScore}
      </h2>
      <div className="card-container">
        {names.map((pokemon) => (
          <Card name={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
