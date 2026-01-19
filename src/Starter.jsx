import './App.css'

export default function Starter({setMode}) {
  return (
    <>
      <div className="starter">
        <h2>Let's start the game!</h2>
        <button className='ai' onClick={() => setMode('easy')}>You Vs AI (Easy)</button>
        <button className="ai" onClick={() => setMode('ai')}>You Vs AI</button>
        <button className="twoPly" onClick={() => setMode('twoPly')}>Two-Ply Game</button>
      </div>
    </>
  );
}