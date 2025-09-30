// components/games/WordScramble.jsx
import React, { useState } from "react";

const words = ["culture", "language", "infinity","express","train","aesthetic"];

function shuffleWord(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

export default function WordScramble() {
  const [word, setWord] = useState(words[0]);
  const [scrambled, setScrambled] = useState(shuffleWord(words[0]));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    if (guess.toLowerCase() === word) {
      setMessage("✅ Correct!");
      const newWord = words[Math.floor(Math.random() * words.length)];
      setWord(newWord);
      setScrambled(shuffleWord(newWord));
      setGuess("");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div className="game-box">
      <h2>Word Scramble</h2>
      <p>Scrambled: <b>{scrambled}</b></p>
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
