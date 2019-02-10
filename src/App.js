import React, { useState } from "react";

import Bug from "./components/Bug";
import "./App.css";

const App = () => {
  // Стейт отвечающий за скорость
  const [speed, setSpeed] = useState(5);
  const handleSpeedIncrease = () => setSpeed(speed + 1);
  const handleSpeedDecrease = () => setSpeed(speed - 1);

  // Стейт отвечающий за направление
  const [direction, setDirection] = useState(true);
  const handleDirectionChange = () => setDirection(!direction);

  return (
    <div className="App">
      <header className="App-header">Жук</header>
      <main className="content">
        <Bug speed={speed} direction={direction} />
        <aside>
          <div className="speed-control">
            Уровень скорости {speed}
            <button
              type="button"
              disabled={speed === 10}
              onClick={handleSpeedIncrease}
            >
              +
            </button>
            <button
              type="button"
              disabled={speed === 1}
              onClick={handleSpeedDecrease}
            >
              -
            </button>
          </div>
          <div className="direction-control">
            {direction ? "Жук догоняет" : "Жук убегает"}
            <button type="button" onClick={handleDirectionChange}>
              Поменять
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
