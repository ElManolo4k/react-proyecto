import Card1 from "../assets/TrapNExportCard.png"
import Card2 from "../assets/VueltaALaLunaCard.jpg"
import Card3 from "../assets/UHCard.jpg"
import PlayerInicio1 from "./PlayerInicio1"
import PlayerInicio2 from "./PlayerInicio2"
import PlayerInicio3 from "./PlayerInicio3"


const CardsInicio = () => {
    return (
        <>
            <div className="container justify-between flex translate-x-10">
                <div className="card bg-slate-800" style={{width: "18rem"}}>
                    <img src={Card1} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Trap N Export</h5>
                        <PlayerInicio1/>
                        <br />
                        <a href="https://open.spotify.com/track/3aozFlnbP7zhcJKi9O0FUz?si=ZNDr4pvLTyuq2TNr0_-xtA" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{width: "18rem"}}>
                    <img src={Card2} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Vuelta a la Luna Remix</h5>
                        <PlayerInicio2/>
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/37Z1uelkuUbbigFRWAhGjN?si=7af5ad31f8ba4b64" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{width: "18rem"}}>
                    <img src={Card3} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">UH</h5>
                        <PlayerInicio3/>
                        <br />
                        <a href="https://open.spotify.com/track/3aozFlnbP7zhcJKi9O0FUz?si=ZNDr4pvLTyuq2TNr0_-xtA" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                
            </div>
             
        </>
    )
}

export default CardsInicio