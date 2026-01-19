import { useEffect, useState } from "react";
import Board from "./Board";
import Input from "./Input";
import Msg from "./Msg";
import Starter from "./Starter";
import TurnMsg from "./TurnMsg";
import BoardAI from "./BoardAI";
import BoardEasy from "./BoardEasy";

export default function App() {

  const [board, setBoard] = useState(Array(9).fill().map(() => ('')))
  const [player, setPlayer] = useState({})
  const [msg, setMsg] = useState('')
  const [nameSubmit, setNameSubmit] = useState(false)
  const [modeChosen, setMode] = useState('')
  const [turn, setTurn] = useState('X')
  const [winCells, setWinCells] = useState([])
  const [result, setResult] = useState(null)
  // states for animation stuff...
  const [boardResetCounter, setBoardResetCounter] = useState(0)
  const [typing, setTyping] = useState('')

  // for title typing animation
  useEffect(() => {
    let str = 'Tic Tac Toe'
    let temp = ''
    for(let i = 0; i < str.length; i++) {
      setTimeout(() => {
        temp += str[i]
        setTyping(temp)
      }, i * 60)
    }
  }, [])

  // probability based turn for twoPly Mode
  useEffect(() => {
    if(modeChosen == 'twoPly') {
      setTurn(Math.random() < 0.5 ? 'X' : 'O')
    }
  }, [modeChosen])

  // Setting up the turn for different modes
  const turnMsg = (turn === 'X' && modeChosen == 'twoPly') ? player.p1 : player.p2
  const turnAI = (turn === 'X' && (modeChosen == 'ai' || modeChosen == 'easy')) ? 'Your' : 'Computer'

  // newGame button action
  function newGame() {
    let brd = Array(9).fill().map(() => '')
    setBoard([...brd])
    setPlayer({})
    setMsg('')
    setNameSubmit(false)
    setTurn('X')
    setWinCells([])
    setResult(null)
    setTurn(Math.random() < 0.5 ? 'X' : 'O')

    setBoardResetCounter(prev => prev + 1)
  }

  // playagain button action
  function playAgain() {
    let brd = Array(9).fill().map(() => '')
    setBoard(brd)
    setMsg('')
    setTurn('X')
    setWinCells([])
    setResult(null)
    if(modeChosen == 'ai') setTurn(Math.random() < 0.5 ? 'X' : 'O')
    if(modeChosen == 'easy') setTurn('X')

    setBoardResetCounter(prev => prev + 1)
  }

  // back button function
  function back() {
    let brd = Array(9).fill().map(() => '')
    setBoard(brd)
    setPlayer({})
    setMsg('')
    setNameSubmit(false)
    setTurn('X')
    setWinCells([])
    setResult(null)
    setTurn(Math.random() < 0.5 ? 'X' : 'O')
    setMode('')
  }

  return (
    <>
      <h1 className="title">{typing}</h1>
      
      { msg && <Msg msg={msg} setMsg={setMsg} modeChosen={modeChosen} player={player} result={result}/>}

      { modeChosen == 'twoPly' && nameSubmit && !msg && player && turnMsg && !result && <TurnMsg turnMsg={turnMsg} modeChosen={modeChosen}/>}

      {
        !result && modeChosen == 'ai' && !msg && turnAI && <TurnMsg  turnAI={turnAI} modeChosen={modeChosen}/>
      }

      {
        !result && modeChosen == 'easy' && <TurnMsg turnAI={turnAI} modeChosen={modeChosen} />
      }

      { !modeChosen && <Starter setMode={setMode}/> }

      { modeChosen == 'twoPly' && !nameSubmit && <Input setPlayer={setPlayer} player={player} setNameSubmit={setNameSubmit} setMsg={setMsg}/> }

      { modeChosen == 'twoPly' && <Board board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} result={result} setResult={setResult} setMsg={setMsg} setWinCells={setWinCells} winCells={winCells} turnMsg={turnMsg} boardResetCounter={boardResetCounter}/> }

      { modeChosen == 'ai' && <BoardAI board={board} result={result} winCells={winCells} turn={turn} setTurn={setTurn} setBoard={setBoard} setWinCells={setWinCells} setResult={setResult} setMsg={setMsg} boardResetCounter={boardResetCounter}/>}

      { modeChosen == 'easy' && <BoardEasy board={board} setBoard={setBoard} setWinCells={setWinCells} result={result} turn={turn} setTurn={setTurn}  turnAI={turnAI} setMsg={(setMsg)} setResult={setResult} winCells={winCells} boardResetCounter={boardResetCounter}/> }

      {
        result && modeChosen == 'twoPly' && <div className="btnContainer">
          <button className="back" onClick={back}>Back</button>
          <button className="playAgain" onClick={playAgain}>Play Again</button>
          <button className="newGame" onClick={newGame}>New Game</button>
        </div>
      }
      {
        result && (modeChosen == 'ai' || modeChosen == 'easy') && <div className="btnContainer">
          <button className="back" onClick={back}>Back</button>
          <button className="playAgain" onClick={playAgain}>Play Again</button>
        </div>
      }
    </>
  )
}