import { useState, useEffect, useRef } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Games from "./components/pages/Games";
import WordScramble from "./components/games/WordScramble";
import WordGuess from "./components/games/WordGuess";
import WordMatch from "./components/games/WordMatch";

function App() {
  const fullText = `“ To Have Another Language Is To Possess A Second Soul.”`;
  const author = `\n\n- Charlemagne`;

  const [typedText, setTypedText] = useState("");
  const [typedAuthor, setTypedAuthor] = useState("");

  const speed = 90;
  const index = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const typeWriter = () => {
      if (index.current < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index.current));
        index.current += 1;
        timeoutRef.current = setTimeout(typeWriter, speed);
      } else if (index.current < fullText.length + author.length) {
        const authorIndex = index.current - fullText.length;
        setTypedAuthor(prev => prev + author.charAt(authorIndex));
        index.current += 1;
        timeoutRef.current = setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
    return () => clearTimeout(timeoutRef.current);
  }, [author, fullText]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="left">
          <div className="quote">
            <p>{typedText}</p>
            <p className="author">{typedAuthor}</p>
          </div>
        </div>
        <div className="right-box">
          <h2 className="word-title">Word of the Day</h2>
          <div className="word-box">
            <h3 className="word">Serendipity</h3>
            <p className="meaning">
              The occurrence of happy or beneficial events by chance.
            </p>
          </div>
        </div>
      </div>

      {/* Games section */}
<div className="games-page">
  <div className="games-container">
    <WordScramble />
    <WordGuess />
    <WordMatch />
  </div>
</div>

      <Footer />
    </>
  );
}

export default App;
