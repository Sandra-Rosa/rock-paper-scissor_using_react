import girl from './images/girl.png';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissors.png'

import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState("Let's see who wins")
  const [gameOver, setGameOver] = useState(false)

  const choices = ['rock', 'paper', 'scissors']
  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5) {
          setResult('User Wins🤩')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])


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
            <div className='rock'>
              <img className='hand' src={rock}></img>
              <button onClick={() => handleClick('rock')} disabled={gameOver}>Rock</button>
            </div>
            <div className="paper">
              <img className='hand' src={paper}></img>
              <button onClick={() => handleClick('paper')} disabled={gameOver}>Paper</button>
            </div>
            <div className='scissor'>
              <img className='hand' src={scissor}></img>
              <button onClick={() => handleClick('scissors')} disabled={gameOver}>Scissors</button>
            </div>
          </div>
          <br></br>
          <div className='result'>
            <span>Turn Result: {turnResult} </span>
            <span>Final Result: {result} </span>
          </div>
          <div className='button-div'>
            {gameOver &&
              <button className='button' onClick={() => reset()}>Restart Game</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

