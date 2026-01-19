import "./App.css";

export default function Board({ board, setBoard, setTurn, turn, result, setResult, setMsg, setWinCells, winCells, turnMsg, boardResetCounter }) {
  function checkWinner(brd) {
    let wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    for(const [a, b, c] of wins) {
      if(brd[a] == brd[b] && brd[b] == brd[c] && brd[b] != '') {
        return [brd[a], [a, b, c]]
      }
    }
    if(!brd.includes('')) {
      return ['Draw', null]
    } else {
      return [null, null]
    }
  }

  return (
    <>
      {
        <div className="board">
          {board.map((cell, index) => (
            <button key={`${boardResetCounter} - ${index}`} className={`
                cells ${cell !== '' || result ? 'eventsNone': ''} ${winCells?.includes(index) ? 'winCells' : ''} `} onClick={
              () => {
                if(cell !== '' || result) return

                let brd = [...board]
                brd[index] = turn
                setBoard([...brd])
                setTurn(prev => (prev == 'X' ? 'O' : 'X'))
                let [res, arr] = checkWinner(brd)
                setWinCells(arr)

                if(res == 'X' || res == 'O') {
                  setMsg(`Winner: ${turnMsg.charAt(0).toUpperCase() + turnMsg.slice(1)}`)
                  setResult(res)
                } else if(res == 'Draw') {
                  setMsg('The Match is Draw!')
                  setResult(res)
                }
              }
            } 
              style={{animationDelay: `${index * 100}ms`}}
            >{cell}<span className="innerCell"></span></button>
          ))}
        </div>
      }
    </>
  )
}