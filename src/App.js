import React from "react";
import "./App.css";
import Board from './Board'


function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="contact">
        <a href="http://www.rrsalian16.com" target="_blank">
          Powered by www.rrsalian16.com
        </a>
      </div>
    </div>
  );
}

export default App;
