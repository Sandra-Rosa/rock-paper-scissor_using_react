import girl from './images/girl.png';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissors.png'

import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [userChoice, SetUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('roock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState("Let's see who wins")
  const [gameOver, setGameOver] = useState(false)

  const choice = ['rock', 'paper', 'scissors']
  return (
    <div className="App" >
      <span className="nav">Sandra Rosa Antony</span>
      <div className="main">
        <img src={girl} className='girl' alt="logo" />
        <div classname='content'>
          <span className="Heading">
            Rock-Paper-Scissors
          </span>
          <span>   </span>
          <div className='score'>
            <span>User Points: {userPoints} </span>
            <span>Computer Points: {computerPoints} </span>
          </div>
          <br></br>
          <div className='choices'>
            <div className='choice-user'>
              <img className='hand' src={rock}></img>
              <img className='hand' src={paper}></img>
              <img className='hand' src={scissor}></img>
            </div>
            <div className="button-choice">
              <button>Rock</button>
              <button>Paper</button>
              <button>Scissors</button>
            </div>
            </div>
            <br></br>
            <div className='result'>
              <span>Turn Result: {turnResult} </span>
              <span>Final Result: {result} </span>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

