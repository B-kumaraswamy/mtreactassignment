import React, { useState, useEffect } from 'react';
import './Problem4.css';

const Problem4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);  // To track which box has the keyword
  const [score, setScore] = useState(0);  // To track the score
  const [timeLeft, setTimeLeft] = useState(60);  // Game duration (60 seconds)
  const [gameRunning, setGameRunning] = useState(true);  // To track if the game is running
  const [hasClicked, setHasClicked] = useState(false);  // Track if the user has clicked during the current window
  const [wrongHitIndex, setWrongHitIndex] = useState(null);  // Track the box clicked incorrectly
  const [correctHitIndex, setCorrectHitIndex] = useState(null);  // Track the box clicked correctly

  
  const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];


  const getRandomIndex = () => Math.floor(Math.random() * 9);

 
  const handleClick = (index) => {
    if (!gameRunning) return;  // Do nothing if the game is over

    setHasClicked(true);  

    if (index === activeIndex) {
      setScore((prevScore) => prevScore + 5);  
      setCorrectHitIndex(index);  
      setWrongHitIndex(null);  
      // Remove the green highlight after a brief delay (e.g., 500ms)
      setTimeout(() => setCorrectHitIndex(null), 500);
    } else {
      setScore((prevScore) => prevScore - 2.5);  
      setWrongHitIndex(index);  
      // Remove the red highlight after a brief delay (e.g., 500ms)
      setTimeout(() => setWrongHitIndex(null), 500);
    }
  };

  // Game timer and logic to randomly display the keyword "HIT"
  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        if (!hasClicked && activeIndex !== null) {
          // If the user didn't click and "HIT" was shown, deduct points
          setScore((prevScore) => prevScore - 2.5);
        }

        setActiveIndex(getRandomIndex());  // Move the keyword to a random box every second
        setHasClicked(false);  // Reset the click tracker for the next window
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setGameRunning(false);  // End the game after 60 seconds
      setActiveIndex(null);  // Remove the keyword "HIT"
    }
  }, [timeLeft, hasClicked, activeIndex]);

  return (
    <div className="problem4">
      <h1>Hit the Box Game</h1>
      <div className="grid">
        {boxes.map((index) => (
          <div
            key={index}
            className={`box 
              ${index === activeIndex ? 'active' : ''} 
              ${index === wrongHitIndex ? 'wrong-hit' : ''} 
              ${index === correctHitIndex ? 'correct-hit' : ''}`
            }
            onClick={() => handleClick(index)}
          >
            {index === activeIndex && gameRunning ? 'HIT' : ''}
          </div>
        ))}
      </div>
      <div className="info">
        <p>Time Left: {timeLeft}s</p>
        {gameRunning && <p>Score: {score}</p>}
        {!gameRunning && <p>Game Over! Final Score: {score}</p>}
      </div>
    </div>
  );
};

export default Problem4;