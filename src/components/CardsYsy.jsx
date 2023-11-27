import Card1 from "../assets/TamoLoco.png"
import Card2 from "../assets/Silbando.jpg"
import Card3 from "../assets/Hidro.jpg"
import PlayerYsy1 from "./PlayerYsy1"
import PlayerYsy2 from "./PlayerYsy2"
import PlayerYsy3 from "./PlayerYsy3"

const CardsYsy = () => {
  return (
    <div className="container justify-around flex translate-x-10">
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card1} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Tamo Loco</h5>
                        <PlayerYsy1/>
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/3EsXS6UlpHtJvopnLTbsiT?si=ce9194ccaacf46ad" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card2} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Silbando</h5>
                        <PlayerYsy2 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/6TI490muJ6RgFsYJc626BZ?si=259fb0f9b5744cec" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card3} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Hidro</h5>
                        <PlayerYsy3 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/2as7AQfl3uoUbNazMXDKFC?si=23f9ea20594343b5" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>

            </div>
  )
}

export default CardsYsy