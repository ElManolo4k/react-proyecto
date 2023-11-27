import ImagenHero from "../assets/YsyHero.jpg"

const HeroYsy = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5 text-white">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={ImagenHero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold  lh-1 mb-3">Ysy A</h1>
                    <p className="lead">Ysy A es un rapero y compositor argentino, En 2013, cuando tenía 13 años, fundó la competencia de rap El Quinto Escalón, junto al músico y presentador Muphasa MC. Esta competencia se convirtió en la más importante de Sudamérica. Después de la finalización de El Quinto Escalón, Ysy A se dedicó a su carrera musical como solista.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><a href="https://open.spotify.com/intl-es/artist/2qWK8K2Jfh67UqtwY8tCW6?si=HfTcBJsESFumB13xLpIktQ" target="_blank">Perfil en Spotify</a></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroYsy