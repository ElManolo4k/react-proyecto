import VueltaALaLuna from "../assets/VueltaALaLuna.mp3"

const PlayerInicio2 = () => {
  return (
    <div >
      <audio src={VueltaALaLuna} controls style={{width:"250px"}}></audio>
    </div>
  )
}

export default PlayerInicio2;