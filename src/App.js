import React, { useState, useEffect, useRef } from 'react';
import WOW from "wow.js"; // animation
import './App.css';

import { verbs, shiftDURATION } from './data';

var moment = require('moment'); // time management

function App() {
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState(20);
  const [start, setStart] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    
    // creates a new animation object and initializes it.
    const wow = new WOW();
    wow.init();
  });

  async function handleClick() {
    if(count === 0) {
      await setStart(moment().unix());
      await setCount(1, setLeft(20 - 1));
    } else {
      setCount(count + 1, setLeft(left - 1));
    }
  }

  let warn = `time left ${shiftDURATION - left}`

  return (
    <div className='App'>
      <div className="side-sentence">пуш тхе буттон то аппеассе тхе оверлоардс</div>
      <div className="container">
        <div className='you-are'>
          <p className='you-are-text'>you are</p>
        </div>
        <p className='count' onClick={handleClick}>
          {count}
        </p>
        <div className="verb">
          <p className='verb-text'>{count < 21 ? verbs[count] : verbs[20]}</p>
        </div>
      </div>
      {/* <p>{warn}</p> */}
    </div>
  );
}

export default App;

