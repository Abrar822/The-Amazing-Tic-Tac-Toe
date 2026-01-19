import { useEffect } from "react";
import "./App.css";

export default function BoardEasy({ board, result, setWinCells, setBoard, turn, setTurn, turnAI, setMsg, setResult, winCells, boardResetCounter }) {
  
  function checkWinner(brd) {
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of wins) {
      if (brd[a] === brd[b] && brd[b] === brd[c] && brd[c] !== "")
        return [brd[a], [a, b, c]];
    }
    if (!brd.includes("")) return ["Draw", null];
    return [null, null];
  }

  useEffect(() => {
    if(!board.includes('') || result) return

    setTimeout(() => {
      let brd = [...board]
      let idx;
      while(true) {
        idx = Math.floor(Math.random() * 9)
        if(brd[idx] == '') {
          break
        }
      }

      if(turn == 'O') {
        if(brd[idx] == '') {
          brd[idx] = 'O'
          setBoard([...brd])
        }
        
        let [ress, arr] = checkWinner(brd)
        if(ress) {
          setResult(ress)
          setWinCells(arr)
          if(ress == 'O') {
            setMsg('You Lose!')
          } else if(ress == 'X') {
            setMsg('Congrats! You Won!')
          } else if(ress == 'Draw') {
            setMsg('Match Draw!')
          }
        }
        setTurn('X')
      }
    }, 100)
  }, [turn])

  return (
    <>
      <div className="board">
        {
          board.map((cell, index) => (
            <button key={`${boardResetCounter} - ${index}`} className={`
              cells ${cell !== '' || result ? 'eventsNone': ''} ${winCells?.includes(index) ? 'winCells' : ''} `} 
              onClick={
                () => {
                  if(result || !board.includes('')) return

                  let brd = [...board]
                  if(turn === 'X') {
                    brd[index] = 'X'
                  }
                  setBoard([...brd])

                  let [ress, arr] = checkWinner(brd)
                  if(ress) {
                    setWinCells(arr)
                    setResult(ress)
                    if(ress == 'O') {
                      setMsg('You Lose!')
                    } else if(ress == 'X') {
                      setMsg('Congrats! You Won!')
                    } else if(ress == 'Draw') {
                      setMsg('Match Draw!')
                    }
                  }
                  setTurn('O')
                }
              }
                style={{animationDelay: `${index * 100}ms`}}
              >{cell}<span className="innerCell"></span></button>
          ))
        }
      </div>
    </>
  );
}