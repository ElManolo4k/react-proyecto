import Medusa from "../assets/Medusa.mp3"

const PlayerNeo2 = () => {
  return (
    <div >
      <audio src={Medusa} controls style={{width:"250px"}}></audio>
    </div>
  )
}

export default PlayerNeo2