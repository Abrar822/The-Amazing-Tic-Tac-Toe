import "./App.css";

export default function Input({ setPlayer, player, setNameSubmit, setMsg }) {

  function validation() {
    const isValidated = Object.values(player).every(val => val.trim() !== '') && Object.values(player).length == 2
    if(isValidated) {
        setMsg('')
        setNameSubmit(true)
    } else {
        setMsg('Please Fill the Details!')
    }
  }

  return (
    <>
      <div className="input">
        <h2>Let's start the game!</h2>
        <span>
          <strong>Player-1: </strong>
          <input
            name="p1"
            type="text"
            className="p1"
            onChange={(e) => setPlayer(prev => ({...prev, [e.target.name]: e.target.value}))}
          />
        </span>
        <span>
          <strong>Player-2: </strong>
          <input
            name="p2"
            type="text"
            className="p2"
            onChange={(e) => setPlayer(prev => ({...prev, [e.target.name]: e.target.value}))}
          />
        </span>
        <button className="submit" onClick={validation}>
          Submit
        </button>
      </div>
    </>
  );
}