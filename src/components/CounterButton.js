import { useState } from "react";

function CounterButton(){
  const [clickAmount, setClickAmount] = useState(0);
  return (
    <button onClick={() => setClickAmount(clickAmount + 1)} className="CounterButton">
      You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;