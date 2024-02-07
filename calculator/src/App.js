
import './App.css';
import React, { useState } from "react";
//import ReactDOM from "react-dom";


export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" className="input" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "/"].map(
          (value, index) => (
            <button
              key={index}
              onClick={() => {
                if (value === "C") {
                  clearExpression();
                } else if (value === "=") {
                  evaluateExpression();
                } else {
                  handleButtonClick(value);
                }
              }}
            >
              {value}
            </button>
          )
        )}
        <button onClick={() => evaluateExpression()}>=</button>
      </div>
    </div>
  );
}


