import HelloCotto from "../assets/Cotto.mp3"

const PlayerDuki1 = () => {
  return (
    <div >
      <audio src={HelloCotto} controls style={{width:"250px"}}></audio>
    </div>
  )
}

export default PlayerDuki1