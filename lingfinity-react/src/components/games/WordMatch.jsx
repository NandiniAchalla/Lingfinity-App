// components/games/WordMatch.jsx
import React, { useState } from "react";

const words = [
  { word: "language", meaning: "A system of communication" },
  { word: "infinity", meaning: "Endless or limitless" },
  { word: "culture", meaning: "Customs and traditions" },
  { word: "express", meaning: "To convey a thought or feeling" },
];

export default function WordMatch() {
  const [matches, setMatches] = useState(words.map(w => ({ ...w, selected: false })));
  const [inputWord, setInputWord] = useState("");
  const [inputMeaning, setInputMeaning] = useState("");
  const [message, setMessage] = useState("");

  const checkMatch = () => {
    const found = matches.find(
      m => m.word === inputWord && m.meaning === inputMeaning && !m.selected
    );

    if (found) {
      setMatches(matches.map(m => m === found ? { ...m, selected: true } : m));
      setMessage("✅ Correct match!");
    } else {
      setMessage("❌ Wrong match!");
    }

    setInputWord("");
    setInputMeaning("");
  };

  return (
    <div className="game-box">
      <h2>Word Match</h2>
      <p>Words: {matches.map(m => m.selected ? "✅" : m.word).join(", ")}</p>
      <p>Meanings: {matches.map(m => m.selected ? "✅" : m.meaning).join(", ")}</p>

      <input
        type="text"
        placeholder="Word"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Meaning"
        value={inputMeaning}
        onChange={(e) => setInputMeaning(e.target.value)}
      />
      <button onClick={checkMatch}>Check Match</button>
      <p>{message}</p>
    </div>
  );
}
