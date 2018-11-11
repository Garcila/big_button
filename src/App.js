import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const verbs = ['ghost','weightless','translucent','spark','krill','here','hungry','present','above','future','obsolete!'];

  function handleClick() {
    setCount(count + 1);
  }

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
          <p className='verb-text'>{count < 11 ? verbs[count] : verbs[10]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
