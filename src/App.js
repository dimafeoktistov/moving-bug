import React, { useState } from "react";

import Bug from "./components/Bug";
import "./App.css";

const App = () => {
  const [speed, setSpeed] = useState(5);
  const handleSpeedIncrease = () => setSpeed(speed + 1);
  const handleSpeedDecrease = () => setSpeed(speed - 1);

  const [direction, setDirection] = useState(true);
  const handleDirectionChange = () => setDirection(!direction);

  const [d3easing, setD3easing] = useState(false);
  const handleD3easingChange = () => setD3easing(!d3easing);

  const [easeFunction, setEaseFunction] = useState("circleIn");
  const handleEaseFunctionChange = e => setEaseFunction(e.target.value);

  const [duration, setDuration] = useState(1500);
  const handleDurationChange = e => setDuration(parseInt(e.target.value));

  return (
    <div className="App">
      <header className="App-header">Жук</header>
      <main className="content">
        <Bug
          speed={speed}
          direction={direction}
          d3easing={d3easing}
          easeFunction={easeFunction}
          duration={duration}
        />
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
          <fieldset>
            <legend>Управлять жуком кривыми Безье</legend>
            <label htmlFor="d3easing">Включить кривые Безье</label>
            <input
              type="checkbox"
              id="d3easing"
              value={!d3easing}
              onChange={handleD3easingChange}
            />

            <label htmlFor="ease-function">Выберите функцию</label>
            <select
              id="ease-function"
              value={easeFunction}
              onChange={handleEaseFunctionChange}
              disabled={!d3easing}
            >
              <option value="circleIn">circleIn</option>
              <option value="expIn">expIn</option>
              <option value="expOut">expOut</option>
              <option value="bounceIn">bounceIn</option>
              <option value="bounceOut">bounceOut</option>
              <option value="elasticOut">elasticOut</option>
            </select>

            <label htmlFor="duration">Длительность анимации</label>
            <input
              type="range"
              id="duration"
              min="500"
              max="3500"
              value={duration}
              onChange={handleDurationChange}
              disabled={!d3easing}
            />
            {duration}
          </fieldset>
        </aside>
      </main>
    </div>
  );
};

export default App;
