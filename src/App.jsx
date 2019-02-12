import React, { useState } from 'react';

import Bug from './components/Bug';
import SpeedControl from './components/SpeedControl';
import BugNumControl from './components/BugNumControl';
import DirectionControl from './components/DirectionControl';
import CurvesControl from './components/CurvesControl';

import './App.css';

const App = () => {
  const [speed, setSpeed] = useState(5);
  const handleSpeedIncrease = () => setSpeed(speed + 1);
  const handleSpeedDecrease = () => setSpeed(speed - 1);

  const [direction, setDirection] = useState(true);
  const handleDirectionChange = () => setDirection(!direction);

  const [d3easing, setD3easing] = useState(false);
  const handleD3easingChange = () => setD3easing(!d3easing);

  const [easeFunction, setEaseFunction] = useState('circleIn');
  const handleEaseFunctionChange = e => setEaseFunction(e.value);

  const [duration, setDuration] = useState(1500);
  const handleDurationChange = e => setDuration(parseInt(e.target.value, 10));

  const [bugsNum, setBugsNum] = useState(1);
  const handleBugsNumIncrease = () => setBugsNum(bugsNum + 1);
  const handleBugsNumDecrease = () => setBugsNum(bugsNum - 1);

  return (
    <div className="app">
      <main className="content" role="application">
        <Bug
          speed={speed}
          direction={direction}
          d3easing={d3easing}
          easeFunction={easeFunction}
          duration={duration}
          bugsNum={bugsNum}
        />
      </main>
      <aside className="sidebar">
        <h1>Модуль управления жуком!</h1>
        <SpeedControl
          speed={speed}
          handleSpeedDecrease={handleSpeedDecrease}
          handleSpeedIncrease={handleSpeedIncrease}
        />

        <BugNumControl
          bugsNum={bugsNum}
          handleBugsNumDecrease={handleBugsNumDecrease}
          handleBugsNumIncrease={handleBugsNumIncrease}
        />

        <DirectionControl direction={direction} handleDirectionChange={handleDirectionChange} />

        <CurvesControl
          d3easing={d3easing}
          handleD3easingChange={handleD3easingChange}
          duration={duration}
          handleDurationChange={handleDurationChange}
          easeFunction={easeFunction}
          handleEaseFunctionChange={handleEaseFunctionChange}
        />
      </aside>
    </div>
  );
};

export default App;
