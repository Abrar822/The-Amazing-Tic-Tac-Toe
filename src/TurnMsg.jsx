import './App.css'

export default function TurnMsg({turnMsg, turnAI, modeChosen}) {
  return (
    <>
      <div className="msg turnMsg">
        <span>{(modeChosen == 'twoPly') 
        ? (turnMsg?.charAt(0).toUpperCase() + turnMsg.slice(1)) 
        : (turnAI.charAt(0).toUpperCase() + turnAI.slice(1))
      }'s Turn</span>
      </div>
    </>
  )
}