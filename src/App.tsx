import React from 'react';
import logo from './logo.png';
import './App.css';








// Functions and variables

function tos() {
  window.location.href = "http://deadvideo.askodia.com/tos.html";
}

function sylo() {
  window.location.href = "http://deadvideo.askodia.com/sylo.html";
}

// actual app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
        className="tittle">
          dead_video
        </p>
        
        <div
        className='devi'
        >
          <button
          className='tos'
          onClick={tos}>
            The Ohio Show</button> 

            <button
             className="sylo"
            onClick={sylo}
             >
              Sylo_
            </button>
        </div>

        
      </header>

      <div
      className='notice'
      >
        
          <p
            >
            BETA 0.1
          </p>
          <p>
            Thanks for testing the new UI. 
          </p>
        </div>
    </div>
  );
}

export default App;
