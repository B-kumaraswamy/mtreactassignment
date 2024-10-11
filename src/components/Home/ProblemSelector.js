import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProblemSelector.css';

const ProblemSelector = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Update the state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the desktop content if the screen width is greater or equal to 1024px
  if (isDesktop) {
    return (
      <div className="problem-selector">
        <h2>Select a Problem</h2>
        <ul>
          <li>
            <Link to="/problem1">Problem 1</Link>
          </li>
          <li>
            <Link to="/problem2">Problem 2</Link>
          </li>
          <li>
            <Link to="/problem3">Problem 3</Link>
          </li>
          <li>
            <Link to="/problem4">Problem 4</Link>
          </li>
          <li>
            <Link to="/problem5">Problem 5</Link>
          </li>
        </ul>
      </div>
    );
  }

  // Render the mobile message if the screen width is less than 1024px
  return (
    <div className="mobile-message">
      <h2>Open in Desktop</h2>
      <p>For a better experience, please open this application on a desktop device.</p>
    </div>
  );
};

export default ProblemSelector;