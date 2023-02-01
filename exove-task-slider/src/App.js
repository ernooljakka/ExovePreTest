import './App.css';
import { useState } from 'react';
import ReactSlider from "react-slider";

function App () {

  const [currentValue, setCurrentValue] = useState(127);
  const [afterDraggingValue, setAfterDraggingValue] = useState();

  const handler = (currentValue) => {
    setCurrentValue(currentValue);
  }

  const setBackgroundColor = (number) => {
    setAfterDraggingValue(number);
    let rgb = 'rgb(' + number + ',' + number + ',' + number + ')';
    document.getElementById("App").style.backgroundColor = rgb;
    document.querySelector('p').innerHTML = 'New background color is ' + rgb;
  }

  return (
    <div className="App" id='App'>
      <div className="content">
        <h1>
          This is my slider, 
          give it a try:) 
        </h1>
        <ReactSlider
        className='mySlider'
        trackClassName="mySlider-track"
        thumbClassName="mySlider-thumb"
        markClassName="mySlider-mark"
        defaultValue={127}
        marks={25}
        max={255}
        min={0}
        value={currentValue}
        onChange={(value) => handler(value)}
        onAfterChange={(value) => setBackgroundColor(value)}
        />
        <h2>Current number: {currentValue}</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
