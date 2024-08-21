import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "=") {
      try {
        if (input === "") {
          setOutput("Error");
        } else {
          const result = eval(input);
          setOutput(result.toString());
        }
      } catch (error) {
        setOutput("Error");
      }
     
    }
    else {
        setInput(input + value);
      }
}

    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div className="output">{output}</div>
        <div className="buttons">
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((button) => (
            <button key={button} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    );
  };



export default Calculator;
