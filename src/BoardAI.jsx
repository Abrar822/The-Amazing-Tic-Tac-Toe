import { useEffect } from "react";
import "./App.css";

export default function BoardAI({ board, result, winCells, turn, setTurn, setBoard, setWinCells, setResult, setMsg, boardResetCounter }) {
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

  function minimax(brd, isMax) {
    let [myResult, arr] = checkWinner(brd)
    if(myResult == 'X') {
      return -1
    } else if(myResult == 'O') {
      return 1
    } else if(myResult == 'Draw') {
      return 0
    }

    if (isMax) {
      let best = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (brd[i] == "") {
          brd[i] = "O";
          best = Math.max(best, minimax(brd, false));
          brd[i] = "";
        }
      }
      return best;
    } else {
      let best = Infinity;
      for (let i = 0; i < 9; i++) {
        if (brd[i] == "") {
          brd[i] = "X";
          best = Math.min(best, minimax(brd, true));
          brd[i] = "";
        }
      }
      return best;
    }
  }

  function bestMove(brd) {
    let best = -Infinity
    let move = null
    for(let i = 0; i < 9; i++) {
      if(brd[i] == '') {
        brd[i] = 'O'
        let score = minimax(brd, false)
        brd[i] = ''
        if(score > best) {
          best = score
          move = i
        }
      }
    }
    return move
  }

  useEffect(() => {
    setTimeout(() => {
      if(turn == 'O') {
        let brd = [...board]
        let move = bestMove(brd)
        if(move !== null) brd[move] = 'O'
        setBoard([...brd])

        let [ress, arr] = checkWinner(brd)
        if(ress) {
          setWinCells(arr)
          setResult(ress)
          if(ress == 'O') {
            setMsg('You Lose!')
          } else if(ress == 'X') {
            setMsg('You Won!')
          } else if(ress == 'Draw') {
            setMsg('Nice! Match Draw!')
          }
        }
        setTurn('X')
      }
    }, 100)
  }, [turn])

  return (
    <>
      <div className="board">
        {board.map((cell, index) => (
          <button key={`${boardResetCounter} - ${index}`} className={`
            cells ${cell !== '' || result ? 'eventsNone': ''} ${winCells?.includes(index) ? 'winCells' : ''} `} 
            onClick={
              () => {
                if(result || !board.includes('')) return

                let brd = [...board]
                if(turn === 'X') {
                  brd[index] = 'X'
                  setBoard([...brd])

                  let [ress, arr] = checkWinner(brd)
                  if(ress) {
                    setWinCells(arr)
                    setResult(ress)
                    if(ress == 'O') {
                      setMsg('You Lose!')
                    } else if(ress == 'X') {
                      setMsg('You Won!')
                    } else if(ress == 'Draw') {
                      setMsg('Match Draw!')
                    }
                  }
                  setTurn('O')
                }
              }
            }
              style={{animationDelay: `${index * 100}ms`}}
            >{cell}<span className="innerCell"></span></button>
        ))}
      </div>
    </>
  );
}