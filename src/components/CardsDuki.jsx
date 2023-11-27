import Card1 from "../assets/Cotto.jpg"
import Card2 from "../assets/Rockstar.jpg"
import Card3 from "../assets/Goteo.jpg"
import PlayerDuki1 from "./PlayerDuki1"
import PlayerDuki2 from "./PlayerDuki2"
import PlayerDuki3 from "./PlayerDuki3"


const CardsDuki = () => {
    return (
        <>
            <div className="container justify-around flex translate-x-10">
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card1} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Hello Cotto</h5>
                        <PlayerDuki1/>
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/422Avi2VjqZKCVzstKmqog?si=8f07106021764711" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card2} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Rockstar</h5>
                        <PlayerDuki2 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/3E4ZzO4ySupnYypDPXcc3D?si=58a94f16ca044682" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>
                <div className="card bg-slate-800" style={{ width: "18rem" }}>
                    <img src={Card3} className="card-img-top" alt="..." />
                    <div className="card-body text-white">
                        <h5 className="text-lg text-center pb-2">Goteo</h5>
                        <PlayerDuki3 />
                        <br />
                        <a href="https://open.spotify.com/intl-es/track/1EoEU4HY57qaITp06TkC6B?si=781ecb27442e4cc1" target="_blank" className="btn btn-primary translate-x-12">Escuchar en Spotify</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardsDuki