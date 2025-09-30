// components/games/WordGuess.jsx
import React, { useState } from "react";

const words = ["language", "infinity", "culture", "express"];

export default function WordGuess() {
  const [word, setWord] = useState(words[0]);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const maskedWord = "_ ".repeat(word.length).trim();

  const checkGuess = () => {
    if (guess.toLowerCase() === word) {
      setMessage("✅ Correct!");
      const newWord = words[Math.floor(Math.random() * words.length)];
      setWord(newWord);
      setGuess("");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div className="game-box">
      <h2>Word Guess</h2>
      <p>Guess the word: <b>{maskedWord}</b></p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Your guess..."
      />
      <button onClick={checkGuess}>Check</button>
      <p>{message}</p>
    </div>
  );
}
