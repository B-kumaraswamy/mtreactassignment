// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProblemSelector from './components/Home/ProblemSelector';
import Problem1 from './components/Problem1/Problem1';
import Problem2 from './components/Problem2/Problem2';
import Problem3 from './components/Problem3/Problem3';
import Problem4 from './components/Problem4/Problem4';
import Problem5 from './components/Problem5/Problem5';
import './App.css';
// You can import additional problems (Problem2, Problem3, etc.) as you create them.

function App() {


  return (
    <div className="App">
      {/* Wrap everything inside Router */}
      <Router>
        <Routes>
          {/* Route to ProblemSelector if no problem is selected */}
          <Route path="/" element={<ProblemSelector />} />
          
          {/* Route for Problem 1 */}
          <Route path="/problem1" element={<Problem1 />} />

          {/* Route for Problem 2 */}
          <Route path="/problem2" element={<Problem2 />} />

          {/* Route for Problem 3 */}
          <Route path="/problem3" element={<Problem3 />} />

          {/* Route for Problem 4 */}
          <Route path="/problem4" element={<Problem4 />} />

          {/* Route for Problem 5 */}
          { <Route path="/problem5" element={<Problem5 />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;