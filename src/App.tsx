import React from 'react';
import logo from './logo.png';
import './App.css';

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
          <a
            className="tos"
            href="http://deadvideo.askodia.com/tos.html"
          >
            The Ohio Show 
          </a>

            <a
              className="sylo"
              href="http://deadvideo.askodia.com/sylo.html"
            >
           Sylo
            </a>
        </div>

        
      </header>

      <div
      className='notice'
      >
        
          <p
            >
            Beta version.
          </p>
          <p>
            Thanks for testing the new UI. 
          </p>
        </div>
    </div>
  );
}

export default App;
