import './App.css'

export default function Msg({msg, setMsg, modeChosen, player, result}) {

  function hideMsg() {
    setMsg('')
  }
  return (
    <>
      <div className={`msg ${modeChosen == 'ai' ? 'reducedWidth' : ''}`}>
        <span>{msg}</span> {!result && player && <button onClick={hideMsg}>Ok</button> }
      </div>
    </>
  )
}