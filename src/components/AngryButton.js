import { useState } from "react";

function AngryButton(){
  let [anger, setAnger] = useState(0);
  const handleClick = () => {
    if (anger > 1) {
      setAnger(0);
    } else {
      setAnger(anger + 0.1)
    }
  }
  return (
    <button onClick={handleClick} style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
      {/* If you have NOT reached the maximum */}{anger < 1 && <span>Don't click me too much! </span>}
      {/* If you HAVE reached the maximum */}{anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;