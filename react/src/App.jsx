import {useState} from "react";
import {useEffect} from "react";


const options = ['rock', 'paper', 'scissors']

const App = () => {

  const [pMove, setPMove] = useState('')
  const [pScore, setPScore] = useState(0)
  const [cMove, setCMove] = useState('')
  const [cScore, setCScore] = useState(0)

  const [showMoveOptions, setShowMoveOptions] = useState(false)
  const [showPlayAgainOptions, setShowPlayAgainOptions] = useState(false)
  const [showStartGame, setShowStartGame] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState('')

  const startGame = () => {
    setShowStartGame(false)
    setAlert('Shoot!')
    setShowAlert(true)
    setShowMoveOptions(true)
  }

  const playAgain = () => {
    setAlert('Shoot!')
    setPMove('')
    setCMove('')
    setShowMoveOptions(true)
    setShowPlayAgainOptions(false)
  }

  const resetScore = () => {
    setAlert('Score reset')
    setPScore(0)
    setCScore(0)
    setPMove('')
    setCMove('')
    setShowMoveOptions(false)
    setShowStartGame(true)
    setShowPlayAgainOptions(false)
  }

  const game = () => {
    setShowPlayAgainOptions(true)
    setShowMoveOptions(false)
    if (pMove === cMove) {
      handleScore('tie')
    }
    else if ((pMove === 'rock' && cMove === 'scissors') ||
       (pMove === 'paper' && cMove === 'rock') ||
       (pMove === 'scissors' && cMove === 'paper')) {
      handleScore('player')
    }
    else {
      handleScore('computer')
    }
  }

  const handleScore = (winner) => {
    if (winner === 'player') {
      setPScore(pScore + 1)
      setAlert('Congratulations! You Win!')
      return
    }
    if (winner === 'computer') {
      setCScore(cScore + 1)
      setAlert('You lose, sucker!')
      return
    }
    setAlert('Tie game!')
  }

  useEffect(() => {
    const getRandomComputerMove = () => {
      setTimeout(() => {
        setCMove(options[Math.floor(Math.random() * 2)])
      }, 2000)
      setAlert('Computer is thinking...')
    }
    pMove && getRandomComputerMove()
  }, [pMove])

  useEffect(() => {
    pMove && game()
  }, [cMove])

  console.log(pMove)
  console.log(cMove)


  return (
    <>
      <h1>Rock, Paper Scissors</h1>

      {showAlert && <h3>{alert}</h3>}

      <div className='player-container'>
        <div className='score-container'>
          <h3>player score: {pScore}</h3>
        </div>
        <div className='move-container'>
          <h4>{pMove}</h4>
        </div>
      </div>

      <div className='computer-container'>
        <div className='score-container'>
          <h3>computer score: {cScore}</h3>
        </div>
        <div className='move-container'>
          <h4>{cMove}</h4>
        </div>
      </div>

      {showMoveOptions &&
        <div className='Move-action-btn-container'>
          <button className='Move-action-btn' onClick={() => setPMove('rock')}>Rock</button>
          <button className='Move-action-btn' onClick={() => setPMove('paper')}>Paper</button>
          <button className='Move-action-btn' onClick={() => setPMove('scissors')}>Scissors</button>
        </div>
      }

      {showStartGame &&
        <div className='start-game-btn-container'>
          <button className='start-game-btn' onClick={startGame}>start game</button>
        </div>
      }

      {showPlayAgainOptions &&
         <div className='play-again-btn- container'>
           <button className='play-again-btn' onClick={playAgain}>play again</button>
           <button className='reset-score-btn' onClick={resetScore}>reset score</button>
         </div>
      }
    </>
  )
  }

export default App
