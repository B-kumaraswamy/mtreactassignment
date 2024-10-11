
import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProblemSelector.css'
const ProblemSelector = () => {
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
};

export default ProblemSelector;