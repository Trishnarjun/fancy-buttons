import { useState } from "react";

function TextRepeaterButton(){
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }
  return (
    <button onClick={() => setRepetitions(repetitions + 1)} className="TextRepeaterButton">
      {textArray}
    </button>
  );
}

export default TextRepeaterButton;