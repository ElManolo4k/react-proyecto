import TrapNExport from "../assets/TrapNExport.mp3"

const PlayerInicio1 = () => {
  return (
    <div >
      <audio src={TrapNExport} controls style={{width:"250px"}}></audio>
    </div>
  )
}

export default PlayerInicio1;