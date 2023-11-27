import Messi from "../assets/Messi.mp3"

const PlayerNeo1 = () => {
  return (
    <div >
      <audio src={Messi} controls style={{width:"250px"}}></audio>
    </div>
  )
}

export default PlayerNeo1