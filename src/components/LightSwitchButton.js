import { useState } from "react";

function LightSwitchButton(){
  let [light, setLight] = useState(1);
  console.log(`light:`,light)
  if (light !== 1) {
    return (
      <button onClick={() => setLight(light + 1)} className="LightSwitchButton">
        {/* When the state is on */}<span className="on"><i>💡</i> I'm on!</span>
      </button>
    );
  }

  return (
    <button onClick={() => setLight(light = 0)} className="LightSwitchButton">
      {/* When the state is off */}<span className="off"><i>💡</i> I'm off!</span>
    </button>
  );
}

export default LightSwitchButton;