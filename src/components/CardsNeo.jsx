import Card1 from "../assets/Messi.jpg"
import Card2 from "../assets/Medusa.webp"
import Card3 from "../assets/Rivotril.jpg"
import PlayerNeo1 from "./PlayerNeo1"
import PlayerNeo2 from "./PlayerNeo2"
import PlayerNeo3 from "./PlayerNeo3"

const CardsNeo = () => {
  return (
    <>
    <div className="container justify-around flex translate-x-10">
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card1} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Messi</h5>
                        <PlayerNeo1/>
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/3wcTpbJfzaQ3MHt22ZJgqm?si=b651c2678d614921" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card2} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Medusa</h5>
                        <PlayerNeo2 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/4hSHbagV828laWkMeG9bcr?si=c7f5e86191844e71" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card3} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Rivotril</h5>
                        <PlayerNeo3 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/4SeQaoWWeoII45u78uOBIc?si=8c728f911d7b46c6" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>

            </div>
    </>
  )
}

export default CardsNeo